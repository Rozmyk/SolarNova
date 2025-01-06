'use client'
import Wrapper from '../Wrapper/Wrapper'
import TitleText from '../ui/TitleText/TitleText'
import Button from '../ui/Button/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { useRef, useEffect } from 'react'
import 'swiper/css'
import { useRouter } from 'next/navigation'
import ProjectCard from './ProjectCard/ProjectCard'
import projectData from '../../../data/projectsData'
import CarouselButtons from '../ui/CarouselButtons/CarouselButtons'
import gsap from 'gsap'

const Projects = () => {
	const swiperRef = useRef<SwiperType | null>(null)
	const projectsRef = useRef<HTMLDivElement>(null)
	const projectsHeader = useRef<HTMLDivElement>(null)
	const slidesRef = useRef<HTMLDivElement[]>([])
	const router = useRouter()

	useEffect(() => {
		gsap.registerPlugin()

		const elements = [projectsHeader.current, ...slidesRef.current]

		gsap.set(elements, { opacity: 0, x: 100 })

		const animate = (element: HTMLElement) => {
			gsap.to(element, {
				opacity: 1,
				x: 0,
				duration: 0.5,
				ease: 'power2.out',
			})
		}

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						animate(entry.target as HTMLElement)
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.5 }
		)

		elements.forEach(element => {
			if (element) observer.observe(element)
		})

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<div className='relative w-full overflow-hidden p-4 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#f2fff4] to-white'>
			<Wrapper>
				<div ref={projectsHeader} className='flex md:flex-row flex-col justify-between items-center gap-4 mb-2 p-4'>
					<div className='w-full md:w-1/2'>
						<TitleText>Successful Renewable energy projects</TitleText>
					</div>
					<div className='w-full md:w-1/2 flex justify-end'>
						<CarouselButtons
							onPrev={() => swiperRef.current?.slidePrev()}
							onNext={() => swiperRef.current?.slideNext()}
						/>
					</div>
				</div>

				<div ref={projectsRef}>
					<Swiper
						breakpoints={{
							0: {
								slidesPerView: 1,
								centeredSlides: true,
								spaceBetween: 0,
							},
							750: {
								slidesPerView: 2,
								centeredSlides: false,
								spaceBetween: 25,
							},
							1100: {
								slidesPerView: 3,
								centeredSlides: false,
								spaceBetween: 50,
							},
						}}
						loop
						onSwiper={swiper => (swiperRef.current = swiper)}>
						{projectData.map((project, index) => (
							<SwiperSlide key={project.title}>
								<div
									ref={el => {
										if (el) slidesRef.current[index] = el
									}}
									className='w-full h-full flex justify-center items-center'>
									<ProjectCard
										id={project.id}
										src={project.src}
										title={project.title}
										date={project.date}
										author={project.author}
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className='flex justify-center items-center w-full p-4 mt-8'>
					<Button
						onClick={() => {
							router.push('/projects')
						}}>
						View all projects
					</Button>
				</div>
			</Wrapper>
		</div>
	)
}

export default Projects
