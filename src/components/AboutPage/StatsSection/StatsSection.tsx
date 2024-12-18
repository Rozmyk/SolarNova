import { PiStarFourFill } from 'react-icons/pi'
import Button from '@/components/ui/Button/Button'
import Wrapper from '@/components/Wrapper/Wrapper'
const StatsCard = ({ value, label1, label2 }: { value: string; label1: string; label2: string }) => {
	return (
		<div className={`py-4 px-6 rounded-md flex items-center space-x-4`}>
			<div className='text-5xl font-semibold text-secondary'>
				{value}
				<span className='text-3xl'>+</span>
			</div>
			<div className='border-l pl-4 text-darkText border-gray-300'>
				<p className='text-xs font-semibold uppercase tracking-widest'>{label1}</p>
				<p className='text-xs font-semibold uppercase tracking-widest'>{label2}</p>
			</div>
		</div>
	)
}

const StatsSection = () => {
	return (
		<div className='bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#f2fff4] to-white mb-6 mt-6 '>
			<Wrapper>
				<div className='flex justify-between items-center pb-4 border-b border-gray-300 p-4'>
					<h2 className='text-3xl text-secondary font-semibold'>
						Perform Market Research to gain <br />
						Insights into Industry Trends
					</h2>
					<Button>Get Started</Button>
				</div>
				<div className='flex flex-col md:flex-row items-center justify-center mt-4 text-secondary p-4'>
					<StatsCard value='12K' label1='Total Projects' label2='Completed' />
					<PiStarFourFill size={30} />
					<StatsCard value='5K' label1='Happy Clients' label2='Served' />
					<PiStarFourFill size={30} />
					<StatsCard value='1K' label1='Ongoing Projects' label2='Worldwide' />
				</div>
			</Wrapper>
		</div>
	)
}

export default StatsSection
