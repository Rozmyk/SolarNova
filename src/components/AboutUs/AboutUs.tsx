'use client'
import Wrapper from '../Wrapper/Wrapper'
import { PiCornersInFill } from 'react-icons/pi'
import { RiArrowDownSLine } from 'react-icons/ri'
import Button from '../ui/Button/Button'
import TitleText from '../ui/TitleText/TitleText'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

const SingleRatingComponent = ({ number, text }: { number: string; text: string }) => {
	return (
		<div className='flex flex-col justify-center items-start'>
			<p className='text-secondary text-4xl font-semibold'>{number}</p>
			<p className='text-secondary font-semibold'>{text}</p>
		</div>
	)
}

const AboutUs = () => {
	const router = useRouter()
	const containerRef = useRef<HTMLDivElement>(null)
	const titleRef = useRef<HTMLDivElement>(null)
	const descriptionRef = useRef<HTMLParagraphElement>(null)
	const ratingsRef = useRef<HTMLDivElement>(null)
	const buttonRef = useRef<HTMLDivElement>(null)
	const textRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		gsap.registerPlugin()

		const elements = [titleRef.current, descriptionRef.current, textRef.current, ratingsRef.current, buttonRef.current]

		gsap.set(elements, { opacity: 0, y: 50 })

		const animate = () => {
			gsap.to(elements, {
				opacity: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.2,
				ease: 'power2.out',
			})
		}

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						animate()
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.5 }
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<div className='relative w-full overflow-hidden p-4 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#f2fff4] to-white'>
			<div className='absolute opacity-10 top-5 md:left-10 right-0'>
				<PiCornersInFill size={150} color='#40cb7f' />
			</div>
			<Wrapper>
				<div ref={containerRef}>
					<div ref={titleRef}>
						<TitleText>About Us</TitleText>
					</div>
					<div className='flex flex-col w-full md:flex-row justify-center md:justify-between items-center md:items-start gap-10 mb-4'>
						<div className='w-full md:w-1/2'>
							<p ref={descriptionRef} className='text-secondary font-semibold'>
								We strive to be your trusted partner in the transition to a greener tomorrow.
							</p>
							<div ref={ratingsRef} className='flex justify-start items-center gap-8 mb-12 mt-4'>
								<SingleRatingComponent number='4.9/5' text='Client rating' />
								<SingleRatingComponent number='06' text='Experience Years' />
							</div>
						</div>
						<div ref={textRef} className='w-full md:w-1/2 mt-4 md:mt-0 text-secondary font-semibold'>
							<p className='font-regular mb-4'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam sed cumque cupiditate nesciunt
								quis doloribus praesentium quae possimus dolor iure adipisci, repellendus vero laudantium at sunt
								temporibus eveniet saepe?
							</p>
							<p className='font-regular'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam sed cumque cupiditate nesciunt
								quis doloribus praesentium quae possimus dolor iure adipisci, repellendus vero laudantium at sunt
								temporibus eveniet saepe?
							</p>
						</div>
					</div>
					<div ref={buttonRef}>
						<Button
							onClick={() => {
								router.push('/about-us')
							}}>
							Learn More
						</Button>
					</div>
				</div>
			</Wrapper>

			<div className='absolute opacity-10 bottom-0 right-5 md:right-36' style={{ transform: 'rotate(135deg)' }}>
				<RiArrowDownSLine size={200} color='#40cb7f' />
			</div>
		</div>
	)
}

export default AboutUs
