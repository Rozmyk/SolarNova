import TitleText from '@/components/ui/TitleText/TitleText'
import CarouselButtons from '@/components/ui/CarouselButtons/CarouselButtons'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const Carousel = ({ gallery }: { gallery: string[] }) => {
	const swiperRef = useRef<SwiperType | null>(null)
	const containerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						gsap.fromTo(entry.target, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.1 }
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current)
			}
		}
	}, [])

	return (
		<div ref={containerRef} className='w-full flex justify-center items-center mb-8 mt-8 p-4 opacity-0'>
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
					{gallery.map(image => (
						<SwiperSlide key={image}>
							<div className='flex justify-center items-center w-full h-auto'>
								<div className='md:w-2/3 h-full flex justify-center items-center rounded-lg overflow-hidden'>
									<Image src={image} alt='solar farm' layout='responsive' width={1000} height={750} />
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default Carousel
