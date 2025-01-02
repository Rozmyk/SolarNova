import TitleText from '@/components/ui/TitleText/TitleText'
import CarouselButtons from '@/components/ui/CarouselButtons/CarouselButtons'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { useRef } from 'react'
import Image from 'next/image'

const Carousel = () => {
	const swiperRef = useRef<SwiperType | null>(null)

	return (
		<div className='w-full flex justify-center items-center mb-8 mt-8 p-4'>
			<div className='p-4 flex flex-col justify-center items-center rounded-lg overflow-hidden w-full'>
				<div className='flex justify-between items-center w-full mb-4'>
					<TitleText>Gallery</TitleText>
					<CarouselButtons
						onPrev={() => swiperRef.current?.slidePrev()}
						onNext={() => swiperRef.current?.slideNext()}
					/>
				</div>

				<Swiper
					onSwiper={swiper => (swiperRef.current = swiper)}
					breakpoints={{
						0: {
							slidesPerView: 1,
							centeredSlides: true,
							spaceBetween: 25,
						},
					}}
					loop
					className='w-full'>
					<SwiperSlide>
						<div className='flex justify-center items-center w-full  h-auto  '>
							<div className='md:w-2/3 h-full flex justify-center items-center rounded-lg overflow-hidden  '>
								<Image
									src='/projectPhoto.jpg'
									alt='solar farm'
									layout='responsive'
									width={1000}
									height={750}
									objectFit='cover'
									priority
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex justify-center items-center w-full  h-auto  '>
							<div className='md:w-2/3 h-full flex justify-center items-center rounded-lg overflow-hidden  '>
								<Image
									src='/projectPhoto.jpg'
									alt='solar farm'
									layout='responsive'
									width={1000}
									height={750}
									objectFit='cover'
									priority
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex justify-center items-center w-full  h-auto  '>
							<div className='md:w-2/3 h-full flex justify-center items-center rounded-lg overflow-hidden  '>
								<Image
									src='/projectPhoto.jpg'
									alt='solar farm'
									layout='responsive'
									width={1000}
									height={750}
									objectFit='cover'
									priority
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex justify-center items-center w-full  h-auto  '>
							<div className='md:w-2/3 h-full flex justify-center items-center rounded-lg overflow-hidden  '>
								<Image
									src='/projectPhoto.jpg'
									alt='solar farm'
									layout='responsive'
									width={1000}
									height={750}
									objectFit='cover'
									priority
								/>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default Carousel
