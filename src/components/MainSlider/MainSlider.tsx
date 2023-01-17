import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { MainSliderProps } from './MainSlider.types';

import { useInterval } from 'common/useInterval';

import styles from './MainSlider.module.css';

const FADE_INTERVAL_MS = 5000;
const SLIDE_INTERVAL_MS = 5000;

export const MainSlider = ({ data }: MainSliderProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = useCallback(() => {
		setCurrentSlide((prevSlide) => {
			if (prevSlide === data.length - 1) {
				return 0;
			} else {
				return prevSlide + 1;
			}
		});
	}, [data.length]);

	useInterval(nextSlide, SLIDE_INTERVAL_MS);

	return (
		<div
			className={styles.slider}
			style={{
				backgroundImage: `url(${data[currentSlide].image})`,
			}}
		>
			<div
				className={styles.box}
				style={{
					backgroundColor: data[currentSlide].color,
				}}
			>
				<Link className={styles.link} to={data[currentSlide].href}>
					<h1 className={styles.text}>{data[currentSlide].text}</h1>
				</Link>
			</div>
		</div>
	);
};
