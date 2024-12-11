import AboutUs from '@/components/AboutUs/AboutUs'
import Header from '@/components/Header/Header'
import Solutions from '@/components/Solutions/Solutions'
import Projects from '@/components/Projects/Projects'
import PerformanceStats from '@/components/PerformanceStats/PerformanceStats'
import Footer from '@/components/Footer/Footer'
export default function Home() {
	return (
		<>
			<Header />

			<AboutUs />
			<Solutions />
			<Projects />
			<PerformanceStats />
			<Footer />
		</>
	)
}
