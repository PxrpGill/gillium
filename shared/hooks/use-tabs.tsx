'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export const useTabs = () => {
	const [activeTab, setActiveTab] = useState<number>(0);
	const [indicatorStyle, setIndicatorStyle] = useState({});
	const tabsRef = useRef<Array<HTMLLIElement | null>>([]);

	const handleTabIndicator = useCallback(() => {
		const currentRef = tabsRef.current;

		if (currentRef && currentRef[activeTab]) {
			const { offsetWidth, offsetHeight, offsetLeft } = currentRef[activeTab];

			setIndicatorStyle({
				width: `${offsetWidth}px`,
				height: `${offsetHeight}px`,
				transform: `translateX(${offsetLeft}px)`,
			});
		}
	}, [activeTab]);

	useEffect(() => {
		handleTabIndicator();
	}, [activeTab, handleTabIndicator]);

	useEffect(() => {
		window.addEventListener('resize', handleTabIndicator);

		return () => {
			window.removeEventListener('resize', handleTabIndicator);
		};
	}, [handleTabIndicator]);

	const handleTabClick = useCallback((index: number) => {
		setActiveTab(index);
	}, []);

	return { indicatorStyle, handleTabClick, tabsRef, activeTab };
};
