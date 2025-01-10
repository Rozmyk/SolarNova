import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import 'swiper/css'

const CarouselButtons = ({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) => {
	return (
		<div className='flex justify-center items-center gap-4'>
			<button
				onClick={onPrev}
				className='w-10 h-10 rounded-full bg-transparent border-primary border border-solid flex justify-center items-center'
				aria-label='Previous slide'
				role='button'>
				<MdKeyboardArrowLeft size={20} color='#40cb7f' />
			</button>
			<button
				onClick={onNext}
				className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'
				aria-label='Next slide'
				role='button'>
				<MdKeyboardArrowRight size={20} />
			</button>
		</div>
	)
}

export default CarouselButtons
