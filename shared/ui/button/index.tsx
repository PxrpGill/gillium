import cx from 'clsx';
import type { ElementType, ReactNode } from 'react';
import { forwardRef } from 'react';

import css from './index.module.css';

type ButtonVariant = 'filled' | 'outline' | 'subtle';

type ButtonOwnProps<E extends ElementType = ElementType> = {
	children: ReactNode;
	variant?: ButtonVariant;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	disabled?: boolean;
	loading?: boolean;
	className?: string;
	as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
	Omit<React.ComponentPropsWithoutRef<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

export const Button = forwardRef<unknown, ButtonProps<ElementType>>(
	(
		{
			children,
			variant = 'filled',
			leftIcon,
			rightIcon,
			disabled = false,
			loading = false,
			className = '',
			as,
			...rest
		},
		ref
	) => {
		const Element = as || defaultElement;

		return (
			<Element
				ref={ref}
				className={cx(css.root, className, css[variant])}
				disabled={disabled || loading}
				{...rest}
			>
				{leftIcon && <span className={css.leftIcon}>{leftIcon}</span>}
				<span className={css.buttonContent}>{children}</span>
				{rightIcon && <span className={css.rightIcon}>{rightIcon}</span>}
			</Element>
		);
	}
);

Button.displayName = 'Button';

export type { ButtonProps, ButtonVariant };
export default Button;
