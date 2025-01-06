import Link from 'next/link'
import { SetStateAction, Dispatch } from 'react'
import gsap from 'gsap'

import { useRef, useEffect } from 'react'
const Content = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
	const linkContainer = useRef<HTMLDivElement>(null)
	const links = ['About', 'Projects', 'Service', 'Contact']
	const handleClose = () => setIsOpen(false)
	useEffect(() => {
		if (isOpen && linkContainer.current) {
			gsap.set(linkContainer.current.children, { opacity: 0, x: -50 })

			gsap.to(linkContainer.current.children, {
				opacity: 1,
				x: 0,
				duration: 0.2,
				stagger: 0.2,
				ease: 'power2.out',
			})
		}
	}, [isOpen])

	return (
		<div
			className={`fixed top-[80px] left-0 h-[calc(100vh-80px)] bg-foreground w-screen z-[100] p-3 flex flex-col justify-start items-start transition-transform duration-300 ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			}`}>
			<div ref={linkContainer} className='flex flex-col justify-start items-center gap-8 w-full'>
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
