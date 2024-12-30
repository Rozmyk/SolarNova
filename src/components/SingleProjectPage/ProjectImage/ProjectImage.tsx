import Image from 'next/image'
import Button from '@/components/ui/Button/Button'
import TitleText from '@/components/ui/TitleText/TitleText'
const ProjectImage = ({ title, src, description }: { title: string; src: string; description: string }) => {
	return (
		<div className=' relative w-full'>
			<div className='w-3/4 bg-yellow-300 h-96 relative rounded-lg overflow-hidden'>
				<Image fill src={src} alt='solar farm' />
			</div>
			<div className='w-1/3 backdrop-blur-lg bg-white bg-opacity-90 rounded-md shadow-lg absolute top-10 right-0  p-8    flex justify-center items-start flex-col'>
				<TitleText>{title}</TitleText>
				<p className='text-[#6f6e6e] text-sm mb-4'>{description}</p>
				<Button>Contact</Button>
			</div>
		</div>
	)
}

export default ProjectImage
