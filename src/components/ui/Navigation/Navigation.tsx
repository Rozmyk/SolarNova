'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import DesktopNav from './DesktopNav/DesktopNav'
import MobileNav from './MobileNav/MobileNav'
const Navigation = () => {
	const [isMobileView, setIsMobileView] = useState(false)

	const [isAtTop, setIsAtTop] = useState(true)
	const pathname = usePathname()

	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth < 1100)
		}

		const handleScroll = () => {
			setIsAtTop(window.scrollY === 0)
		}

		handleResize()

		window.addEventListener('resize', handleResize)
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return (
		<nav
			className={` w-screen fixed top-0 left-0 right-0 z-20 flex flex-col items-center  justify-center bg-background`}>
			{isMobileView ? <MobileNav /> : <DesktopNav />}
		</nav>
	)
}

export default Navigation
