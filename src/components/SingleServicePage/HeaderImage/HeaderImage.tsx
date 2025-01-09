import Image from 'next/image'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const HeaderImage = ({ src }: { src: string }) => {
	const imageRef = useRef(null)
	useGSAP(() => {
		gsap.registerPlugin()

		const tl = gsap.timeline()
		tl.from(imageRef.current, { scale: 0.8, duration: 1, ease: 'power2.out' })
	}, [])
	return (
		<div>
			<div ref={imageRef} className=' w-72 h-72   md:w-96 md:h-96 rounded-full relative mt-10 '>
				<div className='absolute z-0 top-1/2 left-1/2  rounded-full bg-transparent  border-dashed border-primary opacity-50 border-4 p-4 translate-y-[-50%] translate-x-[-50%]  '>
					<div className='w-72 h-72   md:w-96 md:h-96'></div>
				</div>
				<Image className='rounded-full z-10' alt='xd' fill src={src} />
			</div>
		</div>
	)
}

export default HeaderImage
