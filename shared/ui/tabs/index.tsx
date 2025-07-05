'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import type { JSX } from 'react';
import { useEffect, useRef, useState } from 'react';

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
	const [indicatorStyle, setIndicatorStyle] = useState({});
	const tabsRef = useRef<Array<HTMLLIElement | null>>([]);

	useEffect(() => {
		if (tabsRef.current[activeTab]) {
			const activeTabElement = tabsRef.current[activeTab];
			if (activeTabElement) {
				const { offsetWidth, offsetHeight, offsetLeft } = activeTabElement;
				setIndicatorStyle({
					width: `${offsetWidth}px`,
					height: `${offsetHeight}px`,
					transform: `translateX(${offsetLeft}px)`,
				});
			}
		}
	}, [activeTab]);

	if (!(tabs && tabs.length)) return null;

	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};

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
