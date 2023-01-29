import { useEffect, useState, useCallback } from 'react';

import styles from './Header.module.css';

import { HeaderProps } from './Header.types';

export const Header = ({ image, imageMobile, text, color, aligment, isRound }: HeaderProps) => {
	const [activeImg, setActiveImg] = useState(() => {
		return window.innerWidth > 800 ? image : imageMobile;
	});
	const position = {
		left: {
			bottom: '7%',
			left: '5%',
		},
		right: {
			bottom: '7%',
			right: '5%',
		},
	};

	const onWindowResize = useCallback(() => {
		if (window.innerWidth > 800) {
			setActiveImg(image);
		} else {
			setActiveImg(imageMobile);
		}
	}, [image, imageMobile]);

	useEffect(() => {
		window.addEventListener('resize', onWindowResize);
		return () => window.removeEventListener('resize', onWindowResize);
	}, [onWindowResize]);

	return (
		<div
			className={styles.header}
			style={{
				backgroundImage: `url(${activeImg})`,
			}}
		>
			<div
				className={styles.box}
				style={{
					backgroundColor: color,
					...position[aligment],
					borderRadius: isRound ? '20px' : '0',
				}}
			>
				<h1 className={styles.text}>{text}</h1>
			</div>
		</div>
	);
};
