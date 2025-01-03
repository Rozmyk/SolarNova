import { useState } from 'react'
import Image from 'next/image'
import { MdOutlineQuestionMark } from 'react-icons/md'
import { faqItemProps } from '@/types'
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='border-b'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='flex justify-between items-center w-full py-4 text-left text-lg text-secondary font-semibold'>
				{question}
				<span className={`transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
			</button>
			{isOpen && <p className='text-darkText pb-4 pl-4'>{answer}</p>}
		</div>
	)
}

const FaqSection = ({ items }: { items: faqItemProps[] }) => {
	return (
		<section className='w-full flex flex-col md:flex-row gap-8 justify-between items-center'>
			<div className='space-y-4  w-full md:w-1/2'>
				{items.map((item, index: number) => (
					<FaqItem key={index} question={item.question} answer={item.answer} />
				))}
			</div>

			<div className='relative flex justify-center items-center w-full md:w-1/2'>
				<div className=' w-72 md:w-96 h-72 md:h-96 relative'>
					<Image src='/faqPhoto.jpg' className='rounded-full z-10 ' alt='Worker' fill />
					<div
						className='absolute w-72 md:w-96 h-72 md:h-96 top-1/2 left-1/2 bg-primary rounded-full translate-x-[-50%] translate-y-[-50%] opacity-50'
						style={{ transform: 'translate(calc(-50% + 20px), calc(-50% + 20px))' }}></div>
				</div>

				<div className='absolute bottom-4 right-4 bg-primary text-white p-3 rounded-full'>
					<span className='text-white'>
						<MdOutlineQuestionMark />
					</span>
				</div>
			</div>
		</section>
	)
}

export default FaqSection
