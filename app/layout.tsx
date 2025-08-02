import '@mantine/core/styles.css';
import '@/shared/styles/global.css';

import { ColorSchemeScript } from '@mantine/core';
import type { Metadata } from 'next';

import { fontVariables } from '@/shared/config';
import { AppProviders } from '@/shared/config/app-providers';
import { Layout } from '@/widgets';

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
		<html lang="en" className={fontVariables} suppressHydrationWarning>
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<AppProviders>
					<Layout>{children}</Layout>
				</AppProviders>
			</body>
		</html>
	);
};

export default RootLayout;
