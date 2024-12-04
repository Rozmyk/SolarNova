import NumberedTitle from '../ui/numberedTitle'
const Header = () => {
	return (
		<div
			className='w-screen h-screen bg-red-500 bg-cover bg-center relative'
			style={{
				backgroundImage: 'url("/HeaderImage.png")',
			}}>
			<NumberedTitle title='O nas' number='01' />
		</div>
	)
}

export default Header
