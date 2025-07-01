import type { LinkProps } from '@/shared/types/link.type';

export const HEADER_MAIN_PAGE_LINK = {
	text: 'Главная',
	href: '/',
};

export const HEADER_NAVIGATION: Array<LinkProps> = [
	{ text: 'Аккаунт', href: '/account', variant: 'filled' },
	{ text: 'О нас', href: '/about-us', variant: 'subtle' },
];
