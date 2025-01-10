import { useEffect, useRef } from 'react'
import TitleText from '@/components/ui/TitleText/TitleText'
import { FaSolarPanel } from 'react-icons/fa'
import { SlEnergy } from 'react-icons/sl'
import { MdWindPower } from 'react-icons/md'
import gsap from 'gsap'

const SingleTechnology = ({
	label,
	value,
	icon: Icon,
}: {
	label: string
	value: string
	icon: React.ComponentType<{ size?: number; className?: string }>
}) => {
	const techRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						gsap.fromTo(
							entry.target,
							{ opacity: 0, y: 50 },
							{ opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.2 }
						)
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.1 }
		)

		if (techRef.current) {
			observer.observe(techRef.current)
		}

		return () => {
			if (techRef.current) {
				observer.unobserve(techRef.current)
			}
		}
	}, [])

	return (
		<div ref={techRef} className='flex justify-start items-center text-primary gap-8'>
			<Icon size={60} />
			<div className='flex flex-col justify-start items-start'>
				<p className='text-xl font-semibold text-secondary'>{label}</p>
				<p className='text-darkText'>{value}</p>
			</div>
		</div>
	)
}

const Technologies = () => {
	return (
		<div className='mt-20 mb-20 p-4 w-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#f2fff4] to-white'>
			<TitleText>Technologies of the project</TitleText>
			<div className='w-full flex flex-col items-start justify-start gap-8 mt-8'>
				<SingleTechnology
					label='Solar Energy'
					value='Harness free solar power with advanced photovoltaic panels.'
					icon={FaSolarPanel}
				/>
				<SingleTechnology
					label='Wind Energy'
					value='Generate clean energy with modern wind turbines.'
					icon={MdWindPower}
				/>
				<SingleTechnology
					label='Energy Storage'
					value='Store excess energy with state-of-the-art battery systems.'
					icon={SlEnergy}
				/>
			</div>
		</div>
	)
}

export default Technologies
