'use client'
import Wrapper from '../Wrapper/Wrapper'
import { useState } from 'react'
import TitleText from '../ui/TitleText/TitleText'
import Button from '../ui/Button/Button'
import { useRouter } from 'next/navigation'

const cardsData = [
	{ text: 'Solar energy', src: '/service/solarEnergy.webp', single: false, href: 'solar-energy' },
	{ text: 'Wind energy', src: '/service/windEnergy.webp', single: false, href: 'wind-energy' },
	{ text: 'Hydropower', src: '/service/hydroPower.webp', single: true, href: 'hydropower' },
	{ text: 'Free energy', src: '/backgroundImage1.jpg', single: true, href: 'free-energy' },
	{ text: 'Free energy', src: '/backgroundImage1.jpg', single: false, href: 'free-energy' },
]

const SingleCard = ({ text, single, src, href }: { text: string; single: boolean; src: string; href: string }) => {
	const [hovered, setHovered] = useState(false)
	const router = useRouter()
	const handleClick = (href: string) => {
		router.push(`/service/${href}`)
	}

	return (
		<div
			className={`relative  overflow-hidden p-4 bg-white shadow-md h-60 rounded-xl transition-transform duration-200 ${
				single ? 'col-span-1 sm:col-span-2 md:col-span-1' : 'col-span-1  md:col-span-2'
			}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}>
			<div
				className={`w-full h-full left-0 top-0 absolute transition-transform duration-200 ${
					hovered ? 'scale-110' : 'scale-100'
				}`}
				style={{
					backgroundImage: `url(${src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}></div>
			<div
				className={`w-full bg-[#123520] absolute top-0 left-0 h-full z-10 transition-opacity duration-200 ${
					hovered ? 'opacity-60' : 'opacity-40'
				}`}></div>
			<p
				className={`text-white text-3xl font-semibold absolute pb-2 transition-all duration-200 ${
					hovered ? 'bottom-16' : 'bottom-4'
				} left-4 z-10`}>
				{text}
			</p>
			<div className={`absolute transition-all duration-200 ${hovered ? 'bottom-4' : '-bottom-20'} right-4 z-10`}>
				<Button
					onClick={() => {
						handleClick(href)
					}}>
					More
				</Button>
			</div>
		</div>
	)
}

const ServicePage = () => {
	return (
		<Wrapper>
			<div className='w-full flex flex-col justify-between items-start gap-4 mb-8 p-4'>
				<TitleText>Our Services</TitleText>
				<p className='text-darkText'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloremque itaque sunt ipsam maxime alias
					et vero architecto, repellat porro! Quas nesciunt ipsa voluptates dicta officiis rerum nulla voluptatibus
					nostrum!
				</p>
			</div>
			<div className='grid md:grid-cols-4 gap-4 p-4 mb-20'>
				{cardsData.map((card, index) => (
					<SingleCard key={index} href={card.href} text={card.text} src={card.src} single={card.single} />
				))}
			</div>
		</Wrapper>
	)
}

export default ServicePage
