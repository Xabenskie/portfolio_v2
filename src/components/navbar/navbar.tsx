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
				<svg className='w-[28px] h-[29px] fill-current' viewBox='0 0 24 24'>
					<path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
				</svg>
			)
		},
		{
			title: t('nav.about'),
			sectionId: '2',
			icon: (
				<svg className='w-[28px] h-[29px] fill-current' viewBox='0 0 24 24'>
					<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
				</svg>
			)
		},
		{
			title: t('nav.projects'),
			sectionId: '3',
			icon: (
				<svg className='w-[28px] h-[29px] fill-current' viewBox='0 0 24 24'>
					<path d='M4 5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H4zm0 2h16v10H4V7zm2 12h12v2H6v-2z' />
				</svg>
			)
		},
		{
			title: t('nav.contact'),
			sectionId: '4',
			icon: (
				<svg className='w-[28px] h-[29px] fill-current' viewBox='0 0 24 24'>
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
		<div className='flex flex-row lg:flex-col gap-4 items-center justify-center lg:justify-start lg:sticky lg:top-3 lg:left-0 w-full lg:w-auto'>
			<LogoIcon className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] dark:opacity-55' />
			<nav className='bg-[#D1C4E9] dark:bg-[#3f3668] rounded-2xl px-4 py-4 lg:px-[26px] lg:py-[30px] w-full lg:w-auto'>
				<ul className='flex flex-row lg:flex-col items-center gap-6 lg:gap-10 justify-center lg:justify-start'>
					{MENU.map(item => {
						const isActive = activeSection === item.sectionId
						return (
							<li
								key={item.title}
								className='flex items-center cursor-pointer group relative'
								onClick={() => scrollToSection(item.sectionId)}
							>
								<span
									className={`transition-all duration-200 ${
										isActive
											? 'text-[#9C27B0] dark:text-[#BB86FC] drop-shadow-lg'
											: 'text-gray-700 dark:text-gray-300'
									}`}
								>
									{item.icon}
								</span>
								{/* Active indicator */}
								{isActive && (
									<div className='absolute -right-2 -top-2 w-3 h-3 bg-[#9C27B0] dark:bg-[#BB86FC] rounded-full animate-pulse shadow-lg'>
										<div className='absolute inset-0 bg-[#9C27B0] dark:bg-[#BB86FC] rounded-full animate-ping opacity-75'></div>
									</div>
								)}
								{/* Tooltip appears to the right on hover - only on desktop */}
								<span className='hidden lg:block absolute left-full top-1/2 -translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out bg-black/90 text-white text-xs font-medium whitespace-nowrap px-3 py-2 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm z-50'>
									{item.title}
									{/* Arrow pointing to the icon */}
									<span className='absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-black/90'></span>
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
