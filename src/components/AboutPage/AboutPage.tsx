import Wrapper from '../Wrapper/Wrapper'
import Image from 'next/image'
import { TbGridDots } from 'react-icons/tb'
import { CiBadgeDollar } from 'react-icons/ci'
import { PiHandCoinsLight, PiStarFourFill } from 'react-icons/pi'
import { GoNorthStar } from 'react-icons/go'
import { RxDragHandleDots1 } from 'react-icons/rx'
import { TfiLineDotted } from 'react-icons/tfi'

import Button from '../ui/Button/Button'
const TextWithIcon = ({
	text,
	icon: Icon,
}: {
	text: string
	icon: React.ComponentType<{ size?: number; className?: string }>
}) => {
	return (
		<div className=' flex justify-start items-center gap-2 mb-4 mt-4'>
			<div className=' text-[#40cb7f] bg-[#f7f7f7] flex justify-center items-center p-1.5 rounded-lg '>
				<Icon size={34} className='opacity-100 ' />
			</div>
			<p className='text-secondary font-semibold text-sm'>{text}</p>
		</div>
	)
}
const StatsCard = ({ value, label1, label2 }: { value: string; label1: string; label2: string }) => {
	return (
		<div className={`py-4 px-6 rounded-md flex items-center space-x-4`}>
			<div className='text-5xl font-semibold text-secondary'>
				{value}
				<span className='text-3xl'>+</span>
			</div>
			<div className='border-l pl-4 text-darkText border-secondary'>
				<p className='text-xs font-semibold uppercase tracking-widest'>{label1}</p>
				<p className='text-xs font-semibold uppercase tracking-widest'>{label2}</p>
			</div>
		</div>
	)
}
const SingleTeamCard = ({
	name,
	bottomText,
	src,
	center,
}: {
	name: string
	bottomText: string
	src: string
	center?: boolean
}) => {
	return (
		<div className={`${center ? 'mt-8' : ''} flex flex-col justify-center items-center`}>
			<div className='relative p-2 h-80 w-56  drop-shadow-md  '>
				<Image className='rounded-md' src={src} fill alt={`porter of ${name}`} />
			</div>
			<p className='text-secondary font-semibold mt-4'>{name}</p>
			<p className='text-sm text-darkText'>{bottomText}</p>
		</div>
	)
}
const AboutPage = () => {
	return (
		<div className='relative overflow-hidden mt-20'>
			<Wrapper>
				<div className='w-full flex  flex-col md:flex-row justify-between items-center gap-4 relative z-10 mb-8 p-4 '>
					<div className='w-full h-full md:w-1/2  flex justify-between items-center gap-4 mb-8 md:mb-0 '>
						<div className='h-96 w-1/2  flex flex-col justify-start items-end '>
							<div className='w-4/5 h-72  relative drop-shadow-md '>
								<Image fill alt='test' src='/team1.jpg' className='z-10 rounded-md' />
								<div className='absolute right-1/2 translate-x-1/2 bottom-[-100px]' style={{ opacity: 0.02 }}>
									<RxDragHandleDots1 color='black' size={250} />
								</div>
							</div>
						</div>
						<div className='h-96 w-1/2 flex flex-col justify-end items-start '>
							<div className='w-4/5 h-72  relative drop-shadow-md '>
								<div className='absolute top-[-40px] right-[-40px] z-10'>
									<GoNorthStar size={80} color='#40cb7f' />
								</div>
								<Image fill alt='test' src='/team2.jpg' className='rounded-md' />
							</div>
						</div>
					</div>
					<div className='w-full md:w-1/2 '>
						<h1 className=' text-lg md:text-2xl xl:text-4xl  mb-4  font-semibold  w-full  text-secondary'>
							The Best Finance Consulting in Town Since 2007
						</h1>
						<p className='text-sm text-darkText'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos cumque temporibus quibusdam ea
							veritatis tempore, numquam iusto obcaecati odio vero tenetur ut dicta rem accusantium quisquam iure quia
							ex cum!
						</p>
						<div className='flex justify-start items-center gap-4'>
							<TextWithIcon icon={CiBadgeDollar} text='Bussines Planning & Technologist' />
							<TextWithIcon icon={PiHandCoinsLight} text='Human and Consulting' />
						</div>
						<div className='flex justify-start gap-4 items-center w-full mt-8'>
							<Button>Contact</Button> <Button reverse>Our services</Button>
						</div>
					</div>
				</div>
			</Wrapper>
			<div className='absolute top-20 right-[-80px] -rotate-45 ' style={{ opacity: 0.03 }}>
				<TbGridDots color='black' size={300} />
			</div>

			{/* //// numbers //// */}
			<div className='bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#f2fff4] to-white mb-8'>
				<Wrapper>
					<div className='flex justify-between items-center pb-4 border-b border-secondary p-4 '>
						<h2 className='text-3xl text-secondary font-semibold'>
							Perform Market Research to gain <br />
							Insights into Industry Trends
						</h2>
						<Button>Get Started</Button>
					</div>
					<div className='flex flex-col md:flex-row  items-center justify-center mt-4 text-secondary p-4  '>
						<StatsCard value='12K' label1='Total Projects' label2='Completed' />
						<PiStarFourFill size={30} />
						<StatsCard value='5K' label1='Happy Clients' label2='Served' />
						<PiStarFourFill size={30} />
						<StatsCard value='1K' label1='Ongoing Projects' label2='Worldwide' />
					</div>
				</Wrapper>
			</div>

			{/* ///// team //// */}

			<div className='w-full relative overflow-hidden '>
				<Wrapper>
					<div className='flex flex-col justify-center items-center p-4'>
						<h3 className='text-3xl text-secondary font-semibold'>
							We've 36+ Active & Dedicated Members for Helping the Customers
						</h3>
						<p className='text-darkText mb-8 text-sm'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis accusantium asperiores quidem
							amet ducimus sunt, nulla minus neque error?
						</p>
						<div className='w-full flex flex-col md:flex-row justify-center items-center gap-8'>
							<SingleTeamCard src='/teamPortret1.jpg' name='Charles S. Brown' bottomText='Lead Developer' />
							<SingleTeamCard center src='/teamPortret2.jpg' name='Md. Abu Taleb' bottomText='UI-UX Design' />
							<SingleTeamCard src='/teamPortret3.jpg' name='Jannat Humayra' bottomText='Lead Marketing' />
						</div>
					</div>
				</Wrapper>
			</div>
		</div>
	)
}

export default AboutPage
