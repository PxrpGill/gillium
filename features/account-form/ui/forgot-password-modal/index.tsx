import { Modal } from '@mantine/core';
import parser from 'html-react-parser';

import {
	FORGOT_PASSWORD_CONSTANTS,
	getForgotPasswordInputs,
} from '@/features/account-form/model/forgot-password.constants';
import { Button, Input } from '@/shared/ui';

import css from './index.module.css';

type ForgotPasswordModalProps = {
	isOpen: boolean;
	handleClose: () => void;
};

export const ForgotPasswordModal = ({
	isOpen,
	handleClose,
}: ForgotPasswordModalProps) => {
	return (
		<Modal
			opened={isOpen}
			onClose={handleClose}
			centered
			classNames={{
				header: css.modalHeader,
				root: css.root,
				content: css.content,
				body: css.modalBody,
			}}
			title={FORGOT_PASSWORD_CONSTANTS.modalTitle}
		>
			<form className={css.form}>
				{getForgotPasswordInputs().map((input, key) => (
					<Input {...input} key={key} />
				))}
				<Button type="submit" className={css.submitButton}>
					{parser(FORGOT_PASSWORD_CONSTANTS.submitButton)}
				</Button>
			</form>
		</Modal>
	);
};
