import cx from 'clsx';

import { getRegistrationInputs } from '@/features/account-form/model/registration-form.constants';
import type { RegistrationFormProps } from '@/features/account-form/types/registration-form.types';
import { Input } from '@/shared/ui';

import css from './index.module.css';

export const RegistrationForm = ({ className }: RegistrationFormProps) => {
	const inputs = getRegistrationInputs();

	return (
		<form className={cx(css.root, className)}>
			<div className={css.inputGroup}>
				{inputs.map((inputProps, index) => (
					<Input {...inputProps} key={index} />
				))}
			</div>
		</form>
	);
};
