import cx from 'clsx';

import type { FooterProps } from '@/widgets/layout/types/footer.types';

import css from './index.module.css';

export const Footer = ({ className }: FooterProps) => {
	return <footer className={cx(css.root, className)}></footer>;
};
