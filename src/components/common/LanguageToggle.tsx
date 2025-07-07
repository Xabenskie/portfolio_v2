import { useTranslation } from 'react-i18next'

export function LanguageToggle() {
	const { i18n } = useTranslation()

	const toggleLanguage = () => {
		const newLang = i18n.language === 'en' ? 'ru' : 'en'
		i18n.changeLanguage(newLang)
	}

	return (
		<button
			onClick={toggleLanguage}
			className='flex items-center justify-center w-12 h-12 rounded-full bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 border border-white/30 dark:border-gray-600/50'
			title={`Switch to ${i18n.language === 'en' ? 'Russian' : 'English'}`}
		>
			<div className='flex items-center justify-center w-8 h-8 text-sm font-bold text-gray-700 dark:text-gray-300'>
				{i18n.language === 'en' ? (
					<span className='flex items-center gap-1'>
						🇺🇸 <span className='text-xs'>EN</span>
					</span>
				) : (
					<span className='flex items-center gap-1'>
						🇷🇺 <span className='text-xs'>RU</span>
					</span>
				)}
			</div>
		</button>
	)
}
