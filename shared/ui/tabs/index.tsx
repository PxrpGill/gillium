'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useState, type ReactNode } from 'react';

import type { PropsWithClassName } from '@/shared/types';
import type { ButtonVariant } from '@/shared/ui/button';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

type TabProps = {
	text: string;
	content: ReactNode;
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

	const defineActiveTabVariant = (index: number): ButtonVariant => {
		if (activeTab === index) {
			return 'filled';
		}

		return 'outline';
	};

	<article className={cx(css.root, className)}>
		<ul className={css.tabs}>
			{tabs.map((tab, index) => (
				<li className={css.tab} key={index}>
					<Button
						onClick={handleTabClick(index)}
						variant={defineActiveTabVariant(index)}
					>
						{parser(tab.text)}
					</Button>
				</li>
			))}
		</ul>
		<div className={css.tabContent}>{tabs[activeTab].content}</div>
	</article>;
};
