import { Navbar } from './navbar'

export function NavbarWrapper({ children }: { children?: React.ReactNode }) {
	return (
		<div className='bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#192730] dark:via-[#1a2832] dark:to-[#1c2a36] dark:text-white transition-all duration-500 flex flex-col lg:flex-row lg:gap-8 items-start justify-start min-h-screen'>
			<div className='w-full lg:w-auto lg:sticky lg:top-3 z-40 lg:p-4 lg:md:p-8'>
				<Navbar />
			</div>
			<div className='w-full p-4 md:p-8 pt-20 lg:pt-4 lg:md:pt-8'>
				{children}
			</div>
		</div>
	)
}
