import type { ForwardedRef, InputHTMLAttributes } from 'react';
import { forwardRef, useState } from 'react';
import './Checkbox.css'; // Создадим этот файл ниже

type CheckboxVariant =
	| 'primary'
	| 'accent'
	| 'success'
	| 'error'
	| 'warning'
	| 'custom';
type CheckboxSize = 'sm' | 'md' | 'lg';

type CheckboxProps = {
	variant?: CheckboxVariant;
	size?: CheckboxSize;
	label?: React.ReactNode;
	indeterminate?: boolean;
	customColor?: string;
	fullWidth?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

const Checkbox = forwardRef(
	(
		{
			variant = 'primary',
			size = 'md',
			label,
			className = '',
			indeterminate = false,
			customColor,
			fullWidth = false,
			...props
		}: CheckboxProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		const [isChecked, setIsChecked] = useState(
			props.checked || props.defaultChecked || false
		);

		const variantClasses = {
			primary: 'checkbox-primary',
			accent: 'checkbox-accent',
			success: 'checkbox-success',
			error: 'checkbox-error',
			warning: 'checkbox-warning',
			custom: 'checkbox-custom',
		};

		const sizeClasses = {
			sm: 'checkbox-sm',
			md: 'checkbox-md',
			lg: 'checkbox-lg',
		};

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(e);
			}
			if (props.checked === undefined) {
				// Неуправляемый режим
				setIsChecked(e.target.checked);
			}
		};

		return (
			<label
				className={`checkbox-container ${sizeClasses[size]} ${fullWidth ? 'w-full' : 'w-auto'} ${className}`}
			>
				<input
					ref={el => {
						if (el && typeof ref === 'function') {
							ref(el);
						} else if (ref && typeof ref === 'object') {
							if (ref) ref.current = el;
						}

						// Устанавливаем состояние indeterminate
						if (el) {
							el.indeterminate = indeterminate;
						}
					}}
					type="checkbox"
					className={`checkbox-input ${variantClasses[variant]}`}
					style={
						customColor
							? ({ '--custom-color': customColor } as React.CSSProperties)
							: undefined
					}
					checked={props.checked !== undefined ? props.checked : isChecked}
					onChange={handleChange}
					{...props}
				/>
				<span className="checkbox-control"></span>
				{label && <span className="checkbox-label">{label}</span>}
			</label>
		);
	}
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
