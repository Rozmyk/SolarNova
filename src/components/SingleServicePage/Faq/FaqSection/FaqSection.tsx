import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { MdOutlineQuestionMark } from 'react-icons/md'
import { faqItemProps } from '@/types'
import gsap from 'gsap'

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
	const faqRef = useRef<(HTMLDivElement | null)[]>([])
	const imageRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						if (entry.target === imageRef.current) {
							gsap.fromTo(
								entry.target,
								{ opacity: 0, scale: 0.8 },
								{ opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
							)
						} else {
							gsap.fromTo(
								entry.target,
								{ opacity: 0, y: 50 },
								{
									opacity: 1,
									y: 0,
									duration: 0.5,
									ease: 'power2.out',
									stagger: 0.2,
								}
							)
						}
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.1 }
		)

		faqRef.current.forEach(el => {
			if (el) {
				observer.observe(el)
			}
		})

		if (imageRef.current) {
			observer.observe(imageRef.current)
		}

		return () => {
			faqRef.current.forEach(el => {
				if (el) {
					observer.unobserve(el)
				}
			})

			if (imageRef.current) {
				observer.unobserve(imageRef.current)
			}
		}
	}, [items])

	return (
		<section className='w-full flex flex-col md:flex-row gap-8 justify-between items-center'>
			<div className='space-y-4 w-full md:w-1/2'>
				{items.map((item, index: number) => (
					<div
						ref={el => {
							faqRef.current[index] = el
						}}
						key={index}>
						<FaqItem question={item.question} answer={item.answer} />
					</div>
				))}
			</div>

			<div className='relative flex justify-center items-center w-full md:w-1/2'>
				<div ref={imageRef} className='w-72 md:w-96 h-72 md:h-96 relative'>
					<Image src='/faq/faqPhoto.webp' className='rounded-full z-10' alt='Worker' fill />
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
