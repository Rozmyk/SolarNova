import Wrapper from '@/components/Wrapper/Wrapper'
import TitleText from '@/components/ui/TitleText/TitleText'
import Footer from '@/components/Footer/Footer'
const ContactPage = () => {
	return (
		<Wrapper>
			<div className='flex md:flex-row flex-col justify-between items-center gap-4 mb-2 p-4'>
				<div className='w-full md:w-1/2'>
					<TitleText>Contact us</TitleText>
				</div>
			</div>
			<div className='bg-yellow-400 w-full h-96 flex justify-between items-center'>
				<div className='w-full md:w-1/2'>dsa</div>
				<div className='w-full md:w-1/2'>google map</div>
			</div>
		</Wrapper>
	)
}

export default ContactPage
