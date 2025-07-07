import { useTranslation } from 'react-i18next'

export function WhoAmI() {
	const { t } = useTranslation()

	return (
		<div className='bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm'>
			<h3 className='text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white'>
				{t('about.whoAmI.title')}
			</h3>
			<p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
				{t('about.whoAmI.description')}
			</p>
		</div>
	)
}
