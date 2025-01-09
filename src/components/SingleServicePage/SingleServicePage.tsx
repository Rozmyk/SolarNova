'use client'
import Wrapper from '../Wrapper/Wrapper'
import servicesData from '../../../data/servicesData'
import { useState, useEffect, useRef } from 'react'
import { SingleServiceProps } from '@/types'
import HeaderContent from './HeaderContent/HeaderContent'
import HeaderImage from './HeaderImage/HeaderImage'
import ErrorPage from '../ErrorPage/ErrorPage'
import HelpSection from './HelpSection/HelpSection'
import RealizationsCarousel from './RealizationsCarousel/RealizationsCarousel'
import Faq from './Faq/Faq'
import gsap from 'gsap'

const SingleServicePage = ({ serviceId }: { serviceId: string }) => {
	const [singleServiceData, setSingleServiceData] = useState<SingleServiceProps | null>(null)
	const [noFound, setNoFound] = useState(false)
	const descriptionRef = useRef(null)
	useEffect(() => {
		const serviceData = findServiceById(serviceId)
		if (serviceData) {
			setSingleServiceData(serviceData)
		} else {
			setNoFound(true)
		}
	}, [serviceId])
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

		if (descriptionRef.current) {
			observer.observe(descriptionRef.current)
		}

		return () => {
			if (descriptionRef.current) {
				observer.unobserve(descriptionRef.current)
			}
		}
	}, [singleServiceData])
	const findServiceById = (serviceId: string) => {
		return servicesData.find(project => project.href === serviceId)
	}
	return (
		<Wrapper>
			{noFound ? (
				<ErrorPage />
			) : (
				singleServiceData && (
					<>
						<div className='flex justify-between flex-col-reverse md:flex-row items-center gap-20 p-4 mb-14'>
							<HeaderContent title={singleServiceData.text} />
							<HeaderImage src={singleServiceData.src} />
						</div>
						<div className='p-4 mb-8 mt-8'>
							<p ref={descriptionRef} className='text-secondary font-semibold text-center'>
								{singleServiceData.description}
							</p>
						</div>
						<HelpSection />
						<RealizationsCarousel gallery={singleServiceData.gallery} />
						<Faq items={singleServiceData.faq} />
					</>
				)
			)}
		</Wrapper>
	)
}

export default SingleServicePage
