import { LinkButton } from 'components/LinkButton/LinkButton';

import { TextTileProps } from './TextTile.types';

import styles from './TextTile.module.css';

export const TextTile = ({ text, color, linkText, href, accentImg, accentPosition }: TextTileProps) => {
	const position = {
		left: {
			left: '0',
			transform: 'translateX(-60%) scale(1.3)',
		},
		right: {
			right: '0',
			transform: 'translateX(60%) scale(1.3)',
		},
	};
	return (
		<div
			className={styles.tile}
			style={{
				backgroundColor: color,
			}}
		>
			<p className={styles.text}>{text}</p>
			<div className={styles.holder}>
				<LinkButton linkText={linkText} href={href} textColor='#1D1D1B;' />
			</div>
			<img
				className={styles.accent}
				src={accentImg}
				alt='akcent'
				style={{
					...position[accentPosition],
				}}
			/>
		</div>
	);
};
