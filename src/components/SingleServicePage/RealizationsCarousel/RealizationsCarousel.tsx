import 'swiper/css'
import TitleText from '@/components/ui/TitleText/TitleText'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

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
	const realizationContainer = useRef(null)
	const slidesRef = useRef<HTMLDivElement[]>([])
	useEffect(() => {
		gsap.registerPlugin()

		const elements = [...slidesRef.current]

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
		<div className='p-4 mb-20 mt-8'>
			<TitleText>Our realizations </TitleText>
			<div ref={realizationContainer}>
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
							<div
								ref={el => {
									if (el) slidesRef.current[index] = el
								}}>
								<SingleSlide image={image} key={index} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default RealizationsCarousel
