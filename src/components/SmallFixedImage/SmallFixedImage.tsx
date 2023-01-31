import { SmallFixedImageProps } from './SmallFixedImage.types';

import styles from './SmallFixedImage.module.css';

export const SmallFixedImage = ({ image }: SmallFixedImageProps) => {
	return (
		<div className={styles.image}>
			<img src={image} alt='babycare' className={styles.img} />
		</div>
	);
};
