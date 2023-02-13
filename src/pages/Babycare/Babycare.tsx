import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { MainSlider } from 'components/MainSlider/MainSlider';
import { Holder } from 'components/Holder/Holder';
import { SmallTile } from 'components/SmallTile/SmallTile';
import { BigFixedImage } from 'components/BigFixedImage/BigFixedImage';
import { SmallFixedImage } from 'components/SmallFixedImage/SmallFixedImage';
import { MenuTile } from 'components/MenuTile/MenuTile';
import { BottomTiles } from 'components/BottomTiles/BottomTiles';
import { Footer } from 'components/Footer/Footer';
import { Burger } from 'components/Burger/Burger';
import { SideBar } from 'components/SideBar/SideBar';
import { Logo } from 'components/Logo/Logo';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { LogoHolder } from 'components/LogoHolder/LogoHolder';

import { appRoutes } from 'data/appRoutes/appRoutes';

import flower from 'assets/decorations/flower.svg';
import music from 'assets/decorations/music.svg';
import conffeti from 'assets/decorations/conffeti.svg';
import thread from 'assets/decorations/thread.svg';
import vege from 'assets/decorations/vege.png';
import small1 from 'assets/babycare/babycare_small1.jpg';
import fixed1 from 'assets/babycare/babycare_fixed1.jpg';
import small2 from 'assets/babycare/babycare_small2.jpg';
import fixed2 from 'assets/babycare/babycare_fixed2.jpg';
import small3 from 'assets/babycare/babycare_small3.jpg';
import small4 from 'assets/babycare/babycare_small4.jpg';
import fixed3 from 'assets/babycare/babycare_fixed3.jpg';
import menuImg from 'assets/babycare/babycare_menu_img.jpg';
import fixed4 from 'assets/babycare/babycare_fixed4.jpg';
import fixed5 from 'assets/babycare/babycare_fixed5.jpg';

import { mainSliderData } from 'data/Babycare/mainSliderData';

export const Babycare = () => {
	return (
		<motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
			<Helmet>
				<title>Joy | Babycare</title>
				<meta
					name='description'
					content='Witamy w Joy Babycare. Już od 15 lat dbamy o to, aby nasze miejsce jak najlepiej spełniało swoją ważną rolę. Nasi najmłodsi podopieczni i ich rodzice czują się u nas bezpiecznie, swobodnie i przyjemnie, jak w domu.'
				/>
			</Helmet>
			<MainSlider data={mainSliderData} isRound={false} />
			<PageWrapper>
				<Holder additionalClass='row'>
					<SmallTile
						color='#EFC46E'
						header='zamiłowanie do muzyki'
						text='Wspólne muzykowanie relaksuje ale także ośmiela, budzi pozytywne emocje. Cała gama
					muzycznych aktywności zaskakuje przyjemną, lecz niebanalną melodią, różnorodnością
					brzmień i ciekawą dynamiką. W Joy BabyCare każde dziecko znajdzie przestrzeń, w której
					pod czułą opieką będzie mogło rozwijać swoją muzyczną wrażliwość i gust muzyczny.'
						accentImg={music}
						image={small1}
						href='#pracownia-muzyczna'
					/>
					<BigFixedImage image={fixed1} />
				</Holder>
				<Holder additionalClass='row'>
					<BigFixedImage image={fixed2} />
					<SmallTile
						color='#80AA6E'
						header='natura i ruch'
						text='Potrzebę ruchu najmłodszych zaspokajamy w najprostszy i naturalny sposób, wykorzystując
					dziecięcą chęć baraszkowania, spontaniczną zabawę i radość. Chętnie działamy w plenerze,
					doświadczając w kontakcie z otaczającą nas przyrodą.'
						accentImg={flower}
						image={small2}
						href='#pracownia-ruchowa'
					/>
				</Holder>
				<Holder additionalClass='row'>
					<SmallTile
						color='#E6CCCA'
						header='bliskie więzi'
						text='Jesteśmy kameralnym miejscem, gdzie panuje przyjazna i troskliwa atmosfera. Na co dzień
					dużo przytulamy, bujamy, kołyszemy, bierzemy na ręce, na kolana, dużo czytamy.'
						accentImg={conffeti}
						image={small3}
						href='#pracownia-relacyjna'
						additionalClass='last'
					/>
					<SmallFixedImage image={fixed3} />
					<SmallTile
						color='#A8CAE5'
						header='swoboda tworzenia'
						text='Poznajemy siebie i otaczający świat w sposób aktywny i twórczy. Bardzo dużą wagę
					przywiązujemy do samodzielnego odkrywania, doświadczania i tworzenia.'
						accentImg={thread}
						image={small4}
						href='#pracownia-manualna'
						additionalClass='last'
					/>
				</Holder>
				<MenuTile
					image={menuImg}
					color='#F7E1BC'
					accentImg={vege}
					text='Żywimy dzieci w zgodzie z naturą. Jemy warzywa i owoce lokalne, sezonowe, rosnące w
					naszym kraju. Wybieramy żywność jak najmniej przetworzoną, dzięki temu od małego
						rozwijamy zdrowe nawyki żywieniowe.'
					linkText='jadłospis'
					href={appRoutes.babycare_menu}
					textColor='#1D1D1B'
					isRound={false}
				/>
				<BottomTiles
					isRound={false}
					color1='#A8CAE5'
					image1={fixed4}
					text1='Czuła adaptacja to coś, czego rodzice szukają dla swojego maleństwa i dla siebie. To
poznanie się w atmosferze szacunku i zrozumienia, a także kameralność miejsca, łagodność
w relacji i dużo ciepła w kontakcie z maluszkiem.'
					linkText1='czuła adaptacja'
					href1={appRoutes.babycare_adaptation}
					color2='#E6CCCA'
					image2={fixed5}
					text2='Nasza załoga traktuje dzieci z należytą uwagą i szacunkiem, zapewnia im poczucie
				bezpieczeństwa, motywuje maluchy do odkrywania świata i pobudza ich kreatywność.'
					linkText2='załoga Joy'
					href2={appRoutes.babycare_team}
					textColor='#1D1Dsvg'
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
