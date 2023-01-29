import { Holder } from 'components/Holder/Holder';

import { FooterProps } from './Footer.types';

import styles from './Footer.module.css';

export const Footer = ({ color }: FooterProps) => {
	return (
		<footer className={styles.footer}>
			<Holder>
				<div className={styles.inner}>
					<div className={styles.box}>
						<p className={styles.text}>
							Wilanów
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
					<div className={styles.box}>
						<p className={styles.text}>
							Wawer
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
					<div className={styles.box_last}>
						<div
							className={styles.circle}
							style={{
								backgroundColor: color,
							}}
						></div>
						<a className={styles.link} href='mailto: kontakt@joypreschool.pl'>
							e-mail: kontakt@joypreschool.pl
						</a>
					</div>
				</div>
			</Holder>
		</footer>
	);
};
