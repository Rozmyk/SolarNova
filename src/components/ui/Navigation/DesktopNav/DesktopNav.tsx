import Buttons from '../Buttons/Buttons'
import HomeButton from '../HomeButton/HomeButton'
import ActionButtons from '../ActionButtons/ActionButtons'
const DesktopNav = () => {
	return (
		<div className=' max-w-screen-xl h-20   w-full flex justify-between items-center p-2  '>
			<HomeButton />
			<Buttons />
			<ActionButtons />
		</div>
	)
}

export default DesktopNav
