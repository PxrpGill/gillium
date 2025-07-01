import type { NextPage } from 'next';

import css from './index.module.css';

const HomePage: NextPage = () => {
	return (
		<div className={css.root}>
			<h1 className={css.h1}>Это h1</h1>
			<h2 className={css.h2}>Это h2</h2>
			<h3 className={css.h3}>Это h3</h3>
			<h4 className={css.h4}>Это h4</h4>
			<p className={css.bodyLarge}>Это Body-Large</p>
			<p className={css.bodyMedium}>Это Body-medium</p>
			<p className={css.bodySmall}>Это Body-small</p>
			<p className={css.caption}>Это caption</p>
			<p className={css.buttonText}>Это ButtonText</p>
		</div>
	);
};

export default HomePage;
