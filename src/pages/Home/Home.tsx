import { HomeTile } from 'components/HomeTile/HomeTile';
import { HomeLogo } from 'components/HomeLogo/HomeLogo';

import preschoolImg from 'assets/preschool-tile.jpg';
import babycareImg from 'assets/babycare-tile.jpg';

import { appRoutes } from 'data/appRoutes/appRoutes';

import styles from 'pages/Home/Home.module.css';

export const Home = () => {
	return (
		<div className={styles.home}>
			<HomeLogo />
			<HomeTile text='joy preschool' color='#313F29' linkUrl={appRoutes.preschool} image={preschoolImg} />
			<HomeTile text='joy babycare' color='#416780' linkUrl={appRoutes.babycare} image={babycareImg} />
		</div>
	);
};
