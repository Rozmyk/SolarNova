'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import Wrapper from '../Wrapper/Wrapper'
import projectData from '../../../data/projectsData'
import ProjectCard from '../Projects/ProjectCard/ProjectCard'
import TitleText from '../ui/TitleText/TitleText'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'
import { TbNorthStar } from 'react-icons/tb'

const SortBy = ({ onSortChange }: { onSortChange: Dispatch<SetStateAction<string>> }) => {
	return (
		<form className='flex justify-center items-center gap-2'>
			<label htmlFor='sort' className='text-secondary font-semibold'>
				Sort:
			</label>
			<select
				defaultValue='latest'
				id='sort'
				className='bg-[#f7f7f7] text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5'
				onChange={e => onSortChange(e.target.value)}>
				<option value='latest'>Latest</option>
				<option value='oldest'>Oldest</option>
			</select>
		</form>
	)
}

const ProjectsPage = () => {
	const [sortOrder, setSortOrder] = useState('latest')

	const sortedProjects = [...projectData].sort((a, b) => {
		return sortOrder === 'latest' ? b.date - a.date : a.date - b.date
	})

	return (
		<div className='overflow-hidden  relative'>
			<div className='absolute opacity-10 top-96 right-10 rotate-12 '>
				<TbNorthStar size={200} color='#40cb7f' />
			</div>
			<Wrapper>
				<div className=' w-full flex flex-col justify-center items-center overflow-hidden'>
					<div className='w-full flex md:flex-row flex-col justify-between items-center gap-4 mb-8 p-4'>
						<div className='w-full md:w-1/2'>
							<TitleText>Our Projects</TitleText>
						</div>
						<div className='w-full md:w-1/2 flex justify-end'>
							<SortBy onSortChange={setSortOrder} />
						</div>
					</div>
					<div className='p-4'>
						<p className='text-secondary'>
							Our renewable energy projects focus on creating sustainable, eco-friendly energy solutions that support
							environmental protection and reduce carbon emissions. We invest in innovative technologies harnessing
							renewable energy sources such as solar, wind, biomass, and hydropower. Our projects include the
							development of solar farms, wind power plants, energy storage systems, and biogas facilities, providing
							clean and reliable energy for homes, industries, and public institutions. Through these initiatives, we
							are committed to building a sustainable energy future that reduces dependence on fossil fuels and supports
							local communities and economies.
						</p>
					</div>
					<div
						className='grid w-full gap-8 max-w-screen-lg 
                  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8'>
						{sortedProjects.map(project => (
							<div className='w-full h-full flex justify-center items-center' key={project.id}>
								<ProjectCard {...project} />
							</div>
						))}
					</div>
				</div>
			</Wrapper>
			<div className='absolute  bottom-20 left-10 rotate-12  ' style={{ opacity: 0.03 }}>
				<MdKeyboardDoubleArrowUp size={400} color='black' />
			</div>
		</div>
	)
}

export default ProjectsPage
