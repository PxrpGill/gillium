import type { LinkProps } from 'next/link';

import type { PropsWithClassName } from '@/shared/types';

export type HeaderNavigationProps = PropsWithClassName & {
	navigationLinks?: Array<LinkProps>;
};

export type HeaderProps = HeaderNavigationProps & {};
