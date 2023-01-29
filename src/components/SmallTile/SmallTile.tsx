import { Link } from 'react-router-dom';

import { appRoutes } from 'data/appRoutes/appRoutes';

import { SmallTileProps } from './SmallTile.types';

import styles from './SmallTile.module.css';

export const SmallTile = ({ color, image, header, text, accentImg, href }: SmallTileProps) => {
	// const handleLinkClick = () => {
	// 	const timeoutId = setTimeout(() => {
	// 		window.location.hash = href;
	// 	}, 700);
	// 	return () => clearTimeout(timeoutId);
	// };
	return (
		<div
			className={styles.tile}
			style={{
				backgroundColor: color,
			}}
		>
			<img className={styles.image} src={image} alt='' />
			<div className={styles.bottom}>
				<div>
					<h2 className={styles.header}>{header}</h2>
					<p className={styles.text}>{text}</p>
				</div>
				<Link className={styles.link} to={appRoutes.babycare_our_methods + href}>
					więcej
				</Link>
				<img className={styles.accent} src={accentImg} alt='' />
			</div>
		</div>
	);
};
