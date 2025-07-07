import type { Project } from '@/types'

// Example utility function
export const formatDate = (date: Date): string => {
	return new Intl.DateTimeFormat('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(date)
}

export const debounce = <T extends (...args: unknown[]) => unknown>(
	func: T,
	wait: number
): ((...args: Parameters<T>) => void) => {
	let timeout: ReturnType<typeof setTimeout>
	return (...args: Parameters<T>) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => func(...args), wait)
	}
}

export const categories = ['All', 'Web App', 'Dashboard', 'Portfolio']

export const getProjectsData = (t: (key: string) => string): Project[] => [
	{
		id: 1,
		title: t('projects.items.weatherDashboard.title'),
		description: t('projects.items.weatherDashboard.description'),
		image:
			'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
		technologies: ['React', 'Chart.js', 'OpenWeather API', 'Styled Components'],
		githubUrl: 'https://github.com/Xabenskie/weather',
		liveUrl: '',
		category: 'Dashboard',
		deployed: false,
		openSource: true
	},
	{
		id: 2,
		title: t('projects.items.portfolioWebsite.title'),
		description: t('projects.items.portfolioWebsite.description'),
		image: '/Screenshot From 2025-07-07 15-47-52.png',
		technologies: ['HTML', 'CSS', 'JavaScript'],
		githubUrl: 'https://github.com/xabenskie/portfolio',
		liveUrl: 'https://xabenskie.github.io/portfolio/',
		category: 'Portfolio',
		deployed: true,
		openSource: true
	},
	{
		id: 3,
		title: t('projects.items.xabPlanner.title'),
		description: t('projects.items.xabPlanner.description'),
		image:
			'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
		technologies: [
			'NextJS',
			'TypeScript',
			'Tailwind CSS',
			'Node.js',
			'NestJS',
			'PostgreSQL',
			'Prisma'
		],
		githubUrl: 'https://github.com/Xabenskie/xabplanner',
		liveUrl: '',
		category: 'Web App',
		deployed: false,
		openSource: true
	},
	{
		id: 4,
		title: t('projects.items.instrumentPro.title'),
		description: t('projects.items.instrumentPro.description'),
		image: '/Screenshot From 2025-07-07 15-51-11.png',
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		githubUrl: '',
		liveUrl: 'https://instrument-pro.pro',
		category: 'Web App',
		deployed: true,
		openSource: false
	},
	{
		id: 5,
		title: t('projects.items.turtleSource.title'),
		description: t('projects.items.turtleSource.description'),
		image: '/Screenshot From 2025-07-07 15-52-50.png',
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		githubUrl: '',
		liveUrl: 'https://turtlesource.tech/',
		category: 'Portfolio',
		deployed: true,
		openSource: false
	}
]

export const contactInfoData = {
	email: 'lukyanovkr@gmail.com',
	telegram: '@wedhhe',
	location: 'Russia, Moscow',
	github: 'https://github.com/Xabenskie'
}
