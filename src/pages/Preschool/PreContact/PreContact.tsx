import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { ContactTiles } from 'components/ContactTiles/ContactTiles';
import { Burger } from 'components/Burger/Burger';
import { SideBar } from 'components/SideBar/SideBar';
import { Logo } from 'components/Logo/Logo';
import { LogoHolder } from 'components/LogoHolder/LogoHolder';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';

import img1 from 'assets/preschool/PreContact/contact_preschool_img1.jpg';
import img2 from 'assets/preschool/PreContact/contact_preschool_img2.jpg';
import img3 from 'assets/preschool/PreContact/contact_preschool_img3.jpg';
import img4 from 'assets/preschool/PreContact/contact_preschool_img4.jpg';
import preschoolLogo from 'assets/preschool/preschool_logo_svg.svg';

export const PreContact = () => {
	return (
		<motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
			<Helmet>
				<title>Joy | Preschool | Kontakt</title>
				<meta
					name='description'
					content='Zapraszamy do odwiedzenia naszych placówek Joy Preschool: Wilanów
					ul. Jara 12a
					02-998 Warszawa
					Wilanów-Zawady; Wawer
					ul. Akwarelowa 22
					04-542 Warszawa
					Marysin Wawerski'
				/>
				<meta property='og:title' content='Joy | Preschool | Kontakt' />
				<meta
					property='og:description'
					content='Zapraszamy do odwiedzenia naszych placówek Joy Preschool: Wilanów
					ul. Jara 12a
					02-998 Warszawa
					Wilanów-Zawady; Wawer
					ul. Akwarelowa 22
					04-542 Warszawa
					Marysin Wawerski'
				/>
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://raw.githubusercontent.com/Ajihat/joy/main/src/assets/social-logo.jpg'
				/>
			</Helmet>
			<PageWrapper>
				<ContactTiles
					image1={img1}
					image2={img2}
					image3={img3}
					image4={img4}
					color='#D5DCD0'
					logo={preschoolLogo}
					isRound={true}
					circleColor='#80AA6E'
				/>
				<Burger site='preschool' />
				<SideBar site='preschool' />
				<LogoHolder>
					<Logo site='preschool' />
				</LogoHolder>
			</PageWrapper>
		</motion.div>
	);
};
