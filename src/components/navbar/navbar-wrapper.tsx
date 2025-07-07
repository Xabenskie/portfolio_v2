import { Navbar } from './navbar'

export function NavbarWrapper({ children }: { children?: React.ReactNode }) {
	return (
		<div className='bg-white dark:bg-[#192730] dark:text-white p-4 md:p-8 transition-colors duration-200 flex flex-col lg:flex-row gap-4 md:gap-8 items-start justify-start min-h-screen'>
			<div className='w-full lg:w-auto lg:sticky lg:top-3 z-40'>
				<Navbar />
			</div>
			<div className='w-full'>{children}</div>
		</div>
	)
}
