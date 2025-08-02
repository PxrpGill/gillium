export const FORGOT_PASSWORD_CONSTANTS = {
	modalTitle: 'Восстановление пароля',
	submitButton: 'Восстановить пароль',
};

export const getForgotPasswordInputs = () => {
	return [
		{
			type: 'email',
			placeholder: 'Введите email...',
			label: 'Email',
			required: true,
		},
	];
};
