import { contactInfoData } from '@/utils'
import { useTranslation } from 'react-i18next'

export default function Footer() {
	const { t } = useTranslation()
	const currentYear = new Date().getFullYear()

	const socialLinks = [
		{
			name: 'GitHub',
			href: contactInfoData.github,
			icon: (
				<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
					<path d='M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
				</svg>
			)
		},
		{
			name: 'Telegram',
			href: `https://t.me/${contactInfoData.telegram}`,
			icon: (
				<svg
					className='w-5 h-5 sm:w-6 sm:h-6'
					fill='currentColor'
					viewBox='0 0 24 24'
				>
					<path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
				</svg>
			)
		},
		{
			name: 'Email',
			href: `mailto:${contactInfoData.email}`,
			icon: (
				<svg
					className='w-5 h-5 sm:w-6 sm:h-6'
					fill='currentColor'
					viewBox='0 0 24 24'
				>
					<path d='M20 4H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
				</svg>
			)
		}
	]

	return (
		<footer className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-t border-white/20 dark:border-gray-700/50 mt-8'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				<div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
					{/* Logo and Text */}
					<a
						href={contactInfoData.github}
						className='flex items-center gap-3 text-center lg:text-left hover:scale-105 transition-transform duration-300'
					>
						<img
							src='https://avatars.githubusercontent.com/u/147755909?v=4'
							alt='Xabenskie Logo'
							className='w-10 h-10 rounded-lg'
						/>
						<div>
							<p className='text-gray-800 dark:text-white font-semibold text-lg'>
								Xabenskie
							</p>
							<p className='text-sm text-gray-600 dark:text-gray-300'>
								{t('footer.role')}
							</p>
						</div>
					</a>

					{/* Social Links */}
					<div className='flex items-center gap-3'>
						{socialLinks.map((social, index) => (
							<a
								key={social.name}
								href={social.href}
								target='_blank'
								rel='noopener noreferrer'
								className='p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-[#9C27B0] hover:to-[#651FFF] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg'
								style={{
									transitionDelay: `${index * 100}ms`
								}}
							>
								{social.icon}
								<span className='sr-only'>{social.name}</span>
							</a>
						))}
					</div>

					{/* Copyright */}
					<div className='text-center lg:text-right'>
						<p className='text-sm text-gray-600 dark:text-gray-300 font-medium'>
							© {currentYear} Xabenskie. {t('footer.allRights')}
						</p>
						<p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
							{t('footer.madeWith')}
						</p>
					</div>
				</div>

				{/* Divider */}
				<div className='w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-6'></div>

				{/* Back to top button */}
				<div className='text-center'>
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9C27B0] to-[#651FFF] text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm font-medium'
					>
						<svg
							className='w-4 h-4'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M5 10l7-7m0 0l7 7m-7-7v18'
							/>
						</svg>
						{t('footer.backToTop')}
					</button>
				</div>
			</div>
		</footer>
	)
}
