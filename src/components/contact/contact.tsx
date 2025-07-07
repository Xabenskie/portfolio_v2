import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
	const { t } = useTranslation()
	const [isVisible, setIsVisible] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<
		'idle' | 'success' | 'error'
	>('idle')
	const contactRef = useRef<HTMLDivElement>(null)

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

		if (contactRef.current) {
			observer.observe(contactRef.current)
		}

		return () => observer.disconnect()
	}, [])

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 2000))

		setIsSubmitting(false)
		setSubmitStatus('success')
		setFormData({ name: '', email: '', message: '' })

		// Reset status after 3 seconds
		setTimeout(() => setSubmitStatus('idle'), 3000)
	}

	const contactInfo = [
		{
			icon: (
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
					/>
				</svg>
			),
			title: t('contact.info.email'),
			value: 'xabenskie@example.com',
			href: 'mailto:xabenskie@example.com'
		},
		{
			icon: (
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
					/>
				</svg>
			),
			title: t('contact.info.phone'),
			value: '+1 (555) 123-4567',
			href: 'tel:+15551234567'
		},
		{
			icon: (
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
					/>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
					/>
				</svg>
			),
			title: t('contact.info.location'),
			value: 'New York, NY',
			href: '#'
		}
	]

	const socialLinks = [
		{
			name: 'GitHub',
			href: 'https://github.com/xabenskie',
			icon: (
				<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
					<path d='M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
				</svg>
			)
		},
		{
			name: 'LinkedIn',
			href: 'https://linkedin.com/in/xabenskie',
			icon: (
				<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
					<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
				</svg>
			)
		},
		{
			name: 'Twitter',
			href: 'https://twitter.com/xabenskie',
			icon: (
				<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
					<path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
				</svg>
			)
		}
	]

	return (
		<section id='4' className='min-h-screen pt-16 pb-8'>
			<div className='bg-gradient-to-br from-[#651FFF]/10 to-[#9C27B0]/10 rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-sm'>
				<div ref={contactRef} className='text-center mb-8 sm:mb-12'>
					<h2
						className={`text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white transition-all duration-1000 ${
							isVisible
								? 'opacity-100 translate-y-0'
								: 'opacity-0 translate-y-8'
						}`}
					>
						{t('contact.title')}
					</h2>
					<p
						className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
							isVisible
								? 'opacity-100 translate-y-0'
								: 'opacity-0 translate-y-8'
						}`}
					>
						{t('contact.description')}
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
					{/* Contact Info */}
					<div
						className={`space-y-6 transition-all duration-1000 delay-700 ${
							isVisible
								? 'opacity-100 translate-x-0'
								: 'opacity-0 -translate-x-8'
						}`}
					>
						<div className='bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/50'>
							<h3 className='text-xl font-bold text-gray-800 dark:text-white mb-6'>
								{t('contact.info.title')}
							</h3>
							<div className='space-y-4'>
								{contactInfo.map((item, index) => (
									<a
										key={item.title}
										href={item.href}
										className='flex items-center gap-4 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all duration-300 group'
										style={{
											transitionDelay: `${index * 100}ms`
										}}
									>
										<div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#9C27B0] to-[#651FFF] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300'>
											{item.icon}
										</div>
										<div>
											<h4 className='font-medium text-gray-800 dark:text-white'>
												{item.title}
											</h4>
											<p className='text-gray-600 dark:text-gray-300 text-sm'>
												{item.value}
											</p>
										</div>
									</a>
								))}
							</div>
						</div>

						{/* Social Links */}
						<div className='bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/50'>
							<h3 className='text-xl font-bold text-gray-800 dark:text-white mb-6'>
								{t('contact.social.title')}
							</h3>
							<div className='flex gap-4'>
								{socialLinks.map((social, index) => (
									<a
										key={social.name}
										href={social.href}
										target='_blank'
										rel='noopener noreferrer'
										className='w-12 h-12 bg-gradient-to-r from-[#9C27B0] to-[#651FFF] rounded-lg flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300'
										style={{
											transitionDelay: `${index * 100}ms`
										}}
									>
										{social.icon}
									</a>
								))}
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div
						className={`transition-all duration-1000 delay-900 ${
							isVisible
								? 'opacity-100 translate-x-0'
								: 'opacity-0 translate-x-8'
						}`}
					>
						<div className='bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/50'>
							<h3 className='text-xl font-bold text-gray-800 dark:text-white mb-6'>
								{t('contact.form.title')}
							</h3>
							<form onSubmit={handleSubmit} className='space-y-4'>
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
									>
										{t('contact.form.name')}
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={formData.name}
										onChange={handleInputChange}
										required
										className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/70 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#9C27B0] focus:border-transparent transition-all duration-300'
										placeholder={t('contact.form.namePlaceholder')}
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
									>
										{t('contact.form.email')}
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleInputChange}
										required
										className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/70 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#9C27B0] focus:border-transparent transition-all duration-300'
										placeholder={t('contact.form.emailPlaceholder')}
									/>
								</div>
								<div>
									<label
										htmlFor='message'
										className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
									>
										{t('contact.form.message')}
									</label>
									<textarea
										id='message'
										name='message'
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={4}
										className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/70 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#9C27B0] focus:border-transparent transition-all duration-300 resize-none'
										placeholder={t('contact.form.messagePlaceholder')}
									/>
								</div>
								<button
									type='submit'
									disabled={isSubmitting}
									className='w-full py-3 px-6 bg-gradient-to-r from-[#9C27B0] to-[#651FFF] text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
								>
									{isSubmitting ? (
										<span className='flex items-center justify-center gap-2'>
											<svg
												className='w-5 h-5 animate-spin'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
												/>
											</svg>
											{t('contact.form.sending')}
										</span>
									) : (
										t('contact.form.submit')
									)}
								</button>
								{submitStatus === 'success' && (
									<div className='text-green-600 dark:text-green-400 text-center text-sm animate-bounce-in'>
										{t('contact.form.success')}
									</div>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
