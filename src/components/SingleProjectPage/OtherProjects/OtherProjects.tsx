'use client'
import ProjectCard from '@/components/Projects/ProjectCard/ProjectCard'
import projectData from '../../../../data/projectsData'
import { useState, useEffect, useRef } from 'react'
import TitleText from '@/components/ui/TitleText/TitleText'
import { ProjectProps } from '@/types'
import gsap from 'gsap'

const OtherProjects = ({ projectId }: { projectId: string }) => {
	const [projects, setProjects] = useState<ProjectProps[]>([])
	const containerRef = useRef<HTMLDivElement | null>(null)

	const getOtherProjects = () => {
		setProjects(projectData.filter(project => !projectId.includes(project.id)).slice(0, 3))
	}

	useEffect(() => {
		getOtherProjects()
	}, [projectId])

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						gsap.fromTo(entry.target, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.1 }
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current)
			}
		}
	}, [projects])

	return (
		<div ref={containerRef} className='p-4 opacity-0'>
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
