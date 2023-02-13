import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { Header } from 'components/Header/Header';
import { MenuMotto } from 'components/MenuMotto/MenuMotto';
import { Holder } from 'components/Holder/Holder';
import { FoodTile } from 'components/FoodTile/FoodTile';
import { FoodSlider } from 'components/FoodSlider/FoodSlider';
import { Footer } from 'components/Footer/Footer';
import { Burger } from 'components/Burger/Burger';
import { SideBar } from 'components/SideBar/SideBar';
import { Logo } from 'components/Logo/Logo';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { LogoHolder } from 'components/LogoHolder/LogoHolder';

import headerImg from 'assets/babycare/Menu/babycare_menu_header.jpg';
import headerImgMobile from 'assets/babycare/Menu/babycare_menu_header_mobile.jpg';
import wheat from 'assets/decorations/wheat.png';
import apple from 'assets/decorations/apple.png';
import vege from 'assets/decorations/vege.png';
import sliderImg1 from 'assets/babycare/Menu/babycare_menu_slider1.jpg';
import sliderImg2 from 'assets/babycare/Menu/babycare_menu_slider2.jpg';

import styles from './Menu.module.css';

export const Menu = () => {
	return (
		<motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
			<Helmet>
				<title>Joy | Babycare | Jadłospis</title>
				<meta
					name='description'
					content='W Joy Babycare żywienie dzieci w zgodzie z naturą oznacza powrót do tradycyjnego żywienia, z tą różnicą, że teraz, zgodnie z obecną wiedzą dietetyczną, promuje się produkty mniej tłuste i ogólnie "lżejsze".'
				/>
			</Helmet>
			<Header
				text='żywimy dzieci w zgodzie z naturą'
				color='#A9CAE5'
				image={headerImg}
				imageMobile={headerImgMobile}
				aligment='left'
				isRound={false}
			/>
			<PageWrapper>
				<MenuMotto
					text='Dla nas żywienie dzieci w zgodzie z naturą oznacza powrót do tradycyjnego żywienia, z tą 
            różnicą, że teraz, zgodnie z obecną wiedzą dietetyczną, promuje się produkty mniej tłuste i ogólnie "lżejsze". Zasady naturalnnego żywienia mówią nam:'
				/>
				<Holder>
					<div className={styles.inner}>
						<FoodTile
							color='#D5DCD0'
							text='Jedzmy warzywa i owoce lokalne, sezonowe, rosnące w naszym kraju - są zdrowe, nie przybyły 
                        długiej drogi i nie były traktowane substancjami przedłużającymi ich trwałość, zawierają więc dużo witamin. Wybierajmy najlepiej te z upraw ekologicznych i niepryskane.'
							image={wheat}
							justifyContent='flex-start'
							imageClass='babycare-wheat'
							isRound={false}
						/>
						<FoodTile
							color='#E6CCCA'
							text='Pamiętajmy, że rodzime owoce możemy zjadać w całości, ze skórką, w której jest wiele cennych składników, a z warzyw wykorzystujemy zarówno korzeń, jak i liście (np. pietruszka czy młode buraki).'
							image={vege}
							justifyContent='center'
							imageClass='babycare-vege'
							isRound={false}
						/>
						<FoodTile
							color='#E5EEF1'
							text='Wybierajmy żywność jak najmiej przetworzoną - produkty z mąki pełnoziarnistej, zioła zamiast gotowych przypraw z dużą ilością soli, mięso zwierząt, które nie pochodzą z hodowli przemysłowej.'
							image={apple}
							justifyContent='flex-end'
							imageClass='babycare-apple'
							isRound={false}
						/>
					</div>
				</Holder>
				<FoodSlider
					text='Pamiętajmy, że te zasady są szczególnie ważne w przypadku dzieci, które rozwijają się i rosną.
			 Dlatego naszych podopiecznych żywimy naturalnymi i urozmaiconymi produktami, zapewniamy im zbilansowanną dietę. Dodatkowo dzięki temu od małego wyrobią sobie odpowiednie nawyki żywieniowe.'
					images={[sliderImg1, sliderImg2]}
					boxPosition='left'
					isRound={false}
				/>
				<Footer color='#A9CAE5' />
				<Burger site='babycare' />
				<SideBar site='babycare' />
				<LogoHolder>
					<Logo site='babycare' />
				</LogoHolder>
			</PageWrapper>
		</motion.div>
	);
};
