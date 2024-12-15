import { ReactNode } from 'react'

const Wrapper = ({ children, className }: { children: ReactNode; className?: string }) => {
	return (
		<div className='bg-transparent max-w-screen  overflow-hidden  flex flex-col justify-center items-center '>
			<div className={`max-w-6xl w-6xl mt-20 mb-20 w-full ${className} `}>{children}</div>
		</div>
	)
}

export default Wrapper
