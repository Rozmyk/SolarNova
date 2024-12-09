import { useState } from 'react'
const BurgerButton = () => {
	const [isOpen, setIsOpen] = useState(false)
	const genericHamburgerLine = `h-0.5 w-5 my-0.5 rounded-full bg-black transition ease transform duration-300`

	return (
		<button
			className='flex flex-col h-10 w-10   rounded-lg bg-[#ccf2de] justify-center items-center group'
			onClick={() => setIsOpen(!isOpen)}>
			<div className='h-10 w-5 flex flex-col items-start justify-center'>
				<div className={`${genericHamburgerLine} ${isOpen ? 'rotate-45 translate-y-1.5 w-5 ' : 'opacity-100 w-3'}`} />
				<div className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
				<div
					className={`${genericHamburgerLine} ${isOpen ? '-rotate-45 -translate-y-1.5 opacity-100' : 'opacity-100'}`}
				/>
			</div>
		</button>
	)
}

export default BurgerButton
