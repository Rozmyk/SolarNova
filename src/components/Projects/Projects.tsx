'use client'
import Wrapper from '../Wrapper/Wrapper'
import TitleText from '../ui/TitleText/TitleText'
import Button from '../ui/Button/Button'
import { MdOutlineDateRange } from 'react-icons/md'
import { FaUser } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef } from 'react'
import 'swiper/css'
import { useRouter } from 'next/router'

import projectData from '../../../data/projectsData'
import CarouselButtons from './CarouselButtons/CarouselButtonts'

const ProjectCard = ({ src, title, author, date }: { src: string; title: string; author: string; date: string }) => {
	return (
		<div className='w-full rounded-xl overflow-hidden'>
			<div
				className='w-full h-60 rounded-xl'
				style={{
					backgroundImage: `url(${src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}></div>
			<div className='flex justify-start items-center mb-2 mt-4 gap-4'>
				<div className='flex justify-start items-center gap-2 text-darkText'>
					<MdOutlineDateRange />
					<p className='text-xs'>{date}</p>
				</div>
				<div className='flex justify-start items-center gap-2 text-darkText'>
					<FaUser />
					<p className='text-xs'>{author}</p>
				</div>
			</div>
			<p className='font-semibold text-secondary text-lg mt-2'>{title}</p>
		</div>
	)
}

const Projects = () => {
	const swiperRef = useRef<any>(null)
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
				<Swiper loop spaceBetween={50} slidesPerView={3} onSwiper={swiper => (swiperRef.current = swiper)}>
					{projectData.map(project => (
						<SwiperSlide key={project.title}>
							<ProjectCard src={project.src} title={project.title} date={project.date} author={project.author} />
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
