import 'swiper/css'
import TitleText from '@/components/ui/TitleText/TitleText'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
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
const RealizationsCarousel = ({ gallery }: { gallery: string[] }) => {
	return (
		<div className='p-4 mb-8 mt-8'>
			<TitleText>Our realizations </TitleText>
			<Swiper
				modules={[Autoplay]}
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
				{gallery.map((image, index) => (
					<SwiperSlide key={index}>
						<SingleSlide image={image} key={index} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default RealizationsCarousel
