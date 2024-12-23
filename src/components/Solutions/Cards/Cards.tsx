import { GoArrowUpRight } from 'react-icons/go'
import { SlEnergy } from 'react-icons/sl'
import { TbCarFan } from 'react-icons/tb'
import { RiWaterFlashFill } from 'react-icons/ri'
import Image from 'next/image'
type SingleCardProps = {
	src: string
	icon: React.ComponentType<{ size?: number; className?: string }>
	title: string
	text: string
}

const SingleCard = ({ src, icon: Icon, title, text }: SingleCardProps) => {
	return (
		<div className=' w-full h-52 relative rounded-3xl z-0 p-4 overflow-hidden pt-10 pb-10'>
			<div
				className='w-full h-full absolute right-0 left-0 top-0 bottom-0 z-0'
				style={{
					backgroundImage: `url(${src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}></div>
			<div className='h-full w-full absolute top-0 bottom-0 left-0 right-0 bg-[#123520] opacity-90 z-10 '></div>

			<div className='z-20 relative flex flex-col justify-between items-start h-full'>
				<Icon size={40} className='mb-4' />
				<div>
					<h4 className='font-semibold capitalize'>{title}</h4>
					<p className='text-white opacity-80 text-sm font-medium'>{text}</p>
				</div>
			</div>

			<button className='w-12 h-12 bg-primary rounded-full flex justify-center items-center absolute bottom-0 right-0  z-20'>
				<GoArrowUpRight size={20} />
			</button>

			<Image className='absolute bottom-0 right-0 z-10 ' height={80} width={80} alt='decorative' src='/corner.svg' />
		</div>
	)
}
const Cards = () => {
	return (
		<div className='flex md:flex-row flex-col justify-between items-center md:gap-14 gap-8'>
			<SingleCard
				src='/service/solarEnergy.webp'
				icon={SlEnergy}
				title='Solar Energy system'
				text='Enjoy clean, renewable energy at home and reduce your electricity bills.'
			/>
			<SingleCard
				src='/service/windEnergy.webp'
				icon={TbCarFan}
				title='Wind energy systems'
				text='Generate electricy from the wind and contribute to a cleaner enviorment.'
			/>
			<SingleCard
				src='/service/hydroPower.webp'
				icon={RiWaterFlashFill}
				title='hydropower systems'
				text='Small-scale hydrpower systems that can be installed in remote areas.'
			/>
		</div>
	)
}

export default Cards
