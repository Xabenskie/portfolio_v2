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
		image:
			'https://downloader.disk.yandex.ru/preview/c0582f4ac5befc8a8c925e04af599c172ead4f20fa157e2ea1d3e14df2fde20a/686bfabd/kmpTy0njuzxjAZxMDTlpL5YOj2bxKE2LvOqTYAl7xo0LcsYQjArUFXcIsTgBQWoXLNtYT2Qz83UkHXINw_UpAw%3D%3D?uid=0&filename=Screenshot%20From%202025-07-07%2015-47-52.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=2048x2048',
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
		image:
			'https://downloader.disk.yandex.ru/preview/07308fb128aad9514d81c02c7025464484a25f576097c30c25be09081c8b4c9d/686bfb1e/7HpZ-jq9tnHsh4HVeyZS-V47HJN_oZ6xvzPjwY7ygxQO8vrYbps4ilZdJj3AN1al2oHKK9-32gQnUXiBWnyrMw%3D%3D?uid=0&filename=Screenshot%20From%202025-07-07%2015-51-11.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=2048x2048',
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
		image:
			'https://downloader.disk.yandex.ru/preview/1694b2a2ac41be46ed07876a6d011e6e55c4666509dda6f7b0bd86cb13a42910/686bfbc6/V4oi846n6tlX6f2mpdIaivcPQ6EC_VG22W_XL0Te0M2YMi6_oLfDdY7lxRSwFcBKrgMeDdP1LnuGds7pPM6esw%3D%3D?uid=0&filename=Screenshot%20From%202025-07-07%2015-54-02.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=2048x2048',
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		githubUrl: '',
		liveUrl: 'https://turtlesource.tech/',
		category: 'Portfolio',
		deployed: true,
		openSource: false
	}
]
