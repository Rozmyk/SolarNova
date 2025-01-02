import SingleServicePage from '@/components/SingleServicePage/SingleServicePage'
type Params = Promise<{ serviceId: string }>

export default async function page(props: { params: Params }) {
	const params = await props.params
	const serviceId = params.serviceId
	return <SingleServicePage serviceId={serviceId} />
}
