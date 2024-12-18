import Image from 'next/image'
import Wrapper from '@/components/Wrapper/Wrapper'
const SingleTeamCard = ({
	name,
	bottomText,
	src,
	center,
}: {
	name: string
	bottomText: string
	src: string
	center?: boolean
}) => {
	return (
		<div className={`${center ? 'mt-8' : ''} flex flex-col justify-center items-center`}>
			<div className='relative p-2 h-80 w-56  drop-shadow-md  '>
				<Image className='rounded-md' src={src} fill alt={`porter of ${name}`} />
			</div>
			<p className='text-secondary font-semibold mt-4'>{name}</p>
			<p className='text-sm text-darkText'>{bottomText}</p>
		</div>
	)
}
const TeamSection = () => {
	return (
		<div className='w-full relative overflow-hidden mb-6 mt-6'>
			<Wrapper>
				<div className='flex flex-col justify-center items-center p-4'>
					<h3 className='text-3xl text-secondary font-semibold'>
						We&apos;ve 36+ Active & Dedicated Members for Helping the Customers
					</h3>
					<p className='text-darkText mb-8 text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis accusantium asperiores quidem amet
						ducimus sunt, nulla minus neque error?
					</p>
					<div className='w-full flex flex-col md:flex-row justify-center items-center gap-8'>
						<SingleTeamCard src='/teamPortret1.jpg' name='Charles S. Brown' bottomText='Lead Developer' />
						<SingleTeamCard center src='/teamPortret2.jpg' name='Md. Abu Taleb' bottomText='UI-UX Design' />
						<SingleTeamCard src='/teamPortret3.jpg' name='Jannat Humayra' bottomText='Lead Marketing' />
					</div>
				</div>
			</Wrapper>
		</div>
	)
}

export default TeamSection
