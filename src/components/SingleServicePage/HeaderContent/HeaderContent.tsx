import Button from '@/components/ui/Button/Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

const HeaderContent = ({ title }: { title: string }) => {
	const router = useRouter()
	const titleRef = useRef(null)
	const descriptionRef = useRef(null)
	const buttonRef = useRef(null)
	const containerRef = useRef(null)
	const handleRedirect = () => {
		router.push('/contact')
	}
	useGSAP(() => {
		gsap.registerPlugin()

		const elements = [titleRef.current, descriptionRef.current, buttonRef.current]
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
		<div ref={containerRef}>
			<h1 ref={titleRef} className='text-secondary font-semibold text-5xl mb-4'>
				{title}
			</h1>
			<p ref={descriptionRef} className='text-darkText mb-4'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sed ullam? Ad unde similique architecto
				molestias qui aliquid quisquam totam numquam pariatur sint distinctio dolor, labore ipsa dolores deleniti at!
			</p>
			<div ref={buttonRef}>
				<Button onClick={handleRedirect}>Contact</Button>
			</div>
		</div>
	)
}

export default HeaderContent
