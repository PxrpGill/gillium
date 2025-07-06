import cx from 'clsx';

import { getLoginInputs } from '@/features/account-form/model/login-form.constants';
import type { LoginFormProps } from '@/features/account-form/types/login-form.types';
import { Input } from '@/shared/ui';

import css from './index.module.css';

export const LoginForm = ({ className }: LoginFormProps) => {
	const inputs = getLoginInputs();

	return (
		<form className={cx(css.root, className)}>
			<div className={css.inputsGroup}>
				{inputs.map((input, key) => (
					<Input {...input} key={key} />
				))}
			</div>
		</form>
	);
};
