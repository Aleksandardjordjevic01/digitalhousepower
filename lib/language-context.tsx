'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'de' | 'sr' | 'ru' | 'zh' | 'fr';

export interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguageState] = useState<Language>('en');
	const [translations, setTranslations] = useState<Record<string, string>>({});

	useEffect(() => {
		// Load saved language from localStorage
		const savedLang = localStorage.getItem('language') as Language;
		if (savedLang) {
			setLanguageState(savedLang);
		}
	}, []);

	useEffect(() => {
		// Load translations for current language
		import(`@/lib/translations/${language}.json`)
			.then((module) => setTranslations(module.default))
			.catch((error) => {
				console.error(`Failed to load translations for ${language}:`, error);
				// Fallback to English if translation load fails
				if (language !== 'en') {
					import('@/lib/translations/en.json')
						.then((module) => setTranslations(module.default))
						.catch((err) => console.error('Failed to load English translations:', err));
				}
			});
	}, [language]);

	const setLanguage = (lang: Language) => {
		setLanguageState(lang);
		localStorage.setItem('language', lang);
	};

	const t = (key: string): string => {
		return translations[key] || key;
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
}
