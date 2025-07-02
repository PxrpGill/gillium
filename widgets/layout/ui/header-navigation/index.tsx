import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';

import { Button } from '@/shared/ui';
import type { HeaderNavigationProps } from '@/widgets/layout/types/header.types';

import css from './index.module.css';

export const HeaderNavigation = ({
	navigationLinks,
	className,
}: HeaderNavigationProps) => {
	if (!navigationLinks || navigationLinks.length === 0) return null;

	return (
		<nav className={cx(css.root, className)}>
			{navigationLinks.map((linkItem, index) => (
				<Button key={index} as={Link} href={linkItem.href} variant={linkItem.variant}>
					{parser(linkItem.text)}
				</Button>
			))}
		</nav>
	);
};
