'use client'
import Wrapper from '../Wrapper/Wrapper'
import { PiCornersInFill } from 'react-icons/pi'
import { RiArrowDownSLine } from 'react-icons/ri'
import Button from '../ui/Button/Button'
import TitleText from '../ui/TitleText/TitleText'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
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
	const title = useRef(null)
	const description = useRef(null)
	const ratings = useRef(null)
	const button = useRef(null)
	const text = useRef(null)

	useGSAP(() => {
		gsap.registerPlugin()

		const tl = gsap.timeline()
		tl.from(title.current, { opacity: 0, y: 50, duration: 0.5 })
			.from(description.current, { opacity: 0, y: 50, duration: 0.5 }, '-=0.3')
			.from(text.current, { opacity: 0, y: 50, duration: 0.5 }, '-=0.3')
			.from(ratings.current, { opacity: 0, y: 50, duration: 0.5 }, '-=0.3')
			.from(button.current, { opacity: 0, y: 50, duration: 0.5 }, '-=0.3')
	}, [])
	return (
		<div className='relative w-full overflow-hidden p-4 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#f2fff4] to-white'>
			<div className='absolute opacity-10 top-5 md:left-10 right-0'>
				<PiCornersInFill size={150} color='#40cb7f' />
			</div>
			<Wrapper>
				<div ref={title}>
					<TitleText>About Us</TitleText>
				</div>
				<div className='flex flex-col w-full md:flex-row justify-center md:justify-between items-center md:items-start gap-10 mb-4'>
					<div className='w-full md:w-1/2'>
						<p ref={description} className='text-secondary font-semibold'>
							We strive to be your trusted partner in the transition to a greener tomorrow.
						</p>
						<div ref={ratings} className='flex justify-start items-center gap-8 mb-12 mt-4'>
							<SingleRatingComponent number='4.9/5' text='Client rating' />
							<SingleRatingComponent number='06' text='Experience Years' />
						</div>
					</div>
					<div ref={text} className='w-full md:w-1/2 mt-4 md:mt-0 text-secondary font-semibold'>
						<p className='font-regular mb-4'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam sed cumque cupiditate nesciunt quis
							doloribus praesentium quae possimus dolor iure adipisci, repellendus vero laudantium at sunt temporibus
							eveniet saepe?
						</p>
						<p className='font-regular'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam sed cumque cupiditate nesciunt quis
							doloribus praesentium quae possimus dolor iure adipisci, repellendus vero laudantium at sunt temporibus
							eveniet saepe?
						</p>
					</div>
				</div>
				<div ref={button}>
					<Button
						onClick={() => {
							router.push('/about-us')
						}}>
						Learn More
					</Button>
				</div>
			</Wrapper>

			<div className='absolute opacity-10 bottom-0 right-5 md:right-36' style={{ transform: 'rotate(135deg)' }}>
				<RiArrowDownSLine size={200} color='#40cb7f' />
			</div>
		</div>
	)
}

export default AboutUs
