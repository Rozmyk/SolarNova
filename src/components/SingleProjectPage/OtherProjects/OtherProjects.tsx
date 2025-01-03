'use client'
import ProjectCard from '@/components/Projects/ProjectCard/ProjectCard'
import projectData from '../../../../data/projectsData'
import { useState, useEffect } from 'react'
import TitleText from '@/components/ui/TitleText/TitleText'
import { ProjectProps } from '@/types'
const OtherProjects = ({ projectId }: { projectId: string }) => {
	const [projects, setProjects] = useState<ProjectProps[]>([])
	const getOtherProjects = () => {
		setProjects(projectData.filter(project => !projectId.includes(project.id)).slice(0, 3))
	}
	useEffect(() => {
		getOtherProjects()
	}, [projectId])
	return (
		<div className='p-4'>
			<TitleText>Other projects</TitleText>
			<div className='w-full flex flex-col md:flex-row justify-between items-center p-4 '>
				{projects &&
					projects.map(project => (
						<div key={project.id} className='w-full h-full flex justify-center items-center '>
							<ProjectCard
								id={project.id}
								src={project.src}
								title={project.title}
								date={project.date}
								author={project.author}
							/>
						</div>
					))}
			</div>
		</div>
	)
}

export default OtherProjects
