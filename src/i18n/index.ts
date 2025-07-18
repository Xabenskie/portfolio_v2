import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

// Import translation files
import en from './locales/en.json'
import ru from './locales/ru.json'

const resources = {
	en: {
		translation: en
	},
	ru: {
		translation: ru
	}
}

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		supportedLngs: ['en', 'ru'],
		debug: false,

		detection: {
			order: ['navigator', 'localStorage', 'cookie'],
			caches: ['localStorage']
		},

		interpolation: {
			escapeValue: false // react already does escaping
		}
	})

export default i18n
