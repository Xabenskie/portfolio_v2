import { NavbarWrapper } from '@/components/navbar/navbar-wrapper'
import { Toaster } from 'react-hot-toast'
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
			<Toaster
				position='top-right'
				toastOptions={{
					duration: 4000,
					style: {
						background: 'var(--color-surface)',
						color: 'var(--color-text)',
						border: '1px solid var(--color-border)'
					}
				}}
			/>
		</NavbarWrapper>
	)
}
