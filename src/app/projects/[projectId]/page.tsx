import SingleProjectPage from '@/components/SingleProjectPage/SingleProjectPage'
import { Metadata } from 'next'
const page = ({ params: { projectId } }: { params: { projectId: string } }) => {
	return <SingleProjectPage projectId={projectId} />
}

export default page
