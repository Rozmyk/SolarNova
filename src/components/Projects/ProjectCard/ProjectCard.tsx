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
	date: number
	id: string
}) => {
	function formatDate(timestamp: number): string {
		return new Intl.DateTimeFormat('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		}).format(new Date(timestamp))
	}
	return (
		<Link href={`projects/${id}`} className='max-w-80 w-full  rounded-xl overflow-hidden  '>
			<div
				className='w-full  h-60 rounded-xl '
				style={{
					backgroundImage: `url(${src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					maxWidth: 350,
				}}></div>
			<div className='flex justify-start items-center mb-2 mt-4 gap-4 w-full'>
				<div className='flex justify-start items-center gap-2 text-darkText'>
					<MdOutlineDateRange />
					<p className='text-xs'>{formatDate(date)}</p>
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
