'use client'
import Wrapper from '@/components/Wrapper/Wrapper'
import TitleText from '@/components/ui/TitleText/TitleText'
import { SetStateAction, Dispatch, useState, useRef, useEffect } from 'react'
import Button from '../ui/Button/Button'
import { RxDragHandleDots1 } from 'react-icons/rx'
import ContactImage from './ContactImage/ContactImage'
import gsap from 'gsap'

const InputWithLabel = ({
	label,
	type,
	name,
	placeholder,
	value,
	onChange,
}: {
	label: string
	type: string
	name: string
	placeholder: string
	value: string
	onChange: Dispatch<SetStateAction<string>>
}) => {
	return (
		<div className='flex flex-col gap-2 mb-4 w-full'>
			<label htmlFor={name} className='text-secondary font-semibold'>
				{label}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				value={value}
				onChange={e => onChange(e.target.value)}
				placeholder={placeholder}
				className='p-2 border rounded-lg bg-[#f7f7f7] w-full text-black focus:outline-none focus:ring-2 focus:primary'
			/>
		</div>
	)
}
const ContactPage = () => {
	const [nameValue, setNameValue] = useState('')
	const [surnameValue, setSurnameValue] = useState('')
	const [numberValue, setNumberValue] = useState('')
	const [messageValue, setMessageValue] = useState('')
	const [emailValue, setEmailValue] = useState('')
	const messageRef = useRef(null)
	const phoneRef = useRef(null)
	const emailRef = useRef(null)
	const nameRef = useRef(null)
	const containerRef = useRef(null)
	const buttonRef = useRef(null)
	useEffect(() => {
		gsap.registerPlugin()

		const elements = [nameRef.current, emailRef.current, phoneRef.current, messageRef.current, buttonRef.current]
		gsap.set(elements, { opacity: 0, y: 50 })

		const animate = () => {
			gsap.to(elements, {
				opacity: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.2,
				ease: 'power2.out',
			})
		}
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						animate()
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.5 }
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [])
	return (
		<div className='overflow-hidden relative '>
			<div className='absolute   rotate-12 top-20 right-64' style={{ opacity: 0.02 }}>
				<RxDragHandleDots1 color='black' size={250} />
			</div>
			<Wrapper className='z-10 '>
				<div className='mt-4 mb-4 '>
					<div className='flex md:flex-row flex-col justify-between items-center gap-4 mb-2 p-4 '>
						<div className='w-full md:w-1/2'>
							<TitleText>Contact us</TitleText>
						</div>
					</div>
					<div ref={containerRef} className=' w-full flex flex-col md:flex-row justify-between items-center '>
						<ContactImage />

						<div className='w-full md:w-1/2  p-4   h-full'>
							<div ref={nameRef} className='w-full flex justify-between items-center gap-4'>
								<InputWithLabel
									label='First name'
									type='text'
									name='firstName'
									placeholder='John'
									value={nameValue}
									onChange={setNameValue}
								/>
								<InputWithLabel
									label='Last name'
									type='text'
									name='lastName'
									placeholder='Donas'
									value={surnameValue}
									onChange={setSurnameValue}
								/>
							</div>
							<div ref={emailRef}>
								<InputWithLabel
									label='Email'
									type='text'
									name='email'
									placeholder='John-donas@gmail.com'
									value={emailValue}
									onChange={setEmailValue}
								/>
							</div>
							<div ref={phoneRef}>
								<InputWithLabel
									label='Phone'
									type='number'
									name='phone'
									placeholder='123 456 789'
									value={numberValue}
									onChange={setNumberValue}
								/>
							</div>
							<div ref={messageRef}>
								<InputWithLabel
									label='Message'
									type='text'
									name='message'
									placeholder='Type message...'
									value={messageValue}
									onChange={setMessageValue}
								/>
							</div>

							<div ref={buttonRef} className='w-full flex justify-end items-center'>
								<Button>Send</Button>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}

export default ContactPage
