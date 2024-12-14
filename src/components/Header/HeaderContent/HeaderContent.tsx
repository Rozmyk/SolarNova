import Button from '@/components/ui/Button/Button'

const HeaderContent = () => {
	return (
		<div className=' w-full  md:w-2/3 p-4'>
			<h1 className=' text-4xl md:text-7xl xl:text-8xl  mb-4 md:mb-8 font-semibold  w-full  text-secondary'>
				More Greener <br />
				More Renewable <br />
				Energy
			</h1>
			<p className='md:mb-8 mb-4  w-full md:w-1/2  font-regular text-darkText' style={{ fontWeight: 500 }}>
				Embrace renewable energy for a sustainable tomorrow. There are many variations of passages of Lorem Ipsum
				available.
			</p>
			<Button>Get a Free Quote</Button>
		</div>
	)
}

export default HeaderContent
