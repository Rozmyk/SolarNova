import { MdLocalPhone, MdAlternateEmail, MdAccessTime } from 'react-icons/md'
import Image from 'next/image'
const IconWithText = ({
	title,
	text,
	icon: Icon,
}: {
	title: string
	text: string
	icon: React.ComponentType<{ size?: number; className?: string }>
}) => {
	return (
		<div className='flex flex-col justify-center items-start  '>
			<div className='flex justify-center items-center gap-2'>
				<div className='size-6 bg-white text-primary rounded-full flex justify-center items-center'>
					<Icon />
				</div>
				<p className='text-secondary font-semibold'>{title}</p>
			</div>
			<p className='text-[#6f6e6e] text-sm'>{text}</p>
		</div>
	)
}
const ContactImage = () => {
	return (
		<div className='w-full md:w-1/2   flex justify-center items-center  '>
			<div className='relative h-full mb-48 md:mb-0 '>
				<div className='w-48 h-48 backdrop-blur-lg bg-white bg-opacity-90 rounded-md shadow-lg absolute bottom-[-96px] md:bottom-10 right-1/2 md:right-0 transform translate-x-1/2 flex flex-col justify-center items-start gap-2 p-4 '>
					<IconWithText icon={MdAccessTime} title='Hours' text='9.00–22.00' />
					<IconWithText icon={MdLocalPhone} title='Phone' text='123 456 789' />
					<IconWithText icon={MdAlternateEmail} title='Email' text='contact@solarnova.com' />
				</div>

				<Image width={350} height={300} className='rounded-lg' alt='Wind turbine' src='/contact/contactImage.webp' />
			</div>
		</div>
	)
}

export default ContactImage
