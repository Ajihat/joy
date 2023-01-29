import { motion } from 'framer-motion';

import { Adaptationtiles } from 'components/AdaptationTiles/Adaptationtiles';
import { Logo } from 'components/Logo/Logo';
import { Burger } from 'components/Burger/Burger';
import { SideBar } from 'components/SideBar/SideBar';
import { Footer } from 'components/Footer/Footer';

export const Adaptation = () => {
	return (
		<motion.div
			initial={{ opacity: 0.2 }}
			animate={{ opacity: 1 }}
			style={{
				backgroundColor: '#E6CCCA',
			}}
		>
			<Adaptationtiles />
			<Logo site='babycare' />
			<Burger site='babycare' />
			<SideBar site='babycare' />
			<Footer color='#A9CAE5' />
		</motion.div>
	);
};
