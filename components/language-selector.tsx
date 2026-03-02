'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, type Language } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';

interface LanguageOption {
	code: Language;
	name: string;
	flag: string;
}

const languages: LanguageOption[] = [
	{ code: 'en', name: 'English', flag: '🇬🇧' },
	{ code: 'de', name: 'Deutsch', flag: '🇩🇪' },
	{ code: 'sr', name: 'Српски', flag: '🇷🇸' },
	{ code: 'ru', name: 'Русский', flag: '🇷🇺' },
	{ code: 'zh', name: '中文', flag: '🇨🇳' },
	{ code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export function LanguageSelector() {
	const { language, setLanguage } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const currentLanguage = languages.find((lang) => lang.code === language);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	const handleLanguageChange = (lang: Language) => {
		setLanguage(lang);
		setIsOpen(false);
	};

	return (
		<div className="relative" ref={dropdownRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background hover:bg-accent transition-colors"
				aria-label="Select language"
			>
				<span className="text-xl">{currentLanguage?.flag}</span>
				<span className="text-sm font-medium hidden sm:inline">
					{currentLanguage?.code.toUpperCase()}
				</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={cn('transition-transform', isOpen && 'rotate-180')}
				>
					<polyline points="6 9 12 15 18 9" />
				</svg>
			</button>

			{isOpen && (
				<div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden">
					{languages.map((lang) => (
						<button
							key={lang.code}
							onClick={() => handleLanguageChange(lang.code)}
							className={cn(
								'w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-accent transition-colors',
								language === lang.code && 'bg-accent/50'
							)}
						>
							<span className="text-xl">{lang.flag}</span>
							<span className="text-sm font-medium">{lang.name}</span>
							{language === lang.code && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="ml-auto text-[#34bb92]"
								>
									<polyline points="20 6 9 17 4 12" />
								</svg>
							)}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
