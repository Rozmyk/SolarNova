'use client'
import Wrapper from '../Wrapper/Wrapper'
import servicesData from '../../../data/servicesData'
import { useState, useEffect } from 'react'
import { SingleServiceProps } from '@/types'
import HeaderContent from './HeaderContent/HeaderContent'
import HeaderImage from './HeaderImage/HeaderImage'
import ErrorPage from '../ErrorPage/ErrorPage'
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
				<ErrorPage />
			) : (
				singleServiceData && (
					<div className='flex justify-between flex-col-reverse md:flex-row items-center gap-20 p-4'>
						<HeaderContent title={singleServiceData.text} />
						<HeaderImage src={singleServiceData.src} />
					</div>
				)
			)}
		</Wrapper>
	)
}

export default SingleServicePage
