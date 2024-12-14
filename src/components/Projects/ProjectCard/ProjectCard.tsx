import Link from 'next/link'
import { MdOutlineDateRange } from 'react-icons/md'
import { FaUser } from 'react-icons/fa6'
const ProjectCard = ({
	src,
	title,
	author,
	date,
	id,
}: {
	src: string
	title: string
	author: string
	date: string
	id: string
}) => {
	return (
		<Link href={`projects/${id}`} className='w-full rounded-xl overflow-hidden'>
			<div
				className='w-full h-60 rounded-xl'
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
		</Link>
	)
}

export default ProjectCard
