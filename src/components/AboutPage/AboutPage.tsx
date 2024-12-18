import HeroSection from './HeroSection/HeroSection'
import StatsSection from './StatsSection/StatsSection'
import TeamSection from './TeamSection/TeamSection'

const AboutPage = () => {
	return (
		<>
			<div className='relative overflow-hidden mt-10'>
				<HeroSection />
				<StatsSection />
				<TeamSection />
			</div>
		</>
	)
}

export default AboutPage
