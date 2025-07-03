export const getRegistrationInputs = () => {
	return [
		{
			type: 'text',
			placeholder: 'Введите имя',
			label: 'Имя',
		},
		{
			type: 'text',
			placeholder: 'Введите фамилию',
			label: 'Фамилия',
		},
		{
			type: 'email',
			placeholder: 'Введите почту',
			label: 'Почта',
		},
		{
			type: 'text',
			placeholder: 'Введите название компании',
			label: 'Компания',
		},
		{
			type: 'password',
			placeholder: 'Введите пароль',
			label: 'Пароль',
		},
		{
			type: 'password',
			placeholder: 'Повторите пароль',
			label: 'Повторите пароль',
		},
	];
};

export const REGISTRATION_SUBMIT_BUTTON = 'Создать аккаунт';
