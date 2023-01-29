import { BigFixedImageProps } from './BigFixedImage.types';

import styles from './BigFixedImage.module.css';

export const BigFixedImage = ({ image }: BigFixedImageProps) => {
	return (
		<div
			className={styles.image}
			style={{
				backgroundImage: `url(${image})`,
			}}
		></div>
	);
};
