import TitleText from '@/components/ui/TitleText/TitleText'
import FaqSection from './FaqSection/FaqSection'
import { faqItemProps } from '@/types'

const Faq = ({ items }: { items: faqItemProps[] }) => {
	return (
		<div className='p-4 mb-20 mt-8'>
			<TitleText>FAQ</TitleText>
			<FaqSection items={items} />
		</div>
	)
}

export default Faq
