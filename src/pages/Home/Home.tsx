import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { HomeTile } from 'components/HomeTile/HomeTile';
import { HomeLogo } from 'components/HomeLogo/HomeLogo';

import preschoolImg from 'assets/preschool-tile.jpg';
import babycareImg from 'assets/babycare-tile.jpg';

import { appRoutes } from 'data/appRoutes/appRoutes';

import styles from 'pages/Home/Home.module.css';

export const Home = () => {
	return (
		<motion.div className={styles.home} initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
			<Helmet>
				<title>Joy | Preschool & Babycare</title>
				<meta
					name='description'
					content='Witamy w Joy Preschool & Babycare. Jesteśmy miejscem z 15-letnim doświadczeniem w edukacji dzieci w wieku przedszkolnym i żłobkowym'
				/>
			</Helmet>
			<HomeLogo />
			<HomeTile text='joy preschool' color='#313F29' linkUrl={appRoutes.preschool} image={preschoolImg} />
			<HomeTile text='joy babycare' color='#416780' linkUrl={appRoutes.babycare} image={babycareImg} />
		</motion.div>
	);
};
