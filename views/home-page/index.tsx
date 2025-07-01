import type { NextPage } from 'next';

import css from './index.module.css';

const HomePage: NextPage = () => {
	return (
		<>
			<div className={css.card}></div>
		</>
	);
};

export default HomePage;
