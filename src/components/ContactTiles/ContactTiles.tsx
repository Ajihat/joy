import { Holder } from 'components/Holder/Holder';

import { ContactTilesProps } from './ContactTiles.types';

import styles from './ContactTiles.module.css';

export const ContactTiles = ({
	image1,
	image2,
	image3,
	image4,
	color,
	logo,
	isRound,
	circleColor,
}: ContactTilesProps) => {
	return (
		<div className={styles.contactTiles}>
			<Holder>
				<h1 className={styles.header}>Nasza baza</h1>
				<div className={styles.inner}>
					<div className={styles.wrapper}>
						<a
							className={styles.link}
							href='https://goo.gl/maps/HqzbTchbXH9fxV2h6'
							style={{
								borderRadius: isRound ? '25px' : '0px',
							}}
						>
							<img className={styles.image} src={image1} alt='placówka-Wilanów' />
							<img className={styles.image} src={image3} alt='placówka-Wilanów' />
						</a>
						<div className={styles.box}>
							<p className={styles.text}>
								<span className={styles.bold}>Wilanów</span>
								<br />
								ul. Jara 12a
								<br />
								02-998 Warszawa <br />
								Wilanów-Zawady
							</p>
							<a className={styles.link} href='tel:{722 305 333}'>
								T: 722 305 333
							</a>
						</div>
					</div>
					<div className={styles.wrapper}>
						<a
							className={styles.link}
							href='https://goo.gl/maps/TzW2cMaTxb2EyZJe9'
							style={{
								borderRadius: isRound ? '25px' : '0px',
							}}
						>
							<img className={styles.image} src={image2} alt='placówka-Wawer' />
							<img className={styles.image} src={image4} alt='placówka-Wilanów' />
						</a>
						<div className={styles.box}>
							<p className={styles.text}>
								<span className={styles.bold}>Wawer</span>
								<br />
								ul. Akwarelowa 22
								<br />
								04-542 Warszawa <br />
								Marysin Wawerski
							</p>
							<a className={styles.link} href='tel:{781 147 711}'>
								T: 781 147 711
							</a>
						</div>
					</div>
					<div className={styles.wrapper}>
						<div
							className={styles.last}
							style={{
								backgroundColor: color,
								borderRadius: isRound ? '25px' : '0px',
							}}
						>
							<img className={styles.logo} src={logo} alt='logo' />
						</div>
						<div className={styles.box_last}>
							<div
								className={styles.circle}
								style={{
									backgroundColor: circleColor,
								}}
							></div>
							<a className={styles.link} href='mailto: kontakt@joypreschool.pl'>
								<span className={styles.bold}>e-mail: kontakt@joypreschool.pl</span>
							</a>
						</div>
					</div>
				</div>
			</Holder>
		</div>
	);
};
