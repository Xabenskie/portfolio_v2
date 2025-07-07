import { categories, getProjectsData } from '@/utils'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Projects() {
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set())
	const [isVisible, setIsVisible] = useState(false)
	const projectsRef = useRef<HTMLDivElement>(null)
	const { t } = useTranslation()

	// Get projects with translations
	const projects = getProjectsData(t)

	const filteredProjects =
		selectedCategory === 'All'
			? projects
			: projects.filter(project => project.category === selectedCategory)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const projectId = parseInt(
							entry.target.getAttribute('data-project-id') || '0'
						)
						setVisibleProjects(prev => new Set([...prev, projectId]))
					}
				})
			},
			{ threshold: 0.1 }
		)

		const projectElements = document.querySelectorAll('[data-project-id]')
		projectElements.forEach(el => observer.observe(el))

		return () => observer.disconnect()
	}, [filteredProjects])

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setIsVisible(true)
					}
				})
			},
			{ threshold: 0.2 }
		)

		if (projectsRef.current) {
			observer.observe(projectsRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section id='3' className='min-h-screen pt-16 pb-8'>
			<div className='bg-gradient-to-br from-[#651FFF]/10 to-[#9C27B0]/10 rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-sm'>
				<div ref={projectsRef} className='text-center mb-8 sm:mb-12'>
					<h2
						className={`text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white transition-all duration-1000 ${
							isVisible
								? 'opacity-100 translate-y-0'
								: 'opacity-0 translate-y-8'
						}`}
					>
						{t('projects.title')}
					</h2>
					<p
						className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
							isVisible
								? 'opacity-100 translate-y-0'
								: 'opacity-0 translate-y-8'
						}`}
					>
						{t('projects.description')}
					</p>
				</div>

				{/* Category Filter */}
				<div
					className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 transition-all duration-1000 delay-700 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
					}`}
				>
					{' '}
					{categories.map((category, index) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base transform hover:scale-105 cursor-pointer ${
								selectedCategory === category
									? 'bg-gradient-to-r from-[#9C27B0] to-[#651FFF] text-white shadow-lg scale-105'
									: 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-800/70'
							}`}
							style={{
								transitionDelay: `${index * 100}ms`
							}}
						>
							{category === 'All'
								? t('projects.categories.all')
								: category === 'Web App'
								? t('projects.categories.webApp')
								: category === 'Dashboard'
								? t('projects.categories.dashboard')
								: category === 'Portfolio'
								? t('projects.categories.portfolio')
								: category}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8'>
					{filteredProjects.map((project, index) => (
						<div
							key={project.id}
							data-project-id={project.id}
							className={`group bg-white/50 dark:bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 ${
								visibleProjects.has(project.id)
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-8'
							}`}
							style={{
								transitionDelay: `${index * 150}ms`
							}}
						>
							{/* Project Image */}
							<div className='relative h-48 sm:h-56 overflow-hidden'>
								<img
									src={project.image}
									alt={project.title}
									className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

								{/* Overlay Buttons */}
								<div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-6 group-hover:translate-y-0'>
									{project.openSource && (
										<a
											href={project.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='bg-white/95 hover:bg-white text-gray-800 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg transform hover:-translate-y-1'
										>
											<span className='flex items-center gap-2'>
												<svg
													className='w-4 h-4'
													fill='currentColor'
													viewBox='0 0 24 24'
												>
													<path d='M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
												</svg>
												{t('projects.buttons.code')}
											</span>
										</a>
									)}
									{project.deployed && (
										<a
											href={project.liveUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='bg-gradient-to-r from-[#9C27B0] to-[#651FFF] text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg transform hover:-translate-y-1'
										>
											<span className='flex items-center gap-2'>
												<svg
													className='w-4 h-4'
													fill='currentColor'
													viewBox='0 0 24 24'
												>
													<path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
												</svg>
												{t('projects.buttons.demo')}
											</span>
										</a>
									)}
								</div>
							</div>

							{/* Project Content */}
							<div className='p-4 sm:p-6'>
								<div className='flex items-center justify-between mb-3'>
									<h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-white group-hover:text-[#9C27B0] dark:group-hover:text-[#BB86FC] transition-colors duration-300'>
										{project.title}
									</h3>
									<div className='flex items-center gap-2'>
										<span className='text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-[#9C27B0]/20 to-[#651FFF]/20 text-[#9C27B0] dark:text-[#BB86FC] border border-[#9C27B0]/30'>
											{project.category}
										</span>
									</div>
								</div>

								{/* Open Source Badge */}
								<div className='mb-3'>
									{project.openSource ? (
										<span className='inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700'>
											<svg
												className='w-3 h-3'
												fill='currentColor'
												viewBox='0 0 20 20'
											>
												<path
													fillRule='evenodd'
													d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
													clipRule='evenodd'
												/>
											</svg>
											{t('projects.badges.openSource')}
										</span>
									) : (
										<span className='inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-700'>
											<svg
												className='w-3 h-3'
												fill='currentColor'
												viewBox='0 0 20 20'
											>
												<path
													fillRule='evenodd'
													d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
													clipRule='evenodd'
												/>
											</svg>
											{t('projects.badges.commercial')}
										</span>
									)}
								</div>

								<p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed'>
									{project.description}
								</p>

								{/* Technologies */}
								<div className='flex flex-wrap gap-2'>
									{project.technologies.map((tech, techIndex) => (
										<span
											key={tech}
											className='text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-[#9C27B0]/10 hover:text-[#9C27B0] dark:hover:text-[#BB86FC] transition-all duration-300 cursor-default'
											style={{
												transitionDelay: `${techIndex * 50}ms`
											}}
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				{filteredProjects.length === 0 && (
					<div className='text-center py-12 animate-bounce-in'>
						<div className='inline-block p-8 rounded-2xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm'>
							<svg
								className='w-16 h-16 mx-auto mb-4 text-gray-400'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
							<p className='text-lg text-gray-500 dark:text-gray-400 font-medium'>
								{t('projects.noProjects')}
							</p>
							<p className='text-sm text-gray-400 dark:text-gray-500 mt-2'>
								{t('projects.tryDifferent')}
							</p>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}
