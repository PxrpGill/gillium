import cx from 'clsx';
import parser from 'html-react-parser';

import {
	getRegistrationInputs,
	REGISTRATION_SUBMIT_BUTTON,
} from '@/features/account-form/model/registration-form.constants';
import type { RegistrationFormProps } from '@/features/account-form/types/registration-form.types';
import { Button, Input } from '@/shared/ui';

import css from './index.module.css';

export const RegistrationForm = ({ className }: RegistrationFormProps) => {
	const inputs = getRegistrationInputs();

	return (
		<form className={cx(css.root, className)}>
			<div className={css.inputsGroup}>
				{inputs.map((inputProps, index) => (
					<Input {...inputProps} key={index} />
				))}
			</div>
			<Button type="submit" className={css.button}>
				{parser(REGISTRATION_SUBMIT_BUTTON)}
			</Button>
		</form>
	);
};
