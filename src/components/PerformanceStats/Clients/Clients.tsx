'use client'
import Wrapper from '@/components/Wrapper/Wrapper'
import TitleText from '@/components/ui/TitleText/TitleText'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { useRef, useEffect } from 'react'
import testimonialsData from '../../../../data/testimonialsData'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import 'swiper/css'
import 'swiper/css/pagination'
import './swiper.css'
const SingleTestimonials = ({
	src,
	opinion,
	author,
	job,
	reversed,
}: {
	src: string
	opinion: string
	author: string
	job: string
	reversed: boolean
}) => {
	return (
		<div
			className={`bg-[#f7f9f6] rounded-lg p-4 text-secondary text-sm w-64 flex   ${
				reversed ? 'flex-col-reverse' : 'flex-col'
			} ${reversed ? 'mt-8' : 'mb-8'}`}>
			<div className={`w-full h-32 relative ${reversed ? 'mt-4' : 'mb-4'} rounded-lg overflow-hidden`}>
				<Image src={src} layout='fill' objectFit='cover' objectPosition='center' alt='customer avatar' />
			</div>
			<div>
				<p className='mb-4 font-medium'>{opinion}</p>
				<p className='font-semibold'>{author}</p>
				<p>{job}</p>
			</div>
		</div>
	)
}
const Clients = () => {
	const clientsHeader = useRef<HTMLDivElement>(null)
	const clientsRef = useRef<HTMLDivElement>(null)
	let observer: IntersectionObserver

	useEffect(() => {
		if (clientsRef.current) {
			gsap.set(clientsRef.current.children, { opacity: 0, y: 50 })

			const animateContent = (target: Element) => {
				gsap.to(target.children, {
					opacity: 1,
					y: 0,
					duration: 0.5,
					stagger: 0.2,
					ease: 'power2.out',
				})
			}

			observer = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							animateContent(entry.target)
							observer.unobserve(entry.target)
						}
					})
				},
				{ threshold: 0.5 }
			)

			observer.observe(clientsRef.current)
		}

		if (clientsHeader.current) {
			gsap.fromTo(
				clientsHeader.current,
				{ opacity: 0, y: -50 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: clientsHeader.current,
						start: 'top 80%',
						end: 'bottom 60%',
						toggleActions: 'play none none none',
					},
				}
			)
		}

		return () => {
			if (observer) observer.disconnect()
		}
	}, [])

	return (
		<Wrapper>
			<div ref={clientsHeader} className='flex md:flex-row flex-col justify-between items-center gap-4 mb-2 p-4'>
				<div className='w-full md:w-1/2'>
					<TitleText>Gem Words From Our Satisfied Clients</TitleText>
				</div>
			</div>
			<div ref={clientsRef} className='ExampleComponent flex gap-10  p-2 '>
				<Swiper
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 0,
							centeredSlides: true,
						},
						550: {
							slidesPerView: 2,
							centeredSlides: false,
							spaceBetween: 25,
						},
						800: {
							slidesPerView: 3,
							spaceBetween: 50,
							centeredSlides: false,
						},
						1100: {
							slidesPerView: 4,
							spaceBetween: 50,
							centeredSlides: false,
						},
					}}
					pagination={{ clickable: true }}
					modules={[Pagination, Autoplay]}
					autoplay
					spaceBetween={50}>
					{testimonialsData.map(card => (
						<SwiperSlide key={card.author}>
							<div className=' flex justify-center items-center w-full h-full'>
								<SingleTestimonials
									src={card.src}
									reversed={card.reversed}
									opinion={card.opinion}
									author={card.author}
									job={card.job}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Wrapper>
	)
}

export default Clients
