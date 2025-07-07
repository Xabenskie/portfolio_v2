import { useTheme } from '@hooks/useTheme'

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme()

	const isDark = theme === 'dark'

	const toggleTheme = () => {
		setTheme(isDark ? 'light' : 'dark')
	}

	return (
		<div className='bg-transparent'>
			<button
				onClick={toggleTheme}
				className='relative w-12 h-6 sm:w-16 sm:h-8 rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#D1C4E9]
        dark:focus:ring-[#3f3668] bg-gray-200 dark:bg-[#20333f] cursor-pointer'
				aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
			>
				{/* Toggle slider */}
				<div
					className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-200 ease-in-out transform ${
						isDark
							? 'translate-x-6 sm:translate-x-8 bg-gray-800'
							: 'translate-x-0 bg-white'
					} shadow-md flex items-center justify-center`}
				>
					<span className='text-xs'>{isDark ? '🌙' : '☀️'}</span>
				</div>

				{/* Background icons */}
				<div className='absolute inset-0 flex items-center justify-between px-1 sm:px-2'>
					<span
						className={`text-xs transition-opacity duration-200 ${
							!isDark ? 'opacity-50' : 'opacity-0'
						}`}
					>
						☀️
					</span>
					<span
						className={`text-xs transition-opacity duration-200 ${
							isDark ? 'opacity-50' : 'opacity-0'
						}`}
					>
						🌙
					</span>
				</div>
			</button>
		</div>
	)
}
