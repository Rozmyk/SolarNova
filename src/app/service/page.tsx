import ServicePage from '@/components/ServicePage/ServicePage'
import { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Services',
	description:
		'Explore our range of renewable energy services designed to empower a sustainable future. From solar panel installation to energy consulting, we provide tailored solutions for homes, businesses, and communities.',
}

const page = () => {
	return <ServicePage />
}

export default page
