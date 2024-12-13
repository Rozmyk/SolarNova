import ProjectsPage from '@/components/ProjectsPage/ProjectsPage'
import { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Projects',
	description:
		'Discover our renewable energy projects that drive a sustainable future. From solar installations to wind farms, we deliver innovative solutions for homes, businesses, and communities.',
}
const page = () => {
	return <ProjectsPage />
}

export default page
