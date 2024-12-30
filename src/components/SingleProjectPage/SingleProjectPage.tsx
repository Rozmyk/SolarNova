'use client'
import Wrapper from '../Wrapper/Wrapper'
import ProjectImage from './ProjectImage/ProjectImage'
import TitleText from '../ui/TitleText/TitleText'
import Image from 'next/image'
import projectData from '../../../data/projectsData'
import { useState, useEffect } from 'react'

const SingleProjectPage = ({ projectId }: { projectId: string }) => {
	const [singleProjectData, setSingleProjectData] = useState(null)
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
			{projectLoading ? (
				<p className='text-black text-4xl'>loading</p>
			) : (
				<>
					{singleProjectData && (
						<ProjectImage
							title={singleProjectData.title}
							description={singleProjectData.description}
							src={singleProjectData.src}
						/>
					)}
					<div className='w-full  mt-12 flex justify-between items-center gap-4 mb-8'>
						<div className='w-full md:w-1/2 '>
							<TitleText>The mission</TitleText>
							<p className='text-darkText text-sm'>{singleProjectData.description}</p>
						</div>
						<div className=' w-full md:w-1/2  '>
							<TitleText>Project profile</TitleText>
						</div>
					</div>
					<div className='w-full flex justify-center items-center mb-8 mt-8'>
						<div className='w-2/3 h-96 relative rounded-lg overflow-hidden'>
							<Image fill src={'/projectPhoto.jpg'} alt='solar farm' />
						</div>
					</div>
					<div className='w-full '>
						<TitleText>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique asperiores laborum exercitationem quae
							debitis nostrum magnam aperiam doloribus, sint nihil!
						</TitleText>
						<p className='text-darkText text-sm'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. At expedita accusamus autem ullam tempore
							aliquam? Ea doloribus at, atque hic iure ipsam fuga quasi libero cumque facere a tempore obcaecati.
						</p>
					</div>
				</>
			)}
		</Wrapper>
	)
}

export default SingleProjectPage
