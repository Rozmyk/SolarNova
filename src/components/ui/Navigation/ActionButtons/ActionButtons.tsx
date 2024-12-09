import Button from '../../Button/Button'
import { useRouter } from 'next/navigation'
const ActionButtons = () => {
	const router = useRouter()
	return (
		<div>
			<Button
				onClick={() => {
					router.push('/contact')
				}}
				reverse>
				Contact
			</Button>
		</div>
	)
}

export default ActionButtons
