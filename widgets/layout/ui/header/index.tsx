import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';

import { Button } from '@/shared/ui';
import { HEADER_MAIN_PAGE_LINK } from '@/widgets/layout/model/header.constants';
import type { HeaderProps } from '@/widgets/layout/types/header.types';
import { HeaderNavigation } from '@/widgets/layout/ui/header-navigation';

import css from './index.module.css';

export const Header = ({ navigationLinks, className }: HeaderProps) => {
	return (
		<header className={cx(css.root, className)}>
			<div className={css.leftPart}>
				<Link href={HEADER_MAIN_PAGE_LINK.href} className={css.homePageLink}>
					{parser(HEADER_MAIN_PAGE_LINK.text)}
				</Link>
			</div>
			<HeaderNavigation
				navigationLinks={navigationLinks}
				className={css.navigation}
			/>
			<Button>Тест</Button>
			<Button variant="outline">Тест</Button>
			<Button variant="subtle">Тест</Button>
		</header>
	);
};
