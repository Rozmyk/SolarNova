'use client'
import Button from '@/components/ui/Button/Button'
import Wrapper from '@/components/Wrapper/Wrapper'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const SingleService = ({
	number,
	unit,
	titleLine1,
	titleLine2,
}: {
	number: number
	unit: string
	titleLine1: string
	titleLine2: string
}) => {
	const numberRef = useRef<HTMLParagraphElement>(null)
	const tileRef = useRef<HTMLDivElement>(null)
	let observer: IntersectionObserver
	useEffect(() => {
		if (tileRef.current) {
			gsap.set(tileRef.current, { opacity: 0 })

			const animate = (target: Element) => {
				gsap.to(target, {
					opacity: 1,

					duration: 0.5,
					ease: 'power2.out',
				})
			}

			const animateNumber = () => {
				if (numberRef.current) {
					const target = { value: 0 }
					gsap.to(target, {
						value: number,
						duration: 2,
						ease: 'power1.out',
						onUpdate: () => {
							if (numberRef.current) {
								numberRef.current.textContent = Math.floor(target.value).toString()
							}
						},
					})
				}
			}

			observer = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							animate(entry.target)
							animateNumber()
							observer.unobserve(entry.target)
						}
					})
				},
				{ threshold: 0.5 }
			)

			observer.observe(tileRef.current)

			return () => {
				if (observer) observer.disconnect()
			}
		}
	}, [number])

	return (
		<div className='flex flex-col items-center justify-center text-center'>
			<div ref={tileRef} className='text-4xl font-bold mb-2'>
				<span ref={numberRef} className='text-secondary'>
					{number}
				</span>{' '}
				<span className='text-primary'>{unit}</span>
			</div>
			<p className='text-gray-500'>{titleLine1}</p>
			<p className='text-gray-500'>{titleLine2}</p>
		</div>
	)
}

const StatsSection = () => {
	return (
		<Wrapper>
			<div className='flex justify-between items-center pb-4 border-b border-gray-300 p-4 mb-8'>
				<h2 className='text-3xl text-secondary font-semibold'>
					Perform Market Research to gain <br />
					Insights into Industry Trends
				</h2>
				<Button>Get Started</Button>
			</div>
			<div className=' w-full  flex md:flex-row flex-col gap-8 md:gap-0 justify-between items-center'>
				<SingleService number={174.485} unit='kWp' titleLine1='Installed Solar Power' titleLine2='Capacity' />
				<div className='w-px h-16 bg-gray-300' />
				<SingleService number={2.356} unit='Projects' titleLine1='Completed Renewable' titleLine2='Energy Projects' />
				<div className='w-px h-16 bg-gray-300' />
				<SingleService number={15} unit='Years' titleLine1='Experience in the' titleLine2='Energy Sector' />
				<div className='w-px h-16 bg-gray-300' />
				<SingleService number={400} unit='Satisfaction' titleLine1='Customer Satisfaction' titleLine2='Rate' />
			</div>
		</Wrapper>
	)
}

export default StatsSection
