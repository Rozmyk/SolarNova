import Button from '@/components/ui/Button/Button'
import Wrapper from '@/components/Wrapper/Wrapper'
const SingleService = ({
	number,
	unit,
	titleLine1,
	titleLine2,
}: {
	number: string
	unit: string
	titleLine1: string
	titleLine2: string
}) => {
	return (
		<div className='flex flex-col items-center justify-center text-center'>
			<div className='text-4xl font-bold mb-2'>
				<span className='text-secondary'>{number}</span> <span className='text-primary'>{unit}</span>
			</div>
			<p className='text-gray-500'>{titleLine1}</p>
			<p className='text-gray-500'>{titleLine2}</p>
		</div>
	)
}

const StatsSection = () => {
	return (
		<Wrapper>
			<div className='flex justify-between items-center pb-4 border-b border-gray-300 p-4 mb-8'>
				<h2 className='text-3xl text-secondary font-semibold'>
					Perform Market Research to gain <br />
					Insights into Industry Trends
				</h2>
				<Button>Get Started</Button>
			</div>
			<div className=' w-full  flex md:flex-row flex-col gap-8 md:gap-0 justify-between items-center'>
				<SingleService number='174,485' unit='kWp' titleLine1='Zainstalowana moc' titleLine2='fotowoltaiczna' />
				<div className='w-px h-16 bg-gray-300' />
				<SingleService number='174,485' unit='kWp' titleLine1='Zainstalowana moc' titleLine2='fotowoltaiczna' />
				<div className='w-px h-16 bg-gray-300' />
				<SingleService number='174,485' unit='kWp' titleLine1='Zainstalowana moc' titleLine2='fotowoltaiczna' />
				<div className='w-px h-16 bg-gray-300' />
				<SingleService number='174,485' unit='kWp' titleLine1='Zainstalowana moc' titleLine2='fotowoltaiczna' />
			</div>
		</Wrapper>
	)
}

export default StatsSection
