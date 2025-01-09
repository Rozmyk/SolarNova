'use client'
import Image from 'next/image'
import Wrapper from '@/components/Wrapper/Wrapper'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import React from 'react'

const SingleTeamCard = ({
	name,
	bottomText,
	src,
	center,
	ref,
}: {
	name: string
	bottomText: string
	src: string
	center?: boolean
	ref: React.RefObject<HTMLDivElement>
}) => {
	return (
		<div ref={ref} className={`${center ? 'mt-8' : ''} flex flex-col justify-center items-center opacity-0`}>
			<div className='relative p-2 h-80 w-56 drop-shadow-md'>
				<Image className='rounded-md' src={src} fill alt={`porter of ${name}`} />
			</div>
			<p className='text-secondary font-semibold mt-4'>{name}</p>
			<p className='text-sm text-darkText'>{bottomText}</p>
		</div>
	)
}

const TeamSection = () => {
	const teamMembers = [
		{ name: 'Charles S. Brown', bottomText: 'Lead Developer', src: '/team/teamPortret1.webp' },
		{ name: 'Md. Abu Taleb', bottomText: 'UI-UX Design', src: '/team/teamPortret2.webp' },
		{ name: 'Jannat Humayra', bottomText: 'Lead Marketing', src: '/team/teamPortret3.webp' },
	]

	const cardRefs = useRef(teamMembers.map(() => React.createRef<HTMLDivElement>()))

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const index = cardRefs.current.findIndex(ref => ref.current === entry.target)
						gsap.fromTo(
							entry.target,
							{ opacity: 0, y: 50 },
							{ opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: index * 0.2 }
						)
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.1 }
		)

		cardRefs.current.forEach(ref => {
			if (ref.current) {
				observer.observe(ref.current)
			}
		})

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<div className='w-full relative overflow-hidden mb-6 mt-6'>
			<Wrapper>
				<div className='flex flex-col justify-center items-center p-4'>
					<h3 className='text-3xl text-secondary font-semibold'>
						We&apos;ve 36+ Active & Dedicated Members for Helping the Customers
					</h3>
					<p className='text-darkText mb-8 text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis accusantium asperiores quidem amet
						ducimus sunt, nulla minus neque error?
					</p>
					<div className='w-full flex flex-col md:flex-row justify-center items-center gap-8'>
						{teamMembers.map((member, index) => (
							<SingleTeamCard
								key={index}
								name={member.name}
								bottomText={member.bottomText}
								src={member.src}
								center={index === 1}
								ref={cardRefs.current[index]}
							/>
						))}
					</div>
				</div>
			</Wrapper>
		</div>
	)
}

export default TeamSection
