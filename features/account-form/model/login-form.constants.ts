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
