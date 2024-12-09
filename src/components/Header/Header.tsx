import HeaderImage from './HeaderImage/HeaderImage'
import HeaderContent from './HeaderContent/HeaderContent'
const Header = () => {
	return (
		<div className='w-full h-screen  relative flex justify-center items-center  p-4 mt-14 md:mt-0  '>
			<div className='flex flex-col justify-center   md:justify-between items-center max-w-screen-xl w-full h-full md:flex-row '>
				<HeaderContent />
				<HeaderImage />
			</div>
		</div>
	)
}

export default Header
