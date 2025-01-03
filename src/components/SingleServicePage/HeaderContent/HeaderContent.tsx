import Button from '@/components/ui/Button/Button'
const HeaderContent = ({ title }: { title: string }) => {
	return (
		<div>
			<h1 className='text-secondary font-semibold text-5xl mb-4'>{title}</h1>
			<p className='text-darkText mb-4'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sed ullam? Ad unde similique architecto
				molestias qui aliquid quisquam totam numquam pariatur sint distinctio dolor, labore ipsa dolores deleniti at!
			</p>
			<Button>Contact</Button>
		</div>
	)
}

export default HeaderContent
