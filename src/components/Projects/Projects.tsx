import Wrapper from '../Wrapper/Wrapper'
import TitleText from '../ui/TitleText/TitleText'
import CarouselButtons from './CarouselButtons/CarouselButtonts'
import Button from '../ui/Button/Button'
import { MdOutlineDateRange } from 'react-icons/md'
import { FaUser } from 'react-icons/fa6'

const ProjectCard = ({ src, title, author, date }: { src: string; title: string; author: string; date: string }) => {
	return (
		<div className=' w-full rounded-xl overflow-hidden '>
			<div
				className=' w-full h-60 rounded-xl'
				style={{
					backgroundImage: `url(${src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}></div>
			<div className='flex justify-start items-center mb-2 mt-4 gap-4'>
				<div className='flex justify-start items-center gap-2 text-darkText'>
					<MdOutlineDateRange />
					<p className='text-xs'>{date}</p>
				</div>
				<div className='flex justify-start items-center gap-2 text-darkText'>
					<FaUser />
					<p className='text-xs'>{author}</p>
				</div>
			</div>
			<p className='font-semibold text-secondary text-lg mt-2'>{title}</p>
		</div>
	)
}
const Projects = () => {
	return (
		<Wrapper>
			<div className='flex md:flex-row flex-col justify-between items-center gap-4 mb-2 p-4'>
				<div className='w-full md:w-1/2'>
					<TitleText>Successful Renewable energy projects</TitleText>
				</div>
				<div className='w-full md:w-1/2 flex justify-end'>
					<CarouselButtons />
				</div>
			</div>
			<div className='p-4 flex w-full gap-4 flex-col md:flex-row'>
				<ProjectCard
					src='/projectImage1.jpg'
					title='Solar Firm & wind turbine'
					date='December 15, 2024'
					author='Christopher Jack'
				/>
				<ProjectCard
					src='/projectImage2.jpg'
					title='Wind turbine project on mountain'
					date='December 15, 2024'
					author='Christopher Jack'
				/>
				<ProjectCard
					src='/projectImage3.jpg'
					title='Hydropower System Project'
					date='December 15, 2024'
					author='Christopher Jack'
				/>
			</div>
			<div className='flex justify-center items-center w-full p-4'>
				<Button>View all projects</Button>
			</div>
		</Wrapper>
	)
}

export default Projects
