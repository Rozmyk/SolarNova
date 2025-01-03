import { GoNorthStar } from 'react-icons/go'
import Image from 'next/image'
const SingleAvatar = ({ src, alt }: { src: string; alt: string }) => {
	return <img className='inline-block size-6 rounded-full ring-2 ring-white' src={src} alt={alt} />
}
const HeaderImage = () => {
	return (
		<div className='relative  w-full md:w-1/3 mb-40 md:mb-0 '>
			<div className='absolute top-2 right-6 animate-spin-fast'>
				<GoNorthStar size={100} color='#40cb7f' />
			</div>

			<Image width={750} height={500} alt='Wind turbine' src='/header/headerImage.webp' />

			<div className='w-36 h-36 absolute bottom-[-72px] md:bottom-10 left-1/2 translate-x-[-50%] md:left-[-75px] md:translate-x-0 backdrop-blur-lg bg-white bg-opacity-60 flex flex-col justify-center items-center rounded-md shadow-lg'>
				<div className='flex -space-x-1 overflow-hidden mb-2 p-1'>
					<SingleAvatar src='/customers/customerAvatar1.webp' alt='portrait of a woman' />
					<SingleAvatar src='/customers/customerAvatar2.webp' alt='portrait of a  man' />
					<SingleAvatar src='/customers/customerAvatar3.webp' alt='portrait of a young man' />
				</div>
				<p className=' text-2xl md:text-4xl font-medium text-secondary mb-2'>05K+</p>
				<p className='text-md  text-[#6f6e6e]' style={{ fontWeight: 500 }}>
					Customers
				</p>
			</div>
		</div>
	)
}

export default HeaderImage
