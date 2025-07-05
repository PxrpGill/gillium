import type { LinkProps } from '@/shared/types/link.type';

export const HEADER_MAIN_PAGE_LINK = {
	text: 'Главная',
	href: '/',
};

export const HEADER_NAVIGATION: Array<LinkProps> = [
	{ text: 'О&nbsp;нас', href: '/about-us', variant: 'subtle' },
	{ text: 'Новости', href: '/news', variant: 'subtle' },
	{ text: 'Документы', href: '/documents', variant: 'subtle' },
	{ text: 'Аккаунт', href: '/account', variant: 'filled' },
];
