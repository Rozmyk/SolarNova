import Button from '../ui/Button/Button'
import { useRouter } from 'next/navigation'
const ErrorPage = () => {
	const router = useRouter()
	const handleRedirect = () => {
		router.push('/')
	}
	return (
		<section>
			<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
				<div className='mx-auto max-w-screen-sm text-center'>
					<h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary'>404</h1>
					<p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white'>
						Something's missing.
					</p>
					<p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
						Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.{' '}
					</p>
					<Button onClick={handleRedirect}>Homepage</Button>
				</div>
			</div>
		</section>
	)
}

export default ErrorPage
