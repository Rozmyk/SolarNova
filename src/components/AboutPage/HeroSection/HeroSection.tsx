import Image from 'next/image'
import Button from '@/components/ui/Button/Button'
import Wrapper from '@/components/Wrapper/Wrapper'
import { TbGridDots } from 'react-icons/tb'
import { CiBadgeDollar } from 'react-icons/ci'
import { PiHandCoinsLight } from 'react-icons/pi'
import { RxDragHandleDots1 } from 'react-icons/rx'
import { GoNorthStar } from 'react-icons/go'
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
const HeroSection = () => {
	return (
		<>
			<Wrapper>
				<div className='w-full flex  flex-col md:flex-row justify-between items-center gap-4 relative z-10 mb-8 p-4 '>
					<div className='w-full h-full md:w-1/2  flex justify-between items-center gap-4 mb-8 md:mb-0 '>
						<div className='h-96 w-1/2  flex flex-col justify-start items-end '>
							<div className='w-full md:w-4/5 h-72  relative drop-shadow-md '>
								<Image fill alt='test' src='/team1.jpg' className='z-10 rounded-md' />
								<div className='absolute right-1/2 translate-x-1/2 bottom-[-100px]' style={{ opacity: 0.02 }}>
									<RxDragHandleDots1 color='black' size={250} />
								</div>
							</div>
						</div>
						<div className='h-96 w-1/2 flex flex-col justify-end items-start '>
							<div className='w-full md:w-4/5  h-72  relative drop-shadow-md '>
								<div className='absolute top-[-30px] left-[-30px] md:top-[-30px] md:left-auto md:right-[-30px] z-10'>
									<GoNorthStar size={60} color='#40cb7f' />
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
		</>
	)
}

export default HeroSection
