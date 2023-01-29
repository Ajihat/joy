import { IdeaTilesProps } from './IdeaTiles.types';

import styles from './IdeaTiles.module.css';

export const IdeaTiles = ({
	image1,
	color1,
	text1,
	circleColor1,
	image2,
	color2,
	text2,
	circleColor2,
	image3,
	color3,
	text3,
	circleColor3,
	color4,
	text4,
	circleColor4,
	isRound,
}: IdeaTilesProps) => {
	return (
		<div className={styles.tiles}>
			<div className={styles.row}>
				<div
					className={styles.image}
					style={{
						backgroundImage: `url(${image1})`,
						borderRadius: isRound ? '25px' : '0',
					}}
				></div>
				<div
					className={styles.box}
					style={{
						backgroundColor: color1,
						borderRadius: isRound ? '25px' : '0',
					}}
				>
					<p className={styles.text}>{text1}</p>
					<div
						className={styles.circle}
						style={{
							bottom: '40px',
							right: '40px',
							backgroundColor: circleColor1,
						}}
					></div>
				</div>
			</div>
			<div className={styles.row}>
				<div
					className={styles.box}
					style={{
						backgroundColor: color2,
						borderRadius: isRound ? '25px' : '0',
					}}
				>
					<p className={styles.text}>{text2}</p>
					<div
						className={styles.circle}
						style={{
							bottom: '40px',
							left: '40px',
							backgroundColor: circleColor2,
						}}
					></div>
				</div>
				<div
					className={styles.image}
					style={{
						backgroundImage: `url(${image2})`,
						borderRadius: isRound ? '25px' : '0',
					}}
				></div>
			</div>
			<div className={styles.row}>
				<div
					className={`${styles.box} ${styles.boxBottom}`}
					style={{
						backgroundColor: color3,
						justifyContent: 'center',
						borderRadius: isRound ? '25px' : '0',
					}}
				>
					<p className={styles.text}>{text3}</p>
					<div
						className={styles.circle}
						style={{
							top: '40px',
							left: '50%',
							transform: 'translateX(-50%)',
							backgroundColor: circleColor3,
						}}
					></div>
				</div>
				<img
					className={styles.singleImg}
					src={image3}
					alt='idea'
					style={{
						borderRadius: isRound ? '25px' : '0',
					}}
				/>
				<div
					className={`${styles.box} ${styles.boxBottom}`}
					style={{
						backgroundColor: color4,
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: isRound ? '50%' : '0',
						aspectRatio: isRound ? '1/1' : '546/600',
						padding: isRound ? '0' : 'unset',
					}}
				>
					<a className={styles.link} href='mailto: kontakt@baby-care.pl'>
						{text4}
					</a>
					<div
						className={styles.circle}
						style={{
							bottom: isRound ? '8%' : '40px',
							right: isRound ? '8%' : '40px',
							backgroundColor: circleColor4,
						}}
					></div>
				</div>
			</div>
		</div>
	);
};
