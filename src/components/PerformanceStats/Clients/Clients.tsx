import Wrapper from '@/components/Wrapper/Wrapper'
import TitleText from '@/components/ui/TitleText/TitleText'
import Button from '@/components/ui/Button/Button'
import Image from 'next/image'
const SingleTestimonials = ({
	src,
	opinion,
	author,
	job,
	reversed,
}: {
	src: string
	opinion: string
	author: string
	job: string
	reversed: boolean
}) => {
	return (
		<div
			className={`bg-[#f6f8f6] rounded-lg p-4 text-secondary text-sm w-64 flex ${
				reversed ? 'flex-col-reverse' : 'flex-col'
			} ${reversed ? 'mt-8' : 'mb-8'}`}>
			<div className={`w-full h-32 relative ${reversed ? 'mt-4' : 'mb-4'} rounded-lg overflow-hidden`}>
				<Image src={src} fill alt='customer avatar' />
			</div>
			<div>
				<p className='mb-4 font-medium'>{opinion}</p>
				<p className='font-semibold'>{author}</p>
				<p>{job}</p>
			</div>
		</div>
	)
}
const Clients = () => {
	return (
		<Wrapper>
			<div className='flex md:flex-row flex-col justify-between items-center gap-4 mb-2 p-4'>
				<div className='w-full md:w-1/2'>
					<TitleText>Gem Words From Our Satisfied Clients</TitleText>
				</div>
				<div className='w-full md:w-1/2 flex justify-end'>
					<Button>All testimonials</Button>
				</div>
			</div>
			<div className='flex gap-10'>
				<SingleTestimonials
					src='/customerAvatar1.jpg'
					reversed={false}
					opinion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam architecto itaque expedita fugit. Consectetur atque culpa architecto.'
					author='Jennifer Kaya'
					job='Brand Promoter'
				/>
				<SingleTestimonials
					src='/customerAvatar1.jpg'
					reversed={true}
					opinion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam architecto itaque expedita fugit. Consectetur atque culpa architecto.'
					author='Jennifer Kaya'
					job='Brand Promoter'
				/>
				<SingleTestimonials
					src='/customerAvatar1.jpg'
					reversed={false}
					opinion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam architecto itaque expedita fugit. Consectetur atque culpa architecto.'
					author='Jennifer Kaya'
					job='Brand Promoter'
				/>
				<SingleTestimonials
					src='/customerAvatar1.jpg'
					reversed={true}
					opinion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam architecto itaque expedita fugit. Consectetur atque culpa architecto.'
					author='Jennifer Kaya'
					job='Brand Promoter'
				/>
			</div>
		</Wrapper>
	)
}

export default Clients
