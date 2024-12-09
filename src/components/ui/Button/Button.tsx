import Image from 'next/image'
import { TbCircleArrowUpRightFilled } from 'react-icons/tb'

const Button = ({ children, reverse }: { children: string; reverse?: boolean }) => {
	return reverse ? (
		<button
			type='button'
			className='py-2.5 px-6 text-sm bg-[#f7f7f7] text-[#323332] rounded-full cursor-pointer font-medium text-center shadow-xs transition-all duration-500 hover:bg-stone-200 inline-flex items-center gap-1'>
			{children}
			<TbCircleArrowUpRightFilled size={25} color='#40cb7f' />
		</button>
	) : (
		<button
			type='button'
			className='py-2.5 px-6 text-sm bg-primary text-white rounded-full cursor-pointer font-medium text-center shadow-xs transition-all duration-500 hover:bg-accent inline-flex items-center gap-1'>
			{children}
			<TbCircleArrowUpRightFilled size={25} color='white' />
		</button>
	)
}

export default Button
