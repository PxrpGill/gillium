import cx from 'clsx';
import type { PropsWithChildren } from 'react';

import type { PropsWithClassName } from '@/shared/types';

import css from './index.module.css';

type ModalProps = PropsWithChildren &
	PropsWithClassName & {
		isOpen: boolean;
		toggleClose: () => void;
	};

export const Modal = ({
	isOpen,
	children,
	className,
	toggleClose,
}: ModalProps) => {
	return (
		<dialog className={cx(css.root, className, { [css.open]: isOpen })}>
			<button onClick={toggleClose} className={css.closeButton}>
				x
			</button>
			<div className={css.dialogContent}>{children}</div>
		</dialog>
	);
};
