import { useEffect, useRef, useState } from 'react'

const skills = [
	{ name: 'React', level: 90 },
	{ name: 'TypeScript', level: 85 },
	{ name: 'JavaScript', level: 95 },
	{ name: 'CSS/SCSS', level: 88 },
	{ name: 'Tailwind CSS', level: 92 },
	{ name: 'Next.js', level: 87 },
	{ name: 'Redux', level: 82 },
	{ name: 'Vite', level: 80 }
]

export default function About() {
	const skillsRef = useRef<HTMLDivElement>(null)
	const [animatedValues, setAnimatedValues] = useState<{
		[key: string]: number
	}>({})
	const [hasAnimated, setHasAnimated] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					setHasAnimated(true)
					// Анимация счетчиков
					skills.forEach((skill, index) => {
						setTimeout(() => {
							animateValue(skill.name, 0, skill.level, 1500)
						}, index * 150)
					})
				}
			},
			{ threshold: 0.3 }
		)

		if (skillsRef.current) {
			observer.observe(skillsRef.current)
		}

		return () => observer.disconnect()
	}, [hasAnimated])

	const animateValue = (
		skillName: string,
		start: number,
		end: number,
		duration: number
	) => {
		const startTimestamp = performance.now()

		const step = (timestamp: number) => {
			const elapsed = timestamp - startTimestamp
			const progress = Math.min(elapsed / duration, 1)

			// Easing function для плавности
			const easeOutQuart = 1 - Math.pow(1 - progress, 4)
			const currentValue = Math.floor(start + (end - start) * easeOutQuart)

			setAnimatedValues(prev => ({
				...prev,
				[skillName]: currentValue
			}))

			if (progress < 1) {
				requestAnimationFrame(step)
			}
		}

		requestAnimationFrame(step)
	}

	return (
		<section id='2' className='min-h-screen pt-16 pb-8'>
			<div className='bg-gradient-to-br from-[#9C27B0]/10 to-[#651FFF]/10 rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-sm'>
				<h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-white text-center'>
					About Me
				</h2>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
					<div className='space-y-4 sm:space-y-6'>
						<div className='bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm'>
							<h3 className='text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white'>
								👋 Hello, I'm Xabenskie!
							</h3>
							<p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
								I'm a passionate Frontend Developer with a love for creating
								beautiful, responsive, and user-friendly web applications. My
								journey in web development started with curiosity and has grown
								into a professional passion.
							</p>
						</div>

						<div className='bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm'>
							<h3 className='text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white'>
								🎯 What I Do
							</h3>
							<ul className='space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300'>
								<li className='flex items-center'>
									<span className='w-2 h-2 bg-[#9C27B0] rounded-full mr-3 flex-shrink-0'></span>
									<span>Frontend Development</span>
								</li>
								<li className='flex items-center'>
									<span className='w-2 h-2 bg-[#651FFF] rounded-full mr-3 flex-shrink-0'></span>
									<span>Web Application Development</span>
								</li>
								<li className='flex items-center'>
									<span className='w-2 h-2 bg-[#9C27B0] rounded-full mr-3 flex-shrink-0'></span>
									<span>Responsive Web Design</span>
								</li>
								<li className='flex items-center'>
									<span className='w-2 h-2 bg-[#651FFF] rounded-full mr-3 flex-shrink-0'></span>
									<span>Code Optimization</span>
								</li>
							</ul>
						</div>
					</div>

					{/* Skills & Technologies */}
					<div className='space-y-4 sm:space-y-6'>
						<div
							ref={skillsRef}
							className='bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm'
						>
							<h3 className='text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white'>
								🛠️ Technologies & Tools
							</h3>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
								{skills.map((skill, index) => (
									<div key={skill.name} className='space-y-2'>
										<div className='flex justify-between items-center'>
											<span className='text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300'>
												{skill.name}
											</span>
											<span className='text-xs font-mono transition-all duration-300 inline-block'>
												<span
													className={`${
														animatedValues[skill.name] > 0 &&
														animatedValues[skill.name] < skill.level
															? 'text-[#9C27B0] dark:text-[#BB86FC] scale-110 font-bold number-glow'
															: 'text-gray-500 dark:text-gray-400'
													} transition-all duration-200`}
												>
													{animatedValues[skill.name] || 0}
												</span>
												<span className='text-gray-500 dark:text-gray-400'>
													%
												</span>
											</span>
										</div>
										<div className='w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden'>
											<div
												className='bg-gradient-to-r from-[#9C27B0] to-[#651FFF] h-2 rounded-full transition-all duration-1000 ease-out'
												style={{
													width: hasAnimated ? `${skill.level}%` : '0%',
													transitionDelay: hasAnimated
														? `${index * 150}ms`
														: '0ms'
												}}
											></div>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className='bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm'>
							<h3 className='text-xl font-semibold mb-4 text-gray-800 dark:text-white'>
								🎯 My Approach
							</h3>
							<div className='space-y-4'>
								<div className='flex items-start'>
									<div className='w-8 h-8 bg-gradient-to-br from-[#9C27B0] to-[#651FFF] rounded-lg flex items-center justify-center mr-3 mt-1'>
										<span className='text-white text-sm font-bold'>🚀</span>
									</div>
									<div>
										<h4 className='font-semibold text-gray-800 dark:text-white mb-1'>
											Performance First
										</h4>
										<p className='text-sm text-gray-600 dark:text-gray-300'>
											I prioritize clean, optimized code that delivers fast,
											responsive user experiences.
										</p>
									</div>
								</div>
								<div className='flex items-start'>
									<div className='w-8 h-8 bg-gradient-to-br from-[#651FFF] to-[#9C27B0] rounded-lg flex items-center justify-center mr-3 mt-1'>
										<span className='text-white text-sm font-bold'>💡</span>
									</div>
									<div>
										<h4 className='font-semibold text-gray-800 dark:text-white mb-1'>
											Clean Architecture
										</h4>
										<p className='text-sm text-gray-600 dark:text-gray-300'>
											I focus on writing maintainable, scalable code with clear
											structure and best practices.
										</p>
									</div>
								</div>
								<div className='flex items-start'>
									<div className='w-8 h-8 bg-gradient-to-br from-[#9C27B0] to-[#651FFF] rounded-lg flex items-center justify-center mr-3 mt-1'>
										<span className='text-white text-sm font-bold'>�</span>
									</div>
									<div>
										<h4 className='font-semibold text-gray-800 dark:text-white mb-1'>
											Modern Technologies
										</h4>
										<p className='text-sm text-gray-600 dark:text-gray-300'>
											I stay current with the latest tools and frameworks to
											deliver cutting-edge solutions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className='mt-6 sm:mt-8 text-center'>
					<div className='bg-gradient-to-r from-[#9C27B0] to-[#651FFF] rounded-xl p-4 sm:p-6 text-white'>
						<h3 className='text-lg sm:text-xl font-semibold mb-2'>
							Let's Work Together!
						</h3>
						<p className='mb-4 opacity-90 text-sm sm:text-base'>
							I'm always open to discussing new opportunities and interesting
							projects.
						</p>
						<button className='bg-white/20 hover:bg-white/30 transition-colors duration-200 px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base cursor-pointer'>
							Get In Touch
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
