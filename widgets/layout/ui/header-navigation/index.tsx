import cx from 'clsx';

import type { HeaderNavigationProps } from '@/widgets/layout/types/header.types';

import css from './index.module.css';

export const HeaderNavigation = ({
	navigationLinks,
	className,
}: HeaderNavigationProps) => {
	if (!(navigationLinks && navigationLinks.length)) return null;

	<nav className={cx(css.root, className)}>
        
    </nav>;
};
