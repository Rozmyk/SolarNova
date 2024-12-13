'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ActiveLink = ({ href, isActive, children }: { href: string; isActive: boolean; children: string }) => {
	return (
		<li>
			<Link
				style={{ color: '#0e2e3d' }}
				className={`px-2 py-2 rounded-lg  transition-all font-regular  ${isActive ? '  ' : ''}`}
				href={href}>
				{children}
			</Link>
		</li>
	)
}

const Buttons = () => {
	const pathname = usePathname()
	const items = ['Home', 'About', 'Projects', 'Service']

	return (
		<div className='flex justify-center items-center py-2 '>
			<ul className='flex space-x-4'>
				{items.map(item => {
					const slug = `/${item.toLowerCase().replace(/ /g, '-')}`
					const isActive = pathname === slug || (pathname === '/' && item === 'Home')
					return (
						<ActiveLink key={item} href={slug} isActive={isActive}>
							{item}
						</ActiveLink>
					)
				})}
			</ul>
		</div>
	)
}

export default Buttons
