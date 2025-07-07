import LogoIcon from '@assets/logo.svg?react'
import type React from 'react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageToggle } from '../common/LanguageToggle'
import { ThemeToggle } from './ThemeToggle'

const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId)
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	}
}

export function Navbar() {
	const [activeSection, setActiveSection] = useState<string>('')
	const { t } = useTranslation()

	const MENU: {
		title: string
		icon: React.ReactNode
		sectionId: string
	}[] = [
		{
			title: t('nav.whoAmI'),
			sectionId: '1',
			icon: (
				<svg className='w-full h-full fill-current' viewBox='0 0 24 24'>
					<path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
				</svg>
			)
		},
		{
			title: t('nav.about'),
			sectionId: '2',
			icon: (
				<svg className='w-full h-full fill-current' viewBox='0 0 24 24'>
					<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
				</svg>
			)
		},
		{
			title: t('nav.projects'),
			sectionId: '3',
			icon: (
				<svg className='w-full h-full fill-current' viewBox='0 0 24 24'>
					<path d='M4 5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H4zm0 2h16v10H4V7zm2 12h12v2H6v-2z' />
				</svg>
			)
		},
		{
			title: t('nav.contact'),
			sectionId: '4',
			icon: (
				<svg className='w-full h-full fill-current' viewBox='0 0 24 24'>
					<path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
				</svg>
			)
		}
	]

	useEffect(() => {
		const handleScroll = () => {
			const sections = MENU.map(item => item.sectionId)
			const scrollPosition = window.scrollY + 200

			for (const sectionId of sections) {
				const element = document.getElementById(sectionId)
				if (element) {
					const rect = element.getBoundingClientRect()
					const elementTop = rect.top + window.scrollY
					const elementBottom = elementTop + rect.height

					if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
						setActiveSection(sectionId)
						break
					}
				}
			}
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll() // Check initial position

		return () => window.removeEventListener('scroll', handleScroll)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='fixed top-0 left-0 right-0 z-50 flex flex-row lg:static lg:flex-col gap-4 items-center justify-center lg:justify-start w-full lg:w-auto backdrop-blur-xl bg-transparent lg:dark:bg-transparent lg:backdrop-blur-none py-2 lg:py-0 border-b border-gray-200/60 dark:border-gray-700/60 lg:border-none shadow-lg lg:shadow-none'>
			<LogoIcon
				className='w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] dark:opacity-55 hidden sm:block transition-all duration-300 hover:scale-110 hover:drop-shadow-lg cursor-pointer'
				onClick={() => scrollToSection('1')}
			/>

			<nav className='bg-gradient-to-r from-[#D1C4E9]/90 to-[#E1BEE7]/90 dark:from-[#3f3668]/90 dark:to-[#4a3d6e]/90 lg:from-[#D1C4E9] lg:to-[#E1BEE7] lg:dark:from-[#3f3668] lg:dark:to-[#4a3d6e] rounded-xl lg:rounded-2xl px-3 py-2 lg:px-[26px] lg:py-[30px] w-full max-w-md mx-auto lg:max-w-none lg:w-auto shadow-md hover:shadow-lg lg:shadow-lg lg:hover:shadow-xl transition-all duration-300 border border-white/30 dark:border-gray-600/40 lg:border-white/20 lg:dark:border-gray-600/30 backdrop-blur-xl lg:backdrop-blur-none'>
				<ul className='flex flex-row lg:flex-col items-center gap-4 lg:gap-10 justify-center lg:justify-start'>
					{MENU.map(item => {
						const isActive = activeSection === item.sectionId
						return (
							<li
								key={item.title}
								className='flex items-center cursor-pointer group relative hover:scale-110 transition-all duration-300'
								onClick={() => scrollToSection(item.sectionId)}
							>
								<div
									className={`p-1.5 lg:p-2 rounded-lg lg:rounded-xl transition-all duration-300 ${
										isActive
											? 'bg-white/40 dark:bg-gray-700/60 shadow-lg scale-110 lg:bg-white/30 lg:dark:bg-gray-700/50 lg:shadow-md'
											: 'hover:bg-white/25 dark:hover:bg-gray-700/40 lg:hover:bg-white/20 lg:dark:hover:bg-gray-700/30'
									}`}
								>
									<span
										className={`transition-all duration-300 block ${
											isActive
												? 'text-[#9C27B0] dark:text-[#BB86FC] drop-shadow-lg scale-110'
												: 'text-gray-700 dark:text-gray-300 group-hover:text-[#9C27B0] dark:group-hover:text-[#BB86FC]'
										}`}
									>
										<div className='w-[24px] h-[24px] lg:w-[28px] lg:h-[29px] flex items-center justify-center'>
											{item.icon}
										</div>
									</span>
								</div>
								{/* Active indicator */}
								{isActive && (
									<div className='absolute -right-0.5 -top-0.5 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-[#9C27B0] to-[#651FFF] rounded-full animate-pulse shadow-lg border-2 border-white dark:border-gray-800 lg:border-white lg:dark:border-gray-800'>
										<div className='absolute inset-0 bg-gradient-to-r from-[#9C27B0] to-[#651FFF] rounded-full animate-ping opacity-75'></div>
										<div className='absolute inset-0.5 lg:inset-1 bg-white dark:bg-gray-800 rounded-full'></div>
									</div>
								)}
								{/* Tooltip appears to the right on hover - only on desktop */}
								<span className='hidden lg:block absolute left-full top-1/2 -translate-y-1/2 ml-4 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-medium whitespace-nowrap px-4 py-2 rounded-xl shadow-xl border border-gray-600/50 backdrop-blur-sm z-50'>
									{item.title}
									{/* Arrow pointing to the icon */}
									<span className='absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-gray-900'></span>
									{/* Gradient border effect */}
									<div className='absolute inset-0 rounded-xl bg-gradient-to-r from-[#9C27B0]/20 to-[#651FFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
								</span>
							</li>
						)
					})}

					<li>
						<LanguageToggle />
					</li>

					<li>
						<ThemeToggle />
					</li>
				</ul>
			</nav>
		</div>
	)
}
