import type { Metadata } from 'next';

import { fontVariables } from '@/shared/config';

import '@/shared/styles/global.css';

export const metadata: Metadata = {
	title: '',
	description: '',
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en" className={fontVariables}>
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
