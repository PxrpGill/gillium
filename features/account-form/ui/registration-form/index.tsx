import cx from 'clsx';

import type { RegistrationFormProps } from '@/features/account-form/types/registration-form.types';

import css from './index.module.css';

export const RegistrationForm = ({ className }: RegistrationFormProps) => {
	return <form className={cx(css.root, className)}></form>;
};
