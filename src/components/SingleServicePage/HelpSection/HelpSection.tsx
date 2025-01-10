import TitleText from '@/components/ui/TitleText/TitleText'
import { FaSolarPanel } from 'react-icons/fa'
import { MdArchitecture } from 'react-icons/md'
import { GrUserWorker } from 'react-icons/gr'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const SingleCard = ({
	title,
	icon: Icon,
	text,
}: {
	title: string
	text: string
	icon: React.ComponentType<{ size?: number; className?: string }>
}) => {
	return (
		<div className='flex flex-col justify-center items-center w-full md:w-1/3'>
			<div className='p-2 rounded-full mb-2 border-dashed border-gray-200 border-2'>
				<div className='p-4 bg-primary rounded-full'>
					<Icon size={55} />
				</div>
			</div>
			<TitleText>{title}</TitleText>
			<p className='text-sm text-darkText text-center'>{text}</p>
		</div>
	)
}

const HelpSection = () => {
	const sectionRef = useRef(null)

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
		<div ref={sectionRef} className='p-8 mb-20 mt-8'>
			<TitleText>How can we help you?</TitleText>
			<div className='flex flex-col md:flex-row justify-between items-center gap-8 mt-8 mb-8'>
				<SingleCard
					icon={FaSolarPanel}
					title='Sale'
					text='We offer the sale of high-quality electric car charging stations that are characterized by reliability and convenience.'
				/>
				<SingleCard
					icon={MdArchitecture}
					title='Project'
					text='We offer advice on the selection of chargers for electric vehicles and the preparation of an installation project, taking into account individual needs and other factors from the site.'
				/>
			</div>
			<div className='flex justify-center items-center'>
				<SingleCard
					icon={GrUserWorker}
					title='Assembly'
					text='We are engaged in the installation of electric car charging stations for residential and business customers. Our team, while carrying out the tasks entrusted to it, takes care of safety, as well as maintaining full professionalism in the course of their work.'
				/>
			</div>
		</div>
	)
}

export default HelpSection
