import 'swiper/css'
import TitleText from '@/components/ui/TitleText/TitleText'
import { Swiper, SwiperSlide } from 'swiper/react'
const SingleSlide = ({ image }: { image: string }) => {
	return (
		<div
			style={{
				backgroundImage: `url(${image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
			className={`w-full h-96  rounded-lg `}></div>
	)
}
const RealizationsCarousel = () => {
	return (
		<div className='p-4 mb-8 mt-8'>
			<TitleText>Our realizations </TitleText>
			<Swiper
				breakpoints={{
					0: {
						slidesPerView: 1,
						centeredSlides: true,
						spaceBetween: 0,
					},
					1200: {
						slidesPerView: 3,
						centeredSlides: true,
						spaceBetween: 25,
					},
				}}
				loop
				autoplay
				className='w-full'>
				<SwiperSlide>
					<SingleSlide image='/projects/project1.jpg' />
				</SwiperSlide>
				<SwiperSlide>
					<SingleSlide image='/projects/project1.jpg' />
				</SwiperSlide>
				<SwiperSlide>
					<SingleSlide image='/projects/project1.jpg' />
				</SwiperSlide>
				<SwiperSlide>
					<SingleSlide image='/projects/project1.jpg' />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default RealizationsCarousel
