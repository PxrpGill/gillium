import localFont from 'next/font/local';

// Каждый шрифт должен быть объявлен как отдельная константа
export const robotoRegular = localFont({
	src: '../../public/fonts/Roboto-Regular.ttf',
	weight: '400',
	style: 'normal',
	display: 'swap',
	variable: '--font-roboto-regular',
});

export const robotoMedium = localFont({
	src: '../../public/fonts/Roboto-Medium.ttf',
	weight: '500',
	style: 'normal',
	display: 'swap',
	variable: '--font-roboto-medium',
});

export const robotoSemiBold = localFont({
	src: '../../public/fonts/Roboto-SemiBold.ttf',
	weight: '600',
	style: 'normal',
	display: 'swap',
	variable: '--font-roboto-semibold',
});

export const robotoBold = localFont({
	src: '../../public/fonts/Roboto-Bold.ttf',
	weight: '700',
	style: 'normal',
	display: 'swap',
	variable: '--font-roboto-bold',
});

export const fontVariables = [
	robotoRegular.variable,
	robotoMedium.variable,
	robotoSemiBold.variable,
	robotoBold.variable,
].join(' ');
