import SingleProjectPage from '@/components/SingleProjectPage/SingleProjectPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Single Project',
	description: 'lorem20',
}

interface PageProps {
	params: {
		projectId: string
	}
}

const Page = ({ params: { projectId } }: PageProps) => {
	return <SingleProjectPage projectId={projectId} />
}

export default Page
