import { Header } from '../components/header'
import { Hero } from '../components/hero-section'
import { Benefits } from '../components/benefits-section'
import { Sustentability } from '../components/sustentability-section'
import { Footer } from '../components/footer'

function Home() {	

	return (
		<>
			<Header />
			<Hero />
			<Benefits />
			<Sustentability />
			<Footer />
		</>
	)
}

export default Home;
