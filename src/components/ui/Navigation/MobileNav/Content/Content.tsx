import Link from 'next/link'
import { SetStateAction, Dispatch } from 'react'

const Content = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
	const links = ['About', 'Projects', 'Service', 'Contact']
	const handleClose = () => setIsOpen(false)

	return (
		<div
			className={`fixed top-[80px] left-0 h-[calc(100vh-80px)] bg-foreground w-screen z-[100] p-3 flex flex-col justify-start items-start transition-transform duration-300 ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			}`}>
			<div className='flex flex-col justify-start items-center gap-8 w-full'>
				<Link onClick={handleClose} className='text-secondary font-semibold text-3xl' href='/'>
					Home
				</Link>
				{links.map(link => (
					<Link
						onClick={handleClose}
						className='text-secondary font-semibold text-3xl'
						key={link}
						href={`/${link.toLowerCase()}`}>
						{link}
					</Link>
				))}
			</div>
		</div>
	)
}

export default Content
