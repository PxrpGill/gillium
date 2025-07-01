import '@/shared/styles/global.css';

import type { Metadata } from 'next';

import { fontVariables } from '@/shared/config';
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
		<html lang="en" className={fontVariables}>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
};

export default RootLayout;
