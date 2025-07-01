import type { ButtonVariant } from '@/shared/ui';

export type LinkTargetProps = '_self' | '_blank';

export type LinkProps = {
	text: string;
	href: string;
	target?: LinkTargetProps;
	variant?: ButtonVariant;
};
