import cx from 'clsx';

import type { LoginFormProps } from '@/features/account-form/types/login-form.types';

import css from './index.module.css';

export const LoginForm = ({ className }: LoginFormProps) => {
	return <form className={cx(css.root, className)}>авторизация</form>;
};
