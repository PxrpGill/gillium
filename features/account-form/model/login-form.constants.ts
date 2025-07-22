export const getLoginInputs = () => {
	return [
		{
			type: 'email',
			placeholder: 'Введите email...',
			label: 'Email',
			required: true,
		},
		{
			type: 'password',
			placeholder: 'Введите пароль...',
			label: 'Пароль',
			required: true,
		},
	];
};

export const LOGIN_SUBMIT_BUTTON = 'Вход';
export const FORGOT_YOUR_PASSWORD = 'Забыли пароль?';
export const FORGOT_PAGE = '/';
