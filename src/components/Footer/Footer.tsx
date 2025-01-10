import Wrapper from '../Wrapper/Wrapper'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import Newsletter from './Newsletter/Newsletter'

const SocialIcon = ({
	Icon,
	href,
	label,
}: {
	Icon: React.ComponentType<{ size?: number; className?: string }>
	href: string
	label: string
}) => {
	return (
		<Link href={href} aria-label={label} className='p-2 bg-[#132319] rounded-full flex justify-center items-center'>
			<Icon size={18} className='text-white' />
		</Link>
	)
}

const SectionTitle = ({ children }: { children: string }) => {
	return <h5 className='text-lg text-white mb-4'>{children}</h5>
}

const Footer = () => {
	return (
		<footer className='bg-darkGreen'>
			<Wrapper className='mb-0'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start w-full gap-8 text-[#c6cbc9] p-8'>
					<div className='flex flex-col items-center md:items-start mb-4'>
						<Image width={120} height={100} alt='solarnova logo' src='/svg/logoWhite.svg' className='mb-4' />
						<p className='text-sm mb-8 text-center md:text-start'>
							We strive to be your trusted partner in the transition to a greener tomorrow
						</p>
						<div className='flex justify-center items-center gap-6'>
							<SocialIcon Icon={FaFacebookF} href='https://www.facebook.com' label='Facebook' />
							<SocialIcon Icon={FaInstagram} href='https://www.instagram.com' label='Instagram' />
							<SocialIcon Icon={FaYoutube} href='https://www.youtube.com' label='YouTube' />
						</div>
					</div>
					<div className='flex flex-col  items-center md:items-start mb-4 gap-4 text-sm'>
						<SectionTitle>Company</SectionTitle>
						<Link href='/'>About</Link>
						<Link href='/'>Features</Link>
						<Link href='/'>Pricing</Link>
						<Link href='/'>Contact</Link>
					</div>
					<div className='flex flex-col items-center md:items-start mb-4 gap-4 text-sm'>
						<SectionTitle>Important</SectionTitle>
						<Link href='/'>Service</Link>
						<Link href='/'>Blog</Link>
						<Link href='/'>License</Link>
						<Link href='/'>Changelog</Link>
					</div>
					<div className='flex flex-col items-center md:items-start mb-4 gap-4 text-sm'>
						<SectionTitle>Newsletter</SectionTitle>
						<Newsletter />
					</div>
				</div>
			</Wrapper>
		</footer>
	)
}

export default Footer
