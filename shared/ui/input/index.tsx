import parser from 'html-react-parser';
import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import css from './index.module.css';

type InputProps = {
	label?: string;
	required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, required, ...props }, ref) => {
		return (
			<div className={css.root}>
				{label && (
					<label className={css.label}>
						{parser(label)}{' '}
						{required && <span className={css.required}>*</span>}
					</label>
				)}
				<div className={css.inputWrapper}>
					<input ref={ref} className={css.input} {...props} />
				</div>
			</div>
		);
	}
);

Input.displayName = 'Input';
