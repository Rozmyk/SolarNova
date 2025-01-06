'use client'
import React, { useRef } from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Image from 'next/image'
import { GoNorthStar } from 'react-icons/go'
import Clients from './Clients/Clients'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const SingleNumberedTile = ({ number, title }: { number: string; title: string }) => {
	return (
		<div className='w-full h-44 flex flex-col justify-center items-center bg-[#f7f9f6] rounded-lg drop-shadow-md m-2 '>
			<div>
				<p className='text-center text-black font-medium text-4xl mb-4'>{number}</p>
				<p className='text-darkText text-center'>{title}</p>
			</div>
		</div>
	)
}

const PerformanceStats = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		gsap.registerPlugin()

		const animate = (target: Element) => {
			gsap.from(target.children, {
				opacity: 0,
				y: 50,
				duration: 0.5,
				stagger: 0.2,
				ease: 'power2.out',
			})
		}

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						animate(entry.target)
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.5 }
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<div className='relative max-w-screen overflow-hidden'>
			<Wrapper>
				<div
					ref={containerRef}
					className='w-full flex flex-col md:flex-row justify-between items-center gap-10 relative z-10 p-4'>
					<div className='w-full md:w-1/2 h-96 relative rounded-lg overflow-hidden'>
						<Image src={'/stats/statsImage.webp'} fill alt='wind turbine on desert' />
					</div>
					<div className='w-full md:w-1/2 flex flex-col'>
						<div className='flex md:flex-row flex-col justify-between items-center'>
							<SingleNumberedTile number='1.5K' title='Instalation' />
							<SingleNumberedTile number='20' title='Country served' />
						</div>
						<div className='flex md:flex-row flex-col justify-between items-center'>
							<SingleNumberedTile number='60%' title='Energy saving' />
							<SingleNumberedTile number='86' title='Our partner' />
						</div>
					</div>
				</div>
			</Wrapper>

			<GoNorthStar
				style={{ opacity: 0.02 }}
				className='absolute left-0 bottom-96 rotate-45 z-0 animate-spin-slow'
				size={500}
				color='black'
			/>
			<Clients />
		</div>
	)
}

export default PerformanceStats
