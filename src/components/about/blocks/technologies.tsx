import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const skills: {
	name: string
	level: number
}[] = [
	{ name: 'React', level: 90 },
	{ name: 'TypeScript', level: 85 },
	{ name: 'JavaScript', level: 95 },
	{ name: 'CSS/SCSS', level: 88 },
	{ name: 'Tailwind CSS', level: 92 },
	{ name: 'Next.js', level: 87 },
	{ name: 'Redux', level: 82 },
	{ name: 'Vite', level: 80 }
]

export function TechnologiesBlock() {
	const { t } = useTranslation()
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
		<div
			ref={skillsRef}
			className='bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm'
		>
			<h3 className='text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white'>
				{t('about.technologies.title')}
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
								<span className='text-gray-500 dark:text-gray-400'>%</span>
							</span>
						</div>
						<div className='w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden'>
							<div
								className='bg-gradient-to-r from-[#9C27B0] to-[#651FFF] h-2 rounded-full transition-all duration-1000 ease-out'
								style={{
									width: hasAnimated ? `${skill.level}%` : '0%',
									transitionDelay: hasAnimated ? `${index * 150}ms` : '0ms'
								}}
							></div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
