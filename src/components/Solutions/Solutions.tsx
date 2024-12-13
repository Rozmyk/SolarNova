'use client'
import Wrapper from '../Wrapper/Wrapper'
import TitleText from '../ui/TitleText/TitleText'
import Button from '../ui/Button/Button'
import Cards from './Cards/Cards'
import { useRouter } from 'next/navigation'
const Solutions = () => {
	const router = useRouter()
	return (
		<Wrapper>
			<div className='flex md:flex-row flex-col justify-between items-center gap-4 mb-2 p-4'>
				<div className='w-full md:w-1/2'>
					<TitleText>We Provide Comprehensive Solar Solutions</TitleText>
				</div>
				<div className='w-full md:w-1/2 flex justify-end'>
					<Button
						onClick={() => {
							router.push('/services')
						}}>
						View all services
					</Button>
				</div>
			</div>
			<div className='w-full  p-8'>
				<Cards />
			</div>
		</Wrapper>
	)
}

export default Solutions
