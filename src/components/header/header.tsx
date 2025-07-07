import HeaderIcon from '@/assets/header-icon.svg'
import { contactInfoData } from '@/utils'
import { useTranslation } from 'react-i18next'

export function Header() {
	const { t } = useTranslation()

	return (
		<div
			className='flex items-center justify-center w-full h-[90dvh] rounded-3xl object-cover bg-no-repeat bg-center bg-cover'
			style={{
				backgroundImage: `url(${HeaderIcon})`
			}}
			id='1'
		>
			<div className='bg-gradient-to-br from-[#9C27B0]/70 to-[#651FFF]/70 rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-sm text-white flex flex-col gap-3 sm:gap-4 md:gap-5 max-w-4xl mx-4 sm:mx-6 md:mx-8'>
				<div className='text-center sm:text-left'>
					<h1 className='flex flex-col gap-2 sm:gap-3 md:gap-4'>
						<span className='text-2xl sm:text-3xl md:text-4xl font-bold'>
							{t('header.greeting')}
						</span>
						<span className='text-3xl sm:text-4xl md:text-5xl font-black leading-tight'>
							{t('header.name')}
						</span>
						<span className='text-lg sm:text-xl md:text-2xl opacity-90'>
							{t('header.welcome')}
						</span>
					</h1>

					{/* Contact Icons */}
					<div className='flex items-center justify-center sm:justify-start gap-4 mt-6 sm:mt-8'>
						<a
							href={contactInfoData.github}
							target='_blank'
							rel='noopener noreferrer'
							className='w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110'
							aria-label='GitHub'
						>
							<svg
								className='w-5 h-5 sm:w-6 sm:h-6'
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
							</svg>
						</a>
						<a
							href={`https://t.me/${contactInfoData.telegram}`}
							target='_blank'
							rel='noopener noreferrer'
							className='w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110'
							aria-label='Telegram'
						>
							<svg
								className='w-5 h-5 sm:w-6 sm:h-6'
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
							</svg>
						</a>
						<a
							href={`mailto:${contactInfoData.email}`}
							className='w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110'
							aria-label='Email'
						>
							<svg
								className='w-5 h-5 sm:w-6 sm:h-6'
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.75L12 10.58l9.614-6.759h.75c.904 0 1.636.732 1.636 1.636z' />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
