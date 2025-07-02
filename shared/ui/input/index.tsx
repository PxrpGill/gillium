import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import css from './index.module.css';

type InputProps = {
	label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, ...props }, ref) => {
		return (
			<div className={css.root}>
				{label && <label className={css.label}>{label}</label>}
				<div className="input-wrapper">
					<input ref={ref} className={css.input} {...props} />
				</div>
			</div>
		);
	}
);

Input.displayName = 'Input';
