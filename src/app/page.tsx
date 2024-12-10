import AboutUs from '@/components/AboutUs/AboutUs'
import Header from '@/components/Header/Header'
import Solutions from '@/components/Solutions/Solutions'
export default function Home() {
	return (
		<>
			<Header />

			<AboutUs />
			<Solutions />
			<div className='h-screen '></div>
		</>
	)
}
