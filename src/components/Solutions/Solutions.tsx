'use client'
import Wrapper from '../Wrapper/Wrapper'
import TitleText from '../ui/TitleText/TitleText'
import Button from '../ui/Button/Button'
import Cards from './Cards/Cards'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

const Solutions = () => {
	const router = useRouter()
	const solutionsHeader = useRef<HTMLDivElement>(null)

	useEffect(() => {
		gsap.registerPlugin()

		const element = solutionsHeader.current
		if (element) {
			gsap.set(element, { opacity: 0, y: 50 })

			const animate = () => {
				gsap.to(element, {
					opacity: 1,
					y: 0,
					duration: 0.5,
					ease: 'power2.out',
				})
			}

			const observer = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							animate()
							observer.unobserve(entry.target)
						}
					})
				},
				{ threshold: 0.5 }
			)

			observer.observe(element)

			return () => {
				observer.disconnect()
			}
		}
	}, [])

	return (
		<Wrapper>
			<div ref={solutionsHeader} className='flex md:flex-row flex-col justify-between items-center gap-4 mb-2 p-4'>
				<div className='w-full md:w-1/2'>
					<TitleText>We Provide Comprehensive Solar Solutions</TitleText>
				</div>
				<div className='w-full md:w-1/2 flex justify-end'>
					<Button
						onClick={() => {
							router.push('/service')
						}}>
						View all services
					</Button>
				</div>
			</div>
			<div className='w-full p-8'>
				<Cards />
			</div>
		</Wrapper>
	)
}

export default Solutions
