import type { PropsWithClassName } from '@/shared/types';
import type { LinkProps } from '@/shared/types/link.type';

export type HeaderNavigationProps = PropsWithClassName & {
	navigationLinks?: Array<LinkProps>;
};

export type HeaderProps = HeaderNavigationProps & {};
