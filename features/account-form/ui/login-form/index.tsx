import { useDisclosure } from '@mantine/hooks';
import cx from 'clsx';
import parser from 'html-react-parser';

import { FORGOT_YOUR_PASSWORD } from '@/features/account-form/model/login-form.constants';
import {
	getLoginInputs,
	LOGIN_SUBMIT_BUTTON,
} from '@/features/account-form/model/login-form.constants';
import type { LoginFormProps } from '@/features/account-form/types/login-form.types';
import { ForgotPasswordModal } from '@/features/account-form/ui/forgot-password-modal';
import { Button, Input } from '@/shared/ui';

import css from './index.module.css';

export const LoginForm = ({ className }: LoginFormProps) => {
	const inputs = getLoginInputs();
	const [isOpen, { open, close }] = useDisclosure(false);

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
				<Button className={css.forgot} type="button" onClick={open}>
					{parser(FORGOT_YOUR_PASSWORD)}
				</Button>
			</div>
			<ForgotPasswordModal isOpen={isOpen} handleClose={close} />
		</form>
	);
};
