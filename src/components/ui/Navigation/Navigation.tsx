'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import DesktopNav from './DesktopNav/DesktopNav'
import MobileNav from './MobileNav/MobileNav'
const Navigation = () => {
	const [isMobileView, setIsMobileView] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth < 1100)
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	return (
		<nav className={` w-full  top-0 left-0  z-20 flex flex-col items-center  justify-center bg-background`}>
			{isMobileView ? <MobileNav /> : <DesktopNav />}
		</nav>
	)
}

export default Navigation
