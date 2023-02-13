import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MainSliderProps } from './MainSlider.types';

import { useInterval } from 'common/useInterval';

import styles from './MainSlider.module.css';

type Images = {
	imageDesktop: string;
	imageMobile: string;
};

const SLIDE_INTERVAL_MS = 6000;

export const MainSlider = ({ data, isRound }: MainSliderProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [imageType, setImageType] = useState(() => {
		return window.innerWidth > 700 ? 'imageDesktop' : 'imageMobile';
	});

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

	const onWindowResize = useCallback(() => {
		if (window.innerWidth > 700) {
			setImageType('imageDesktop');
		} else {
			setImageType('imageMobile');
		}
	}, []);

	useEffect(() => {
		window.addEventListener('resize', onWindowResize);
		return () => window.removeEventListener('resize', onWindowResize);
	}, [onWindowResize]);

	return (
		<div className={styles.slider}>
			{data.map((item) => {
				return (
					<div
						className={`${styles.slide} ${currentSlide === item.id - 1 ? styles.slideActive : null}`}
						style={{
							backgroundImage: `url(${item.images[imageType as keyof Images]})`,
						}}
						key={item.id}
					></div>
				);
			})}
			<div className={styles.inner}>
				<div
					className={styles.box}
					style={{
						backgroundColor: data[currentSlide].color,
						borderRadius: isRound ? '25px' : '0',
					}}
				>
					<Link className={styles.link} to={data[currentSlide].href}>
						<h1 className={styles.text}>{data[currentSlide].text}</h1>
					</Link>
				</div>
			</div>
		</div>
	);
};
