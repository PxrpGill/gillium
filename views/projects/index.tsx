import parser from 'html-react-parser';
import type { NextPage } from 'next';

import css from './index.module.css';
import { PROJECTS_PAGE_TITLE } from './models/projects.constants';

export const Projects: NextPage = () => {
	return (
		<>
			<h1 className={css.pageTitle}>{parser(PROJECTS_PAGE_TITLE)}</h1>
		</>
	);
};
