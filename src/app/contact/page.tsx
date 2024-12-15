import ContactPage from '@/components/ContactPage/ContactPage'
import { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Contact Us',
	description:
		'Get in touch with us for inquiries, support, or collaboration opportunities. We’re here to help with your questions about our services, projects, and renewable energy solutions.',
}

const page = () => {
	return <ContactPage />
}

export default page
