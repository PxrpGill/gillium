import type { Metadata } from 'next';

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
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
