import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';

import {
	FORGOT_PAGE,
	FORGOT_YOUR_PASSWORD,
} from '@/features/account-form/model/login-form.constants';
import {
	getLoginInputs,
	LOGIN_SUBMIT_BUTTON,
} from '@/features/account-form/model/login-form.constants';
import type { LoginFormProps } from '@/features/account-form/types/login-form.types';
import { Button, Input } from '@/shared/ui';

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
			<div className={css.buttonPanel}>
				<Button type="submit" className={css.submitButton}>
					{parser(LOGIN_SUBMIT_BUTTON)}
				</Button>
				<Button className={css.forgot} as={Link} href={FORGOT_PAGE}>
					{parser(FORGOT_YOUR_PASSWORD)}
				</Button>
			</div>
		</form>
	);
};
