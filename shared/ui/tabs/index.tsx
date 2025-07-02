'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import type { JSX } from 'react';
import { useState } from 'react';

import type { PropsWithClassName } from '@/shared/types';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export type TabProps = {
	text: string;
	content: JSX.Element;
};

type TabsProps = PropsWithClassName & {
	tabs?: Array<TabProps>;
};

export const Tabs = ({ tabs, className }: TabsProps) => {
	const [activeTab, setActiveTab] = useState<number>(0);

	if (!(tabs && tabs.length)) return null;

	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};

	return (
		<article className={cx(css.root, className)}>
			<ul className={css.tabs} data-element="tab-panel">
				{tabs.map((tab, index) => (
					<li className={css.tab} key={index}>
						<Button
							onClick={() => handleTabClick(index)}
							variant={activeTab === index ? 'filled' : 'outline'}
						>
							{parser(tab.text)}
						</Button>
					</li>
				))}
			</ul>
			<div className={css.tabContent} data-tab-content="content">
				{tabs[activeTab].content}
			</div>
		</article>
	);
};
