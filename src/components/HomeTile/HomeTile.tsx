import { Link } from 'react-router-dom';

import { HomeTileProps } from './HomeTile.types';

import styles from 'components/HomeTile/HomeTile.module.css';

export const HomeTile = ({ text, color, linkUrl, image }: HomeTileProps) => {
	return (
		<Link className={styles.tile} to={linkUrl}>
			<img className={styles.img} src={image} alt='' />
			<h2 className={styles.text}>{text}</h2>
			<div
				className={styles.layer}
				style={{
					backgroundColor: color,
				}}
			></div>
		</Link>
	);
};
