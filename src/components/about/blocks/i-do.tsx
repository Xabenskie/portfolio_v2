import { useTranslation } from 'react-i18next'

export default function IDoBlock() {
	const { t } = useTranslation()

	return (
		<div className='bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm'>
			<h3 className='text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white'>
				{t('about.whatIDo.title')}
			</h3>
			<ul className='space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300'>
				<li className='flex items-center'>
					<span className='w-2 h-2 bg-[#9C27B0] rounded-full mr-3 flex-shrink-0'></span>
					<span>{t('about.whatIDo.webDevelopment')}</span>
				</li>
				<li className='flex items-center'>
					<span className='w-2 h-2 bg-[#651FFF] rounded-full mr-3 flex-shrink-0'></span>
					<span>{t('about.whatIDo.optimization')}</span>
				</li>
			</ul>
		</div>
	)
}
