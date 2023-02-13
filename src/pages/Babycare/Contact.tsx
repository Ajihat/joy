import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { ContactTiles } from 'components/ContactTiles/ContactTiles';
import { Burger } from 'components/Burger/Burger';
import { SideBar } from 'components/SideBar/SideBar';
import { Logo } from 'components/Logo/Logo';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { LogoHolder } from 'components/LogoHolder/LogoHolder';

import img1 from 'assets/babycare/Contact/contact_babycare_img1.jpg';
import img2 from 'assets/babycare/Contact/contact_babycare_img2.jpg';
import img3 from 'assets/babycare/Contact/contact_babycare_img3.jpg';
import img4 from 'assets/babycare/Contact/contact_babycare_img4.jpg';
import babycareLogo from 'assets/babycare/babycare_logo_svg.svg';

export const Contact = () => {
	return (
		<motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
			<PageWrapper>
				<Helmet>
					<title>Joy | Babycare | Kontakt</title>
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
					<meta property='og:title' content='Joy | Babycare | Kontakt' />
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
				<ContactTiles
					image1={img1}
					image2={img2}
					image3={img3}
					image4={img4}
					color='#E5EEF1'
					logo={babycareLogo}
					isRound={false}
					circleColor='#A9CAE5'
				/>
				<Burger site='babycare' />
				<SideBar site='babycare' />
				<LogoHolder>
					<Logo site='babycare' />
				</LogoHolder>
			</PageWrapper>
		</motion.div>
	);
};
