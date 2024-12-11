import Wrapper from '../Wrapper/Wrapper'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaYoutube, FaTelegramPlane } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

const SocialIcon = ({ Icon }: { Icon: React.ComponentType<{ size?: number; className?: string }> }) => {
	return (
		<div className='p-2 bg-[#132319] rounded-full flex justify-center items-center'>
			<Icon size={18} className='text-white' />
		</div>
	)
}
const SectionTitle = ({ children }: { children: string }) => {
	return <h5 className='text-lg text-white mb-4'>{children}</h5>
}
const Footer = () => {
	return (
		<footer className='bg-[#08190f]'>
			<Wrapper>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start w-full gap-8 text-[#c6cbc9] p-4'>
					<div className='flex flex-col items-start mb-4'>
						<Image width={120} height={100} alt='solarnova logo' src='/logoWhite.svg' className='mb-4' />
						<p className='text-sm mb-8'>We strive to be your trusted partner in the transition to a greener tomorrow</p>
						<div className='flex justify-center items-center gap-6'>
							<SocialIcon Icon={FaFacebookF} />
							<SocialIcon Icon={FaInstagram} />
							<SocialIcon Icon={FaYoutube} />
						</div>
					</div>
					<div className='flex flex-col items-start mb-4 gap-4 text-sm'>
						<SectionTitle>Company</SectionTitle>
						<Link href='/'>About</Link>
						<Link href='/'>Features</Link>
						<Link href='/'>Pricing</Link>
						<Link href='/'>Contact</Link>
					</div>
					<div className='flex flex-col items-start mb-4 gap-4 text-sm'>
						<SectionTitle>Important</SectionTitle>
						<Link href='/'>Service</Link>
						<Link href='/'>Blog</Link>
						<Link href='/'>License</Link>
						<Link href='/'>Changelog</Link>
					</div>
					<div className='flex flex-col items-start mb-4 text-sm'>
						<SectionTitle>Newsletter</SectionTitle>
						<div className='flex justify-between items-center gap-2 mb-8 '>
							<div className='flex justify-center items-center border border-#c6cbc9 border-solid p-2 gap-2 rounded-lg'>
								<MdMail />
								<input className='bg-transparent text-sm' placeholder='Enter email address '></input>
							</div>
							<button className='rounded-lg bg-primary p-2 text-white'>
								<FaTelegramPlane />
							</button>
						</div>
						<p className='text-sm'>We are committed to not share your email or privacy with anyone</p>
					</div>
				</div>

				<div className='flex justify-between items-center mt-40 text-[#c6cbc9] '>
					<p>Copyright all rights reserved</p>
					<div className='flex gap-2 justify-center items-center '>
						<Link href={'/privacy-policy'} className='hover:text-white'>
							Privacy policy
						</Link>
						<p>|</p>
						<Link href={'/terms'} className='hover:text-white'>
							Terms & conditions
						</Link>
					</div>
				</div>
			</Wrapper>
		</footer>
	)
}

export default Footer
