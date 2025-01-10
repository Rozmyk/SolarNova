'use client'
import Spinner from '../ui/Spinner/Spinner'
import Wrapper from '../Wrapper/Wrapper'
import ProjectImage from './ProjectImage/ProjectImage'
import projectData from '../../../data/projectsData'
import { useState, useEffect } from 'react'
import Technologies from './Technologies/Technologies'
import Carousel from './Carousel/Carousel'
import OtherProjects from './OtherProjects/OtherProjects'
import { ProjectProps } from '@/types'
import DetailsSection from './DetailsSection/DetailsSection'

const SingleProjectPage = ({ projectId }: { projectId: string }) => {
	const [singleProjectData, setSingleProjectData] = useState<ProjectProps | null>(null)
	const [projectLoading, setProjectLoading] = useState(true)

	const findProjectById = (projectId: string) => {
		return projectData.find(project => project.id === projectId)
	}

	useEffect(() => {
		const handleSearch = () => {
			const foundProject = findProjectById(projectId)
			setSingleProjectData(foundProject || null)
			setProjectLoading(false)
		}
		handleSearch()
	}, [projectId])
	return (
		<div>
			{projectLoading && !singleProjectData ? (
				<Wrapper>
					<div className='flex justify-center items-center w-full h-72'>
						<Spinner />
					</div>
				</Wrapper>
			) : (
				<>
					{singleProjectData && (
						<ProjectImage
							title={singleProjectData.title}
							description={singleProjectData.description}
							src={singleProjectData.src}
						/>
					)}
					{singleProjectData && <DetailsSection singleProjectData={singleProjectData} />}
					{singleProjectData && <Carousel gallery={singleProjectData.gallery} />}
					<Technologies />

					<OtherProjects projectId={projectId} />
				</>
			)}
		</div>
	)
}

export default SingleProjectPage
