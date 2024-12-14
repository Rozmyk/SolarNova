'use client'
import Wrapper from '../Wrapper/Wrapper'
import TitleText from '../ui/TitleText/TitleText'
import Button from '../ui/Button/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'

import { useRef } from 'react'
import 'swiper/css'
import { useRouter } from 'next/navigation'
import ProjectCard from './ProjectCard/ProjectCard'
import projectData from '../../../data/projectsData'
import CarouselButtons from './CarouselButtons/CarouselButtonts'

const Projects = () => {
	const swiperRef = useRef<SwiperType | null>(null)
	const router = useRouter()

	return (
		<Wrapper>
			<div className='flex md:flex-row flex-col justify-between items-center gap-4 mb-2 p-4'>
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
			<div className='p-4 flex w-full gap-4 flex-col md:flex-row'>
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
					{projectData.map(project => (
						<SwiperSlide key={project.title}>
							<div className='w-full h-full flex justify-center items-center'>
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
	)
}

export default Projects
