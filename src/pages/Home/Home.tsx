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
					content='Witamy w Joy Preschool & Babycare. To przyjazne miejsce dla Twojego dziecka.'
				/>
				<meta property='og:title' content='Joy | Preschool & Babycare' />
				<meta
					property='og:description'
					content='Witamy w Joy Preschool & Babycare. To przyjazne miejsce dla Twojego dziecka.'
				/>
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
				/>
				<meta property='og:image:width' content='390' />
				<meta property='og:image:height' content='215' />
			</Helmet>
			<div className={styles.logoHolder}>
				<HomeLogo />
			</div>
			<div className={styles.inner}>
				<HomeTile text='joy babycare' color='#416780' linkUrl={appRoutes.babycare} image={babycareImg} />
				<HomeTile text='joy preschool' color='#313F29' linkUrl={appRoutes.preschool} image={preschoolImg} />
			</div>
		</motion.div>
	);
};
