import { useRef, useEffect, useState } from 'react';

export const useCheckScrollDirection = () => {
	const [scrollingDirection, setScrollingDirection] = useState<'up' | 'down'>('up');
	const lastScrollPositionRef = useRef<number>(0);

	const getScrollingDirection = () => {
		const scroll: number = window.pageYOffset;
		if (scroll > lastScrollPositionRef.current && scroll >= 120) {
			setScrollingDirection('down');
		} else {
			setScrollingDirection('up');
		}
		lastScrollPositionRef.current = scroll <= 0 ? 0 : scroll;
	};

	useEffect(() => {
		window.addEventListener('scroll', getScrollingDirection);
		return () => window.removeEventListener('scroll', getScrollingDirection);
	}, []);

	return scrollingDirection;
};
