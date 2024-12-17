import AboutPage from '@/components/AboutPage/AboutPage'
import { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'About Us',
	description:
		'Learn about our commitment to renewable energy and sustainability. Discover how we empower communities and businesses with innovative solutions for a greener future.',
}

const page = () => {
	return <AboutPage />
}

export default page
