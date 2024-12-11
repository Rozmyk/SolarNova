import { ReactNode } from 'react'

const Wrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div className='bg-transparent max-w-screen  overflow-hidden  flex flex-col justify-center items-center '>
			<div className={`max-w-6xl w-6xl mt-20 mb-20 w-full `}>{children}</div>
		</div>
	)
}

export default Wrapper
