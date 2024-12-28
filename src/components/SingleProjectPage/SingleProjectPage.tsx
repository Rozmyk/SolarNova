import Wrapper from '../Wrapper/Wrapper'
const SingleProjectPage = ({ projectId }: { projectId: string }) => {
	return (
		<Wrapper>
			<div className='bg-red-400'>{projectId}</div>
		</Wrapper>
	)
}

export default SingleProjectPage
