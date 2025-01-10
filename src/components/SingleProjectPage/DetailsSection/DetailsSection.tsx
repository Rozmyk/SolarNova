import { useEffect, useRef } from 'react'
import { ProjectProps } from '@/types'
import gsap from 'gsap'
import Wrapper from '@/components/Wrapper/Wrapper'
const SingleProjectProfile = ({ label, value }: { label: string; value: string }) => {
	const profileRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						gsap.fromTo(entry.target, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.1 }
		)

		if (profileRef.current) {
			observer.observe(profileRef.current)
		}

		return () => {
			if (profileRef.current) {
				observer.unobserve(profileRef.current)
			}
		}
	}, [])

	return (
		<div ref={profileRef} className='text-secondary flex flex-col justify-start items-start text-lg opacity-0'>
			<p className='font-semibold'>{label}</p>
			<p>{value}</p>
			<div className='mt-2 mb-2 border-t border-gray-300 w-full' />
		</div>
	)
}

const DetailsSection = ({ singleProjectData }: { singleProjectData: ProjectProps }) => {
	const sectionRef = useRef<HTMLDivElement | null>(null)

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

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current)
			}
		}
	}, [])

	return (
		<Wrapper>
			<div
				ref={sectionRef}
				className='w-full flex-col md:flex-row md:flex justify-between items-start gap-20  p-4 opacity-0'>
				<div className='w-full md:w-1/2 md:mb-0 mb-10'>
					<h3 className='text-secondary font-semibold text-xl mb-2'>The mission</h3>
					<p className='text-darkText'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nisi ab quaerat quasi consectetur, eius iste
						suscipit incidunt perspiciatis a.
					</p>
				</div>
				<div className='w-full md:w-1/2'>
					<h3 className='text-secondary font-semibold text-xl mb-2'>Project profile</h3>
					<div className='w-full flex flex-col gap-2'>
						{singleProjectData && (
							<>
								<SingleProjectProfile label='Location:' value={singleProjectData.location} />
								<SingleProjectProfile label='Power class:' value={singleProjectData.powerClass} />
								<SingleProjectProfile label='Commissioning: ' value={singleProjectData.commissioning} />
								<SingleProjectProfile label='Status:' value={singleProjectData.status} />
							</>
						)}
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default DetailsSection
