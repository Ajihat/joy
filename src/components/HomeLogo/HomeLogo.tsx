import homeLogo from 'assets/home-logo.png';

import styles from 'components/HomeLogo/HomeLogo.module.css';

export const HomeLogo = () => {
	return (
		<div className={styles.logo}>
			<img className={styles.img} src={homeLogo} alt='joy-logo' />
		</div>
	);
};
