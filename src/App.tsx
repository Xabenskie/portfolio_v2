import { NavbarWrapper } from '@/components/navbar/navbar-wrapper'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import { Header } from './components/header/header'
import Projects from './components/projects/projects'

export default function App() {
	return (
		<NavbarWrapper>
			<Header />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</NavbarWrapper>
	)
}
