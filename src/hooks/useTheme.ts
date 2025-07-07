import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

interface UseThemeReturn {
	theme: Theme
	setTheme: (theme: Theme) => void
}

export const useTheme = (): UseThemeReturn => {
	const [theme, setThemeState] = useState<Theme>(() => {
		if (typeof window !== 'undefined') {
			const savedTheme = localStorage.getItem('theme') as Theme
			if (savedTheme === 'light' || savedTheme === 'dark') {
				return savedTheme
			}
			// Если темы нет в localStorage, определяем по системной
			return window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'
		}
		return 'light'
	})

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	useEffect(() => {
		const root = document.documentElement

		if (theme === 'dark') {
			root.classList.add('dark')
		} else {
			root.classList.remove('dark')
		}
	}, [theme])

	return { theme, setTheme }
}
