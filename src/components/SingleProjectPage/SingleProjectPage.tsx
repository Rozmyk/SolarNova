'use client'
import Spinner from '../ui/Spinner/Spinner'
import Wrapper from '../Wrapper/Wrapper'
import ProjectImage from './ProjectImage/ProjectImage'
import projectData from '../../../data/projectsData'
import { useState, useEffect, } from 'react'
import Technologies from './Technologies/Technologies'
import Carousel from './Carousel/Carousel'
import OtherProjects from './OtherProjects/OtherProjects'
import { ProjectProps } from '@/types'

const SingleProjectProfile = ({ label, value }: { label: string; value: string }) => {
	return (
		<div className='text-secondary flex flex-col justify-start items-start text-lg'>
			<p className='font-semibold'>{label}</p>
			<p>{value}</p>
			<div className='mt-2 mb-2 border-t border-gray-300 w-full' />
		</div>
	)
}

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
		<Wrapper>
			{projectLoading && !singleProjectData ? (
				<div className='flex justify-center items-center w-full h-72'>
					<Spinner />
				</div>
			) : (
				<>
					{singleProjectData && (
						<ProjectImage
							title={singleProjectData.title}
							description={singleProjectData.description}
							src={singleProjectData.src}
						/>
					)}
					<div className='w-full   mt-20 flex-col md:flex-row md:flex justify-between items-start gap-20 mb-20 p-4'>
						<div className='w-full md:w-1/2 md:mb-0 mb-10 '>
							<h3 className='text-secondary font-semibold text-xl mb-2'>The mission</h3>
							<p className='text-darkText '>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nisi ab quaerat quasi consectetur, eius
								iste suscipit incidunt perspiciatis a.
							</p>
						</div>
						<div className=' w-full md:w-1/2  '>
							<h3 className='text-secondary font-semibold text-xl mb-2'>Project profile</h3>
							<div className='w-full flex flex-col gap-2 '>
								{singleProjectData && (
									<>
										<SingleProjectProfile label='Location:' value={singleProjectData.location} />
										<SingleProjectProfile label='Power class:' value={singleProjectData.powerClass} />
										<SingleProjectProfile label='Commissioning: ' value={singleProjectData.commissioning} />
										<SingleProjectProfile label='Status:' value={singleProjectData.status} />
									</>
								)}
							</div>
						</div>
					</div>
					{singleProjectData && <Carousel gallery={singleProjectData.gallery} />}
					<Technologies />

					<OtherProjects projectId={projectId} />
				</>
			)}
		</Wrapper>
	)
}

export default SingleProjectPage
