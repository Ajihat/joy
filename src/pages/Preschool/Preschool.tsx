import { motion } from 'framer-motion';

import { MainSlider } from 'components/MainSlider/MainSlider';
import { PreschoolTiles } from 'components/PreschoolTiles/PreschoolTiles';
import { MenuTile } from 'components/MenuTile/MenuTile';
import { BottomTiles } from 'components/BottomTiles/BottomTiles';
import { Footer } from 'components/Footer/Footer';
import { Burger } from 'components/Burger/Burger';
import { SideBar } from 'components/SideBar/SideBar';
import { Logo } from 'components/Logo/Logo';

import { mainSliderData } from 'data/Preschool/mainSilderData';

import menuImg from 'assets/preschool/preschool_menu.jpg';
import pattern from 'assets/decorations/pattern.svg';
import bottomImg1 from 'assets/preschool/preschool_bottom_img1.jpg';
import bottomImg2 from 'assets/preschool/preschool_bottom_img2.jpg';

import { appRoutes } from 'data/appRoutes/appRoutes';

import styles from 'pages/Preschool/Preschool.module.css';

export const Preschool = () => {
	return (
		<motion.div className={styles.preschool} initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
			<MainSlider data={mainSliderData} isRound={true} />
			<PreschoolTiles />
			<MenuTile
				image={menuImg}
				color='#E79A8F'
				accentImg={pattern}
				text='Nasza załoga traktuje dzieci z należytą uwagą i szacunkiem, zapewnia im poczucie
bezpieczeństwa, motywuje maluchy do odkrywania świata i pobudza ich kreatywność.'
				href={appRoutes.preschool_team}
				linkText='załoga Joy'
				textColor='white'
				isRound={true}
			/>
			<BottomTiles
				isRound={true}
				image1={bottomImg1}
				color1='#406780'
				text1='Żywimy dzieci w zgodzie z naturą. Jemy warzywa i owoce lokalne, sezonowe, rosnące w
naszym kraju. Wybieramy żywność jak najmniej przetworzoną, dzięki temu od małego
rozwijamy zdrowe nawyki żywieniowe.'
				linkText1='wyżywienie'
				href1={appRoutes.preschool_menu}
				image2={bottomImg2}
				color2='#8F3E35'
				text2='Cieszymy się na nasze wspólne spotkanie'
				linkText2='nasza baza'
				href2={appRoutes.preschool_contact}
				textColor='white'
			/>
			<Burger site='preschool' />
			<SideBar site='preschool' />
			<Footer color='#80AA6E' />
			<Logo site='preschool' />
		</motion.div>
	);
};
