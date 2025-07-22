'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import type { JSX } from 'react';

import { useTabs } from '@/shared/hooks/use-tabs';
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
	const { tabsRef, indicatorStyle, activeTab, handleTabClick } = useTabs();

	if (!(tabs && tabs.length)) return null;

	return (
		<article className={cx(css.root, className)}>
			<div className={css.tabWrapper}>
				<ul className={css.tabs} data-element="tab-panel">
					<span className={css.tabIndicator} style={indicatorStyle} />
					{tabs.map((tab, index) => (
						<li
							className={cx(css.tab, { [css.active]: activeTab === index })}
							key={index}
							ref={el => {
								tabsRef.current[index] = el;
							}}
						>
							<Button
								onClick={() => handleTabClick(index)}
								variant={activeTab === index ? 'filled' : 'outline'}
								className={css.button}
							>
								{parser(tab.text)}
							</Button>
						</li>
					))}
				</ul>
			</div>
			<div className={css.tabContent} data-tab-content="content">
				{tabs[activeTab].content}
			</div>
		</article>
	);
};
