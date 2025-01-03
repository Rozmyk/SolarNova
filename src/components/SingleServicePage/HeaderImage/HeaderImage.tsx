import Image from 'next/image'
const HeaderImage = ({ src }: { src: string }) => {
	return (
		<div>
			<div className='w-96 h-96 rounded-full relative'>
				<div className='absolute z-0 top-1/2 left-1/2  rounded-full bg-transparent  border-dashed border-primary opacity-50 border-4 w-[450px] h-[450px] translate-y-[-50%] translate-x-[-50%] '></div>
				<Image className='rounded-full z-10' alt='xd' fill src={src} />
			</div>
		</div>
	)
}

export default HeaderImage
