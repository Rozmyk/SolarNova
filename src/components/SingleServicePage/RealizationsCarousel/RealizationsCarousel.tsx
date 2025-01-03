import 'swiper/css'
import TitleText from '@/components/ui/TitleText/TitleText'
import { Swiper, SwiperSlide } from 'swiper/react'

const RealizationsCarousel = () => {
	return (
		<div className='p-4 mb-8 mt-8'>
			<TitleText>Our realizations </TitleText>
			<Swiper
				breakpoints={{
					0: {
						slidesPerView: 3,
						centeredSlides: true,
						spaceBetween: 25,
					},
				}}
				loop
				autoplay
				className='w-full'>
				<SwiperSlide>
					<div className='w-full h-96 bg-blue-400'></div>
				</SwiperSlide>{' '}
				<SwiperSlide>
					<div className='w-full h-96 bg-yellow-400'></div>
				</SwiperSlide>{' '}
				<SwiperSlide>
					<div className='w-full h-96 bg-green-400'></div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='w-full h-96 bg-red-400'></div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default RealizationsCarousel
