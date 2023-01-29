import { useState, useCallback } from 'react';

import { FoodSliderProps } from './FoodSlider.types';

import { useInterval } from 'common/useInterval';

import styles from './FoodSlider.module.css';

export const FoodSlider = ({ text, images, boxPosition, isRound }: FoodSliderProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const boxPlacement = {
		left: {
			left: '5%',
		},
		right: {
			right: '5%',
		},
	};

	const nextSlide = useCallback(() => {
		setCurrentSlide((prevSlide) => {
			if (currentSlide === images.length - 1) {
				return 0;
			} else {
				return prevSlide + 1;
			}
		});
	}, [currentSlide, images.length]);

	useInterval(nextSlide, 5000);

	return (
		<>
			<div
				className={styles.slider}
				style={{
					backgroundImage: `url(${images[currentSlide]})`,
				}}
			>
				<div
					className={styles.box}
					style={{
						...boxPlacement[boxPosition],
						borderRadius: isRound ? '25px' : '0',
					}}
				>
					<p className={styles.text}>{text}</p>
				</div>
			</div>
			<div
				className={styles.hiddenBox}
				style={{
					borderRadius: isRound ? '25px' : '0',
				}}
			>
				<p className={styles.text}>{text}</p>
			</div>
		</>
	);
};
