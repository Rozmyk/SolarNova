'use client'
import React, { useRef } from 'react'
import Button from '@/components/ui/Button/Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const HeaderContent = () => {
	const container = useRef(null)
	const title = useRef(null)
	const paragraph = useRef(null)
	const button = useRef(null)

	useGSAP(() => {
		gsap.registerPlugin()

		const tl = gsap.timeline()
		tl.from(title.current, { opacity: 0, y: 50, duration: 0.5 })
			.from(paragraph.current, { opacity: 0, y: 50, duration: 0.5 }, '-=0.3')
			.from(button.current, { opacity: 0, y: 50, duration: 0.5 }, '-=0.3')
	}, [])

	return (
		<div ref={container} className='w-full md:w-2/3 p-4'>
			<h1 ref={title} className='text-4xl md:text-7xl xl:text-8xl mb-4 md:mb-8 font-semibold w-full text-secondary'>
				More Greener <br />
				More Renewable <br />
				Energy
			</h1>
			<p
				ref={paragraph}
				className='md:mb-8 mb-4 w-full md:w-1/2 font-regular text-darkText'
				style={{ fontWeight: 500 }}>
				Embrace renewable energy for a sustainable tomorrow. There are many variations of passages of Lorem Ipsum
				available.
			</p>
			<div ref={button}>
				<Button>Get a Free Quote</Button>
			</div>
		</div>
	)
}

export default HeaderContent
