'use client'
import Image from 'next/image'
import Button from '@/components/ui/Button/Button'
import Wrapper from '@/components/Wrapper/Wrapper'
import { TbGridDots } from 'react-icons/tb'
import { CiBadgeDollar } from 'react-icons/ci'
import { PiHandCoinsLight } from 'react-icons/pi'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const TextWithIcon = ({
	text,
	icon: Icon,
}: {
	text: string
	icon: React.ComponentType<{ size?: number; className?: string }>
}) => {
	return (
		<div className=' flex justify-start items-center gap-2 mb-4 mt-4'>
			<div className=' text-[#40cb7f] bg-[#f7f7f7] flex justify-center items-center p-1.5 rounded-lg '>
				<Icon size={34} className='opacity-100 ' />
			</div>
			<p className='text-secondary font-semibold text-sm'>{text}</p>
		</div>
	)
}
const HeroSection = () => {
	const [isMobileView, setIsMobileView] = useState(false)
	const router = useRouter()
	const imageContainer = useRef(null)
	const title = useRef(null)
	const description = useRef(null)
	const icons = useRef(null)
	const buttons = useRef(null)
	useGSAP(() => {
		gsap.registerPlugin()

		const tl = gsap.timeline()
		tl.from(imageContainer.current, { scale: 0.8, duration: 1, ease: 'power2.out' })
		const tl2 = gsap.timeline()
		tl2
			.from(title.current, { opacity: 0, y: 50, duration: 0.5 })
			.from(description.current, { opacity: 0, y: 50, duration: 0.5 }, '-=0.3')
			.from(icons.current, { opacity: 0, y: 50, duration: 0.5 }, '-=0.3')
			.from(buttons.current, { opacity: 0, y: 50, duration: 0.5 }, '-=0.3')
	}, [])
	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth < 1100)
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	return (
		<>
			<Wrapper>
				<div className='w-full flex  flex-col md:flex-row justify-between items-center gap-4 relative z-10  p-4 '>
					<div className='w-full h-full md:w-1/2  flex justify-between items-center gap-4  md:mb-0 '>
						<div ref={imageContainer} className='relative w-[585px] '>
							<Image
								width={isMobileView ? 300 : 440}
								height={isMobileView ? 300 : 440}
								alt='solar farm'
								className='absolute top-1/2 left-1/2 z-10  -translate-x-1/2 -translate-y-1/2'
								src='/aboutUs/aboutUs.webp'
							/>
							<Image width={585} height={585} className='animate-spin-slow' src='/svg/halfcircle.svg' alt='' />
						</div>
					</div>
					<div className='w-full md:w-1/2 '>
						<h1 ref={title} className=' text-lg md:text-2xl xl:text-4xl  mb-4  font-semibold  w-full  text-secondary'>
							The Best Finance Consulting in Town Since 2007
						</h1>
						<p ref={description} className='text-sm text-darkText'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos cumque temporibus quibusdam ea
							veritatis tempore, numquam iusto obcaecati odio vero tenetur ut dicta rem accusantium quisquam iure quia
							ex cum!
						</p>
						<div ref={icons} className='flex justify-start items-center gap-4'>
							<TextWithIcon icon={CiBadgeDollar} text='Bussines Planning & Technologist' />
							<TextWithIcon icon={PiHandCoinsLight} text='Human and Consulting' />
						</div>
						<div ref={buttons} className='flex justify-start gap-4 items-center w-full mt-8'>
							<Button
								onClick={() => {
									router.push('/contact')
								}}>
								Contact
							</Button>{' '}
							<Button
								onClick={() => {
									router.push('/service')
								}}
								reverse>
								Our services
							</Button>
						</div>
					</div>
				</div>
			</Wrapper>
			<div className='absolute top-20 right-[-80px] -rotate-45 ' style={{ opacity: 0.03 }}>
				<TbGridDots color='black' size={300} />
			</div>
		</>
	)
}

export default HeroSection
