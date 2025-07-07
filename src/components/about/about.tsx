import { useTranslation } from 'react-i18next'
import ApproachBlock from './blocks/approach'
import IDoBlock from './blocks/i-do'
import { TechnologiesBlock } from './blocks/technologies'
import { WhoAmI } from './blocks/who-am-i'

export default function About() {
	const { t } = useTranslation()

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<section id='2' className='min-h-screen pt-16 pb-8'>
			<div className='bg-gradient-to-br from-[#9C27B0]/10 to-[#651FFF]/10 rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-sm'>
				<h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-white text-center'>
					{t('about.title')}
				</h2>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
					<div className='flex flex-col gap-4 sm:gap-6'>
						<WhoAmI />

						<IDoBlock />
					</div>

					<div className='flex flex-col gap-4 sm:gap-6'>
						<TechnologiesBlock />
						<ApproachBlock />
					</div>
				</div>

				<div className='mt-6 sm:mt-8 text-center'>
					<div className='bg-gradient-to-r from-[#9C27B0] to-[#651FFF] rounded-xl p-4 sm:p-6 text-white'>
						<h3 className='text-lg sm:text-xl font-semibold mb-2'>
							{t('contact.title')}
						</h3>
						<p className='mb-4 opacity-90 text-sm sm:text-base'>
							{t('contact.description')}
						</p>
						<button
							className='bg-white/20 hover:bg-white/30 transition-colors duration-200 px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base cursor-pointer'
							onClick={() => scrollToSection('4')}
						>
							{t('contact.title')}
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
