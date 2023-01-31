import { LinkButton } from 'components/LinkButton/LinkButton';

import { MenuTileProps } from './MenuTile.types';

import redCircle from 'assets/decorations/red-circle.svg';
import blueCircle from 'assets/decorations/adaptation_circle.svg';
import blueTriangle from 'assets/decorations/blue-triangle.svg';
import greenArc from 'assets/decorations/green-arc.svg';

import styles from './MenuTile.module.css';

export const MenuTile = ({ image, color, accentImg, text, href, linkText, textColor, isRound }: MenuTileProps) => {
	return (
		<div
			className={styles.tile}
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<div
				className={styles.box}
				style={{
					backgroundColor: color,
					borderRadius: isRound ? '25px' : '0',
				}}
			>
				<p
					className={styles.text}
					style={{
						color: textColor,
					}}
				>
					{text}
				</p>
				<img className={styles.accent} src={accentImg} alt='warzywa' />
				<img className={styles.circle} src={isRound ? blueCircle : redCircle} alt='dekoracja' />
				<div className={styles.holder}>
					<LinkButton linkText={linkText} href={href} textColor={textColor} />
				</div>
			</div>
			<img className={styles.triangle} src={blueTriangle} alt='dekoracja' />
			<img className={styles.arc} src={greenArc} alt='dekoracja' />
		</div>
	);
};
