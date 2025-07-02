import { LoginForm } from '@/features/account-form/ui/login-form';
import { RegistrationForm } from '@/features/account-form/ui/registration-form';
import type { TabProps } from '@/shared/ui/tabs';

export const ACCOUNT_FORM_DATA = {
	title: 'Аккаунт',
	login: {},
	registration: {},
};

export const ACCOUNT_FORM_TABS: Array<TabProps> = [
	{
		text: 'Авторизация',
		content: <LoginForm />,
	},
	{
		text: 'Регистрация',
		content: <RegistrationForm />,
	},
];
