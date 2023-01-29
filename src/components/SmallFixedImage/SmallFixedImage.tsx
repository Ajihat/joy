import { SmallFixedImageProps } from './SmallFixedImage.types';

import styles from './SmallFixedImage.module.css';

export const SmallFixedImage = ({ image }: SmallFixedImageProps) => {
	return (
		<div
			className={styles.image}
			style={{
				backgroundImage: `url(${image})`,
			}}
		></div>
	);
};
