export const getRegistrationInputs = () => {
	return [
		{
			type: 'text',
			placeholder: 'Введите имя',
		},
		{
			type: 'text',
			placeholder: 'Введите фамилию',
		},
		{
			type: 'email',
			placeholder: 'Введите почту',
		},
		{
			type: 'text',
			placeholder: 'Введите название компании',
		},
		{
			type: 'password',
			placeholder: 'Введите пароль',
		},
		{
			type: 'password',
			placeholder: 'Повторите пароль',
		},
	];
};
