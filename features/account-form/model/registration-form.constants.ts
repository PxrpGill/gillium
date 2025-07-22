export const getRegistrationInputs = () => {
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
		{
			type: 'password',
			placeholder: 'Повторите пароль...',
			label: 'Повторите пароль',
			required: true,
		},
	];
};

export const REGISTRATION_SUBMIT_BUTTON = 'Создать аккаунт';
