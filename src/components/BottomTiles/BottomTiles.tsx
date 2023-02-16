import { LinkButton } from 'components/LinkButton/LinkButton';

import { BottomTilesProps } from './BottomTiles.types';

import heart from 'assets/decorations/serce.svg';

import styles from './BottomTiles.module.css';

export const BottomTiles = ({
	isRound,
	isCentered,
	image1,
	color1,
	text1,
	linkText1,
	href1,
	image2,
	color2,
	text2,
	linkText2,
	href2,
	textColor,
}: BottomTilesProps) => {
	return (
		<div className={styles.tiles}>
			<div className={styles.row}>
				<div
					className={styles.image}
					style={{
						borderRadius: isRound ? '25px' : '0',
						backgroundImage: `url(${image1})`,
					}}
				></div>
				<div
					className={styles.box}
					style={{
						borderRadius: isRound ? '25px' : '0',
						backgroundColor: color1,
					}}
				>
					<p className={styles.text} style={{ color: textColor }}>
						{text1}
					</p>
					<div className={styles.holder}>
						<LinkButton linkText={linkText1} href={href1} textColor={textColor} />
					</div>
				</div>
			</div>
			<div className={styles.row}>
				{!isCentered && (
					<div
						className={styles.box}
						style={{
							borderRadius: isRound ? '25px' : '0',
							backgroundColor: color2,
						}}
					>
						<p className={styles.text} style={{ color: textColor }}>
							{text2}
						</p>
						<div className={styles.holder}>
							<LinkButton linkText={linkText2} href={href2} textColor={textColor} />
						</div>
					</div>
				)}
				{isCentered && (
					<div
						className={styles.boxCentered}
						style={{
							borderRadius: isRound ? '25px' : '0',
							backgroundColor: color2,
						}}
					>
						<p className={styles.textCentered} style={{ color: textColor }}>
							{text2}
							<img className={styles.heart} src={heart} alt='serce' />
						</p>
						<div className={styles.holder}>
							<LinkButton linkText={linkText2} href={href2} textColor={textColor} />
						</div>
					</div>
				)}
				<div
					className={`${styles.image} ${styles.right}`}
					style={{
						borderRadius: isRound ? '25px' : '0',
						backgroundImage: `url(${image2})`,
					}}
				></div>
			</div>
		</div>
	);
};
