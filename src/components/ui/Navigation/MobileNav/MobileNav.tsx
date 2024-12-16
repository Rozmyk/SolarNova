import HomeButton from '../HomeButton/HomeButton'
import BurgerButton from './BurgerButton/BurgerButton'
import Content from './Content/Content'
import { useState, useEffect } from 'react'
const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false)
	useEffect(() => {
		if (isOpen) {
			document.body.style.position = 'fixed'
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.position = ''
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.position = ''
			document.body.style.overflow = ''
		}
	}, [isOpen])
	return (
		<div className=' w-full  h-20 flex justify-between items-center px-4 py-2 bg-foreground'>
			<HomeButton />
			<BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
			{isOpen && <Content />}
		</div>
	)
}

export default MobileNav
