import { useState, useCallback } from 'react';

import { useInterval } from 'common/useInterval';

import { MethodsTileProps } from './MethodsTile.types';

import styles from './MethodsTile.module.css';

export const MethodsTile = ({
	image,
	header,
	color,
	texts,
	isImgLeft,
	id,
	accentImg,
	accentImgPosition,
}: MethodsTileProps) => {
	const [currentImage, setCurrentImage] = useState(0);

	const nextImage = useCallback(() => {
		if (typeof image === 'string') return;
		setCurrentImage((prevImage) => {
			if (prevImage === image.length - 1) {
				return 0;
			} else {
				return prevImage + 1;
			}
		});
	}, [image]);

	const accentPosition = {
		top: {
			top: '5%',
			right: '5%',
		},
		bottom: {
			bottom: '5%',
			right: '5%',
		},
	};

	useInterval(nextImage, 5000);

	return (
		<article id={id} className={styles.article}>
			<div
				className={styles.text}
				style={{
					backgroundColor: color,
				}}
			>
				{header && <h2 className={styles.header}>{header}</h2>}
				{texts.map((text, index) => (
					<p className={styles.paragraph} key={index}>
						{text}
					</p>
				))}
				<img
					className={styles.accent_img}
					src={accentImg}
					alt='accent-img'
					style={{
						...accentPosition[accentImgPosition],
					}}
				/>
			</div>
			<div
				className={styles.img}
				style={{
					backgroundImage: typeof image === 'string' ? `url(${image})` : `url(${image[currentImage]})`,
					order: isImgLeft ? '1' : '2',
				}}
			></div>
		</article>
	);
};
