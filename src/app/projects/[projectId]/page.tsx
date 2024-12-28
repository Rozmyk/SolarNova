import SingleProjectPage from '@/components/SingleProjectPage/SingleProjectPage'
import { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Singe Project',
	description: 'lorem20',
}
const page = ({ params: { projectId } }: { params: { projectId: string } }) => {
	return <SingleProjectPage projectId={projectId} />
}

export default page
