import { FoodTileProps } from './FoodTile.types';

import styles from './FoodTile.module.css';

export const FoodTile = ({ color, text, image, justifyContent, imageClass, isRound }: FoodTileProps) => {
	return (
		<div
			className={styles.tile}
			style={{
				backgroundColor: color,
				justifyContent,
				borderRadius: isRound ? '50%' : '25px',
			}}
		>
			<p
				className={styles.text}
				style={{
					textAlign: isRound ? 'center' : 'left',
				}}
			>
				{text}
			</p>
			<img className={styles[imageClass]} src={image} alt='ikona-jedzenia' />
		</div>
	);
};
