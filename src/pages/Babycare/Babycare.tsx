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
import vege from 'assets/decorations/vege.svg';
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
					content='Witamy w Joy Babycare. Ju?? od 15 lat dbamy o to, aby nasze miejsce jak najlepiej spe??nia??o swoj?? wa??n?? rol??. Nasi najm??odsi podopieczni i ich rodzice czuj?? si?? u nas bezpiecznie, swobodnie i przyjemnie, jak w domu.'
				/>
				<meta property='og:title' content='Joy | Babycare' />
				<meta
					property='og:description'
					content='Witamy w Joy Babycare. Ju?? od 15 lat dbamy o to, aby nasze miejsce jak najlepiej spe??nia??o swoj?? wa??n?? rol??. Nasi najm??odsi podopieczni i ich rodzice czuj?? si?? u nas bezpiecznie, swobodnie i przyjemnie, jak w domu.'
				/>
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://raw.githubusercontent.com/Ajihat/joy/main/src/assets/social-logo.jpg'
				/>
				<meta property='og:image' content='http://www.joypreschool.pl/social-media.png' />
			</Helmet>
			<MainSlider data={mainSliderData} isRound={true} />
			<PageWrapper>
				<Holder additionalClass='row'>
					<SmallTile
						color='#EFC46E'
						header='zami??owanie do muzyki'
						text='Wsp??lne muzykowanie relaksuje ale tak??e o??miela, budzi pozytywne emocje. Ca??a gama
					muzycznych aktywno??ci zaskakuje przyjemn??, lecz niebanaln?? melodi??, r????norodno??ci??
					brzmie?? i ciekaw?? dynamik??. W Joy Babycare ka??de dziecko znajdzie przestrze??, w kt??rej
					pod czu???? opiek?? b??dzie mog??o rozwija?? swoj?? muzyczn?? wra??liwo???? i gust muzyczny.'
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
						text='Potrzeb?? ruchu najm??odszych zaspokajamy w najprostszy i naturalny spos??b, wykorzystuj??c
					dzieci??c?? ch???? baraszkowania, spontaniczn?? zabaw?? i rado????. Ch??tnie dzia??amy w plenerze,
					do??wiadczaj??c w kontakcie z otaczaj??c?? nas przyrod??.'
						accentImg={flower}
						image={small2}
						href='#pracownia-ruchowa'
					/>
				</Holder>
				<Holder additionalClass='row'>
					<SmallTile
						color='#E6CCCA'
						header='bliskie wi??zi'
						text='Jeste??my kameralnym miejscem, gdzie panuje przyjazna i troskliwa atmosfera. Na co dzie??
					du??o przytulamy, bujamy, ko??yszemy, bierzemy na r??ce, na kolana, du??o czytamy.'
						accentImg={conffeti}
						image={small3}
						href='#pracownia-relacyjna'
						additionalClass='last'
					/>
					<SmallFixedImage image={fixed3} />
					<SmallTile
						color='#A8CAE5'
						header='swoboda tworzenia'
						text='Poznajemy siebie i otaczaj??cy ??wiat w spos??b aktywny i tw??rczy. Bardzo du???? wag??
					przywi??zujemy do samodzielnego odkrywania, do??wiadczania i tworzenia.'
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
					text='??ywimy dzieci w zgodzie z natur??. Jemy warzywa i owoce lokalne, sezonowe, rosn??ce w
					naszym kraju. Wybieramy ??ywno???? jak najmniej przetworzon??, dzi??ki temu od ma??ego
						rozwijamy zdrowe nawyki ??ywieniowe.'
					linkText='jad??ospis'
					href={appRoutes.babycare_menu}
					textColor='#1D1D1B'
					isRound={true}
				/>
				<BottomTiles
					isRound={true}
					isCentered={false}
					color1='#A8CAE5'
					image1={fixed4}
					text1='Czu??a adaptacja to co??, czego rodzice szukaj?? dla swojego male??stwa i dla siebie. To
poznanie si?? w atmosferze szacunku i zrozumienia, a tak??e kameralno???? miejsca, ??agodno????
w relacji i du??o ciep??a w kontakcie z maluszkiem.'
					linkText1='czu??a adaptacja'
					href1={appRoutes.babycare_adaptation}
					color2='#E6CCCA'
					image2={fixed5}
					text2='Nasza za??oga traktuje dzieci z nale??yt?? uwag?? i szacunkiem, zapewnia im poczucie
				bezpiecze??stwa, motywuje maluchy do odkrywania ??wiata i pobudza ich kreatywno????.'
					linkText2='za??oga Joy'
					href2={appRoutes.babycare_team}
					textColor='#1D1Dsvg'
					backgroundPosition='40% 75%'
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
