import { HEADER_NAVIGATION } from '@/widgets/layout/model/header.constants';
import type { LayoutProps } from '@/widgets/layout/types/layout.types';

import { Footer } from './footer';
import { Header } from './header';
import css from './index.module.css';

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header navigationLinks={HEADER_NAVIGATION} className={css.header} />
			{children}
			<Footer />
		</>
	);
};
