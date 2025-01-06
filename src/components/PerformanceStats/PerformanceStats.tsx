'use client'
import React, { useRef, useEffect } from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Image from 'next/image'
import { GoNorthStar } from 'react-icons/go'
import Clients from './Clients/Clients'
import gsap from 'gsap'

const SingleNumberedTile = ({ number, title }: { number: number; title: string }) => {
	const numberRef = useRef<HTMLParagraphElement>(null)
	const tileRef = useRef<HTMLDivElement>(null)
	let observer: IntersectionObserver

	useEffect(() => {
		if (tileRef.current) {
			gsap.set(tileRef.current, { opacity: 0, y: 50 })

			const animate = (target: Element) => {
				gsap.to(target, {
					opacity: 1,
					y: 0,
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
		<div
			ref={tileRef}
			className='w-full h-44 flex flex-col justify-center items-center bg-[#f7f9f6] rounded-lg drop-shadow-md m-2'>
			<div>
				<p ref={numberRef} className='text-center text-black font-medium text-4xl mb-4'>
					0
				</p>
				<p className='text-darkText text-center'>{title}</p>
			</div>
		</div>
	)
}

const PerformanceStats = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		gsap.registerPlugin()

		if (containerRef.current) {
			gsap.set(containerRef.current.children, { opacity: 0, y: 50 })

			const animate = (target: Element) => {
				gsap.to(target.children, {
					opacity: 1,
					y: 0,
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

			observer.observe(containerRef.current)

			return () => {
				observer.disconnect()
			}
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
							<SingleNumberedTile number={720} title='Instalation' />
							<SingleNumberedTile number={20} title='Country served' />
						</div>
						<div className='flex md:flex-row flex-col justify-between items-center'>
							<SingleNumberedTile number={60} title='Energy saving' />
							<SingleNumberedTile number={86} title='Our partner' />
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
