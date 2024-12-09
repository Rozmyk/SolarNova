import Wrapper from '../Wrapper/Wrapper'
import { PiCornersInFill } from 'react-icons/pi'
import { RiArrowDownSLine } from 'react-icons/ri'
import Button from '../ui/Button/Button'
const SingleRatingComponent = ({ number, text }: { number: string; text: string }) => {
	return (
		<div className='flex flex-col justify-center items-start'>
			<p className='text-secondary text-4xl font-semibold'>{number}</p>
			<p className='text-darkText '>{text}</p>
		</div>
	)
}
const AboutUs = () => {
	return (
		<div className='bg-foreground w-full relative '>
			<div className='absolute opacity-10 top-5 left-10 '>
				<PiCornersInFill size={150} color='#40cb7f' />
			</div>
			<Wrapper>
				<h3 className='text-4xl text-secondary font-semibold mb-4'>About Us</h3>
				<div className='flex flex-col w-full md:flex-row justify-center md:justify-between items-center md:items-start gap-2 '>
					<div className='w-full md:w-1/2'>
						<p className='text-darkText font-regular'>
							We strive to be your trusted partner in the tranisition to a greener tomorrow.
						</p>
						<div className='flex justify-start items-center gap-8 mb-12 mt-4'>
							<SingleRatingComponent number='4.9/5' text='Client rating' />
							<SingleRatingComponent number='06' text='Experience Years' />
						</div>
						<Button>Learn More</Button>
					</div>
					<div className='w-full md:w-1/2'>
						<p className='text-darkText font-regular mb-4'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam sed cumque cupiditate nesciunt quis
							doloribus praesentium quae possimus dolor iure adipisci, repellendus vero laudantium at sunt temporibus
							eveniet saepe?
						</p>
						<p className='text-darkText font-regular'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam sed cumque cupiditate nesciunt quis
							doloribus praesentium quae possimus dolor iure adipisci, repellendus vero laudantium at sunt temporibus
							eveniet saepe?
						</p>
					</div>
				</div>
			</Wrapper>
			<div className='absolute opacity-10 bottom-0 right-5 md:right-36  ' style={{ transform: 'rotate(135deg)' }}>
				<RiArrowDownSLine size={200} color='#40cb7f' />
			</div>
		</div>
	)
}

export default AboutUs
