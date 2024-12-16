import Wrapper from '../Wrapper/Wrapper'
import projectData from '../../../data/projectsData'
import ProjectCard from '../Projects/ProjectCard/ProjectCard'
import TitleText from '../ui/TitleText/TitleText'
import FilterBar from './FilterBar/FilterBar'

const ProjectsPage = () => {
	return (
		<Wrapper>
			<div className='w-full flex flex-col justify-center items-center'>
				<div className='w-full flex md:flex-row flex-col justify-between items-center gap-4 mb-8 p-4 '>
					<div className='w-full md:w-1/2'>
						<TitleText>Our Projects</TitleText>
					</div>
					<div className='w-full md:w-1/2 flex justify-end'>
						<p>buttons</p>
					</div>
				</div>
				<FilterBar />
				<div
					className='grid w-full gap-8 max-w-screen-lg 
                  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8'>
					{projectData.map(project => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>
			</div>
		</Wrapper>
	)
}

export default ProjectsPage
