import Image from 'next/image'
import { GoNorthStar } from 'react-icons/go'
const SingleAvatar = ({ src, alt }: { src: string; alt: string }) => {
	return <Image className='inline-block size-6 rounded-full ring-2 ring-white' src={src} alt={alt} />
}
const HeaderImage = () => {
	return (
		<div className='relative  w-full md:w-1/3 mb-40 md:mb-0 '>
			<div className='absolute top-2 right-6'>
				<GoNorthStar size={100} color='#40cb7f' />
			</div>

			<Image width={750} height={500} alt='Wind turbine ' src={'/headerImage.png'} />

			<div className='w-36 h-36 absolute bottom-[-72px] md:bottom-10 left-1/2 translate-x-[-50%] md:left-[-75px] md:translate-x-0 backdrop-blur-lg bg-white bg-opacity-60 flex flex-col justify-center items-center rounded-md shadow-lg'>
				<div className='flex -space-x-1 overflow-hidden mb-2'>
					<SingleAvatar src='/customerAvatar1.jpg' alt='portrait of a woman' />
					<SingleAvatar src='/customerAvatar2.jpg' alt='portrait of a  man' />
					<SingleAvatar src='customerAvatar3.jpg' alt='portrait of a young man' />
				</div>
				<p className=' text-2xl md:text-4xl font-medium text-secondary mb-2'>05K+</p>
				<p className='text-md ' style={{ color: '#6f6e6e', fontWeight: 500 }}>
					Customers
				</p>
			</div>
		</div>
	)
}

export default HeaderImage
