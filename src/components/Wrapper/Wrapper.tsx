import { ReactNode } from 'react'

const Wrapper = ({ children, withoutBorder }: { children: ReactNode; withoutBorder: boolean }) => {
	return (
		<div className='bg-white min-w-[100vw] min-h-[100vh] max-w-[100vh] flex flex-col justify-center items-center'>
			<div className={`max-w-6xl w-6xl mt-24 mb-24 w-full ${withoutBorder ? '' : 'border border-solid border-border'}`}>
				{children}
			</div>
		</div>
	)
}

export default Wrapper
