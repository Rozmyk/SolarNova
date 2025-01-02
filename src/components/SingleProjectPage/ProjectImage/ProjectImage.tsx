import Image from 'next/image'
import Button from '@/components/ui/Button/Button'
import TitleText from '@/components/ui/TitleText/TitleText'
import { useRouter } from 'next/navigation'
const ProjectImage = ({ title, src, description }: { title: string; src: string; description: string }) => {
	const router = useRouter()
	const handleRedirect = () => {
		router.push('/contact')
	}
	return (
		<div className=' relative w-full p-4 mb-72 md:mb-0'>
			<div className=' w-full md:w-3/4   h-96 relative rounded-lg overflow-hidden'>
				<Image fill src={src} alt='solar farm' />
			</div>
			<div className=' w-3/4 md:w-1/3 backdrop-blur-lg bg-white bg-opacity-90 rounded-md shadow-lg absolute  -bottom-1/2	 md:bottom-1/2  md:translate-y-[50%]  right-1/2 md:right-0  p-8    flex justify-center items-start flex-col translate-x-[50%] md:translate-x-0'>
				<TitleText>{title}</TitleText>
				<p className='text-[#6f6e6e] text-sm mb-4'>{description}</p>
				<Button onClick={handleRedirect}>Contact</Button>
			</div>
		</div>
	)
}

export default ProjectImage
