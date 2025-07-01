import cx from 'clsx';

import LogoSVG from '@/public/assets/main-logo.svg';
import type { HeaderProps } from '@/widgets/layout/types/header.types';

import css from './index.module.css';

export const Header = ({ className }: HeaderProps) => {
	return (
		<header className={cx(css.root, className)}>
			<LogoSVG />
		</header>
	);
};
