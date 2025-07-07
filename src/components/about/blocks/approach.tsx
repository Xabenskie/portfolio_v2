import { useTranslation } from 'react-i18next'

export default function ApproachBlock() {
	const { t } = useTranslation()

	return (
		<div className='bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm'>
			<h3 className='text-xl font-semibold mb-4 text-gray-800 dark:text-white'>
				{t('about.myApproach.title')}
			</h3>
			<p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
				{t('about.myApproach.description')}
			</p>
		</div>
	)
}
