import cx from 'clsx';
import parser from 'html-react-parser';

import { ACCOUNT_FORM_DATA } from '@/features/account-form/model/account-form.constants';
import type { AccountFormProps } from '@/features/account-form/types/account-form.types';

import css from './index.module.css';

export const AccountForm = ({ className }: AccountFormProps) => {
	return (
		<section className={cx(css.root, className)}>
			<h1>{parser(ACCOUNT_FORM_DATA.title)}</h1>
		</section>
	);
};
