import { motion } from 'framer-motion';

import { ContactTiles } from 'components/ContactTiles/ContactTiles';
import { Burger } from 'components/Burger/Burger';
import { SideBar } from 'components/SideBar/SideBar';
import { Logo } from 'components/Logo/Logo';

import img1 from 'assets/babycare/Contact/contact_babycare_img1.jpg';
import img2 from 'assets/babycare/Contact/contact_babycare_img2.jpg';
import babycareLogo from 'assets/babycare/babycare_logo_svg.svg';

export const Contact = () => {
	return (
		<motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
			<ContactTiles
				image1={img1}
				image2={img2}
				color='#E5EEF1'
				logo={babycareLogo}
				isRound={false}
				circleColor='#A9CAE5'
			/>
			<Burger site='babycare' />
			<SideBar site='babycare' />
			<Logo site='babycare' />
		</motion.div>
	);
};
