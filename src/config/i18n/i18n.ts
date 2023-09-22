import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

/**
 * с помощью пакета i18next-http-backend можем асинхронно чанками 
 * подгружать только тот язык который нам нужен и не тянуть все 
 * переводы  в сборку 
 */

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'ru',
		debug: true,

		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},

		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		}
	});


export default i18n;