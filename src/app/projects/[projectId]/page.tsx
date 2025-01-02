import SingleProjectPage from '@/components/SingleProjectPage/SingleProjectPage'

type Params = Promise<{ projectId: string }>

export default async function page(props: { params: Params }) {
	const params = await props.params
	const projectId = params.projectId
	return <SingleProjectPage projectId={projectId} />
}
