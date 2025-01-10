import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TitleText from '@/components/ui/TitleText/TitleText'
import Button from '@/components/ui/Button/Button'
import Wrapper from '@/components/Wrapper/Wrapper'
import { PiDotsNineThin } from 'react-icons/pi'

const ProjectImage = ({ title, description, src }: { title: string; description: string; src: string }) => {
	const router = useRouter()
	const imageRef = useRef(null)
	const titleRef = useRef(null)
	const descriptionRef = useRef(null)
	const buttonRef = useRef(null)

	const handleRedirect = () => {
		router.push('/contact')
	}

	useGSAP(() => {
		gsap.registerPlugin()

		const tl = gsap.timeline()
		tl.from(imageRef.current, { scale: 0.9, duration: 0.5, ease: 'power2.out' })
		const tl2 = gsap.timeline()
		tl2
			.from(titleRef.current, { opacity: 0, y: 50, duration: 0.5 })
			.from(descriptionRef.current, { opacity: 0, y: 50, duration: 0.5 }, '-=0.3')
			.from(buttonRef.current, { opacity: 0, y: 50, duration: 0.5 }, '-=0.3')
	}, [])

	return (
		<Wrapper>
			{' '}
			<div className='relative w-full p-4 mb-52 md:mb-0'>
				<div className='absolute -right-44 -top-20 z-0 opacity-5 '>
					<PiDotsNineThin color='black' size={300} />
				</div>
				<div ref={imageRef} className='w-full md:w-3/4 h-96 relative rounded-lg overflow-hidden'>
					<Image fill src={src} alt='solar farm' style={{ objectFit: 'cover', objectPosition: 'center' }} />
				</div>
				<div className='w-3/4 md:w-1/3 backdrop-blur-lg bg-white bg-opacity-90 rounded-md shadow-lg absolute -bottom-1/2 md:bottom-1/2 md:translate-y-[50%] right-1/2 md:right-0 p-8 flex justify-center items-start flex-col translate-x-[50%] md:translate-x-0'>
					<div ref={titleRef}>
						<TitleText>{title}</TitleText>
					</div>

					<p ref={descriptionRef} className='text-[#6f6e6e] text-sm mb-4'>
						{description}
					</p>
					<div ref={buttonRef}>
						<Button onClick={handleRedirect}>Contact</Button>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default ProjectImage
