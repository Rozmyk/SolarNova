'use client'
import Wrapper from '../Wrapper/Wrapper'
import servicesData from '../../../data/servicesData'
import { useState, useEffect } from 'react'
import { SingleServiceProps } from '@/types'
import HeaderContent from './HeaderContent/HeaderContent'
import HeaderImage from './HeaderImage/HeaderImage'
const SingleServicePage = ({ serviceId }: { serviceId: string }) => {
	const [singleServiceData, setSingleServiceData] = useState<SingleServiceProps | null>(null)
	const [noFound, setNoFound] = useState(false)
	useEffect(() => {
		const serviceData = findServiceById(serviceId)
		if (serviceData) {
			setSingleServiceData(serviceData)
		} else {
			setNoFound(true)
		}
	}, [serviceId])
	const findServiceById = (serviceId: string) => {
		return servicesData.find(project => project.href === serviceId)
	}
	return (
		<Wrapper>
			{noFound ? (
				<p>sorry not found</p>
			) : (
				singleServiceData && (
					<div className='flex justify-between items-center gap-20'>
						<HeaderContent title={singleServiceData.text} />
						<HeaderImage src={singleServiceData.src} />
					</div>
				)
			)}
		</Wrapper>
	)
}

export default SingleServicePage
