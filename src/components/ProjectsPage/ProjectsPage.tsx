import Wrapper from '../Wrapper/Wrapper'
import projectData from '../../../data/projectsData'
import ProjectCard from '../Projects/ProjectCard/ProjectCard'

const ProjectsPage = () => {
	return (
		<Wrapper>
			<div className='w-full flex justify-center items-center'>
				<div
					className='grid w-full gap-8 max-w-screen-lg 
                  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
					{projectData.map(project => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>
			</div>
		</Wrapper>
	)
}

export default ProjectsPage
