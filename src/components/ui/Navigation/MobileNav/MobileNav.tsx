import HomeButton from '../HomeButton/HomeButton'
import BurgerButton from './BurgerButton/BurgerButton'
import Content from './Content/Content'
import { useState } from 'react'
const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className=' w-full  h-20 flex justify-between items-center px-4 py-2 bg-foreground'>
			<HomeButton />
			<BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
			<Content isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	)
}

export default MobileNav
