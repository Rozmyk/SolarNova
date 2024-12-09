import HomeButton from '../HomeButton/HomeButton'
import BurgerButton from './BurgerButton/BurgerButton'
const MobileNav = () => {
	return (
		<div className=' w-full h-20 flex justify-between items-center p-2 bg-foregroundh'>
			<HomeButton />
			<BurgerButton />
		</div>
	)
}

export default MobileNav
