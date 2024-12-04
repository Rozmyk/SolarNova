const NumberedTitle = ({ title, number }: { title: string; number: string }) => {
	return (
		<div className='relative'>
			<h4 className='text-black text-3xl z-10 relative font-bold  '>{title}</h4>
			<p className='text-primary-foreground font-bold text-8xl absolute top-[-60px] left-[-50px] z-0 '>{number}</p>
		</div>
	)
}

export default NumberedTitle
