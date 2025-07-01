import type { LayoutProps } from './types/layout.types';
import { Footer } from './ui/footer';
import { Header } from './ui/header';

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
