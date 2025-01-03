import TitleText from '@/components/ui/TitleText/TitleText'
import Button from '@/components/ui/Button/Button'
const HeaderContent = ({ title }: { title: string }) => {
	return (
		<div>
			<TitleText>{title}</TitleText>
			<p className='text-darkText mb-4'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sed ullam? Ad unde similique architecto
				molestias qui aliquid quisquam totam numquam pariatur sint distinctio dolor, labore ipsa dolores deleniti at!
			</p>
			<Button>Contact</Button>
		</div>
	)
}

export default HeaderContent
