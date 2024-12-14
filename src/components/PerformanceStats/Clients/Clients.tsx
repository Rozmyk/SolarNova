'use client'
import Wrapper from '@/components/Wrapper/Wrapper'
import TitleText from '@/components/ui/TitleText/TitleText'
import Button from '@/components/ui/Button/Button'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import testimonialsData from '../../../../data/testimonialsData'
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
	return (
		<Wrapper>
			<div className='flex md:flex-row flex-col justify-between items-center gap-4 mb-2 p-4'>
				<div className='w-full md:w-1/2'>
					<TitleText>Gem Words From Our Satisfied Clients</TitleText>
				</div>
				<div className='w-full md:w-1/2 flex justify-end'>
					<Button>All testimonials</Button>
				</div>
			</div>
			<div className='ExampleComponent flex gap-10  p-2 '>
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
