import Buttons from '../Buttons/Buttons'
import HomeButton from '../HomeButton/HomeButton'
import ActionButtons from '../ActionButtons/ActionButtons'
const DesktopNav = () => {
	return (
		<div className=' max-w-screen-xl h-20   w-full flex justify-between items-center py-2 px-4  '>
			<HomeButton />
			<Buttons />
			<ActionButtons />
		</div>
	)
}

export default DesktopNav
