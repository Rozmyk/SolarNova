import HomeButton from '../HomeButton/HomeButton'
import BurgerButton from './BurgerButton/BurgerButton'
import Content from './Content/Content'
import { useState } from 'react'
const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className=' w-full  h-20 flex justify-between items-center p-2 bg-foreground'>
			<HomeButton />
			<BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
			{isOpen && <Content />}
		</div>
	)
}

export default MobileNav
