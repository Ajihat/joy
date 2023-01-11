import { HomeTile } from 'components/HomeTile/HomeTile';

import preschoolImg from 'assets/preschool-tile.jpg';
import babycareImg from 'assets/babycare-tile.jpg';

import styles from 'pages/Home/Home.module.css';

export const Home = () => {
	return (
		<div className={styles.home}>
			<HomeTile text='joy preschool' color='#313F29' linkUrl='asads' imageName={preschoolImg} />
			<HomeTile text='joy babycare' color='#416780' linkUrl='asads' imageName={babycareImg} />
		</div>
	);
};
