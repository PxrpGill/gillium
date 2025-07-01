import cx from 'clsx';
import type { PropsWithChildren } from 'react';

import type { PropsWithClassName } from '@/shared/types';

import css from './index.module.css';

type ContainerProps = PropsWithClassName & PropsWithChildren;

export const Container = ({ children, className }: ContainerProps) => {
	return <div className={cx(css.root, className)}>{children}</div>;
};
