import Button from '@/components/ui/Button/Button'

const HeaderContent = () => {
	return (
		<div className='p-4 w-full  md:w-2/3'>
			<h1 className=' text-4xl md:text-8xl mb-8 font-semibold  w-full  text-secondary'>
				More Greener <br />
				More Renewable <br />
				Energy
			</h1>
			<p className='mb-8  w-full md:w-1/2 ' style={{ color: '#6f6e6e', fontWeight: 500 }}>
				Embrace renewable energy for a sustainable tomorrow. There are many variations of passages of Lorem Ipsum
				available.
			</p>
			<Button>Get a Free Quote</Button>
		</div>
	)
}

export default HeaderContent
