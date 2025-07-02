import parser from 'html-react-parser';
import Link from 'next/link';

import { Button } from '@/shared/ui';
import { HELLO_SECTION_DATA } from '@/widgets/hello-section/model/hello-section.constants';

import css from './index.module.css';

export const HelloSection = () => {
	return (
		<section className={css.root}>
			<h1 className={css.title}>{parser(HELLO_SECTION_DATA.title)}</h1>
			<p className={css.description}>
				{parser(HELLO_SECTION_DATA.description)}
			</p>
			<Button
				as={Link}
				href={HELLO_SECTION_DATA.button.href}
				className={css.startButton}
			>
				{parser(HELLO_SECTION_DATA.button.text)}
			</Button>
			<nav className={css.navigation}>
				{HELLO_SECTION_DATA.links.map((link, index) => (
					<Button
						key={index}
						variant={link.variant}
						as={Link}
						href={link.href}
						className={css.link}
					>
						{parser(link.text)}
					</Button>
				))}
			</nav>
		</section>
	);
};
