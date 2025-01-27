import HeaderImage from './HeaderImage/HeaderImage'
import HeaderContent from './HeaderContent/HeaderContent'
const Header = () => {
	return (
		<div className='w-full  relative flex justify-center items-center  pt-12 pb-12 mt-12 xl:mt-0 mb-10  '>
			<div className='flex flex-col justify-center   md:justify-between items-center max-w-screen-xl w-full h-full md:flex-row '>
				<HeaderContent />
				<HeaderImage />
			</div>
		</div>
	)
}

export default Header
