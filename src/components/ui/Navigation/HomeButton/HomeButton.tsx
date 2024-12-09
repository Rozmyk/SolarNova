import Image from 'next/image'
import Link from 'next/link'
const HomeButton = () => {
	return (
		<Link href={'/'}>
			<Image width={125} height={30} alt='solarnova logo' src='/logoBlack.svg' />
		</Link>
	)
}

export default HomeButton
