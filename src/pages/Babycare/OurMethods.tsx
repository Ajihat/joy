import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { Header } from 'components/Header/Header';
import { Holder } from 'components/Holder/Holder';
import { MethodsTile } from 'components/MethodsTile/MethodsTile';
import { Footer } from 'components/Footer/Footer';
import { Burger } from 'components/Burger/Burger';
import { SideBar } from 'components/SideBar/SideBar';
import { Logo } from 'components/Logo/Logo';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { LogoHolder } from 'components/LogoHolder/LogoHolder';

import headerImg from 'assets/babycare/OurMethods/babycare_ourmethods_header.jpg';
import headerImgMobile from 'assets/babycare/OurMethods/babycare_ourmethods_header_mobile.jpg';
import img1 from 'assets/babycare/OurMethods/babycare_ourmethods_img1.jpg';
import img2 from 'assets/babycare/OurMethods/babycare_ourmethods_img2.jpg';
import img3 from 'assets/babycare/OurMethods/babycare_ourmethods_img3.jpg';
import img4 from 'assets/babycare/OurMethods/babycare_ourmethods_img4.jpg';
import music from 'assets/decorations/music.svg';
import flower from 'assets/decorations/flower.svg';
import thread from 'assets/decorations/thread.svg';
import conffeti from 'assets/decorations/conffeti.svg';

import { ourMethodsData } from 'data/Babycare/ourMethodsData/ourMethodsData';

export const OurMethods = () => {
	const { hash } = useLocation();

	useEffect(() => {
		const ID = window.location.hash;
		if (ID === '') return;
		const section = document.querySelector(ID);
		const timeoutID = setTimeout(() => {
			if (!section) return;
			section.scrollIntoView(true);
		}, 500);
		return () => clearTimeout(timeoutID);
	}, [hash]);
	return (
		<motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
			<Helmet>
				<title>Joy | Babycare | Nasze metody</title>
				<meta
					name='description'
					content='W Joy Babycare misją jest stworzenie dzieciom przestrzeni do swobodnego tworzenia, by doświadczając stawały się otwartymi i samodzielnymi ludźmi. Zarażamy maluchy naszym zamiłowaniem do muzyki, która towarzyszy nam w każdym momencie dnia i wspiera nas w budowaniu z dziećmi bliskich więzi. Wykorzystujemy otaczającą nas naturę, by jak najpełniej wykorzystać potrzebę ruchu i ciekawość poznawczą dziecka.'
				/>
				<meta property='og:title' content='Joy | Babycare | Nasze metody' />
				<meta
					property='og:description'
					content='W Joy Babycare misją jest stworzenie dzieciom przestrzeni do swobodnego tworzenia, by doświadczając stawały się otwartymi i samodzielnymi ludźmi. Zarażamy maluchy naszym zamiłowaniem do muzyki, która towarzyszy nam w każdym momencie dnia i wspiera nas w budowaniu z dziećmi bliskich więzi. Wykorzystujemy otaczającą nas naturę, by jak najpełniej wykorzystać potrzebę ruchu i ciekawość poznawczą dziecka.'
				/>
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://raw.githubusercontent.com/Ajihat/joy/main/src/assets/social-logo.jpg'
				/>
			</Helmet>
			<Header
				image={headerImg}
				imageMobile={headerImgMobile}
				text='nasze metody'
				color='#E6CCCA'
				aligment='right'
				isRound={false}
			/>
			<PageWrapper>
				<Holder>
					<MethodsTile
						header='zamiłowanie do muzyki'
						image={img1}
						color='#EFC46E'
						texts={ourMethodsData.zamilowanie_do_muzyki}
						isImgLeft={false}
						id='pracownia-muzyczna'
						accentImg={music}
						accentImgPosition='text'
						top='inital'
						left='initial'
						right='5%'
						bottom='5%'
						isRound={false}
						textColor='#1D1D1B'
						paddingBottom='150px'
					/>
					<MethodsTile
						header='natura i ruch'
						image={img2}
						color='#80AA6E'
						texts={ourMethodsData.natura_i_ruch}
						isImgLeft={true}
						id='pracownia-ruchowa'
						accentImg={flower}
						accentImgPosition='text'
						top='inital'
						left='initial'
						right='5%'
						bottom='5%'
						isRound={false}
						textColor='#1D1D1B'
						paddingBottom='150px'
					/>
					<MethodsTile
						header='bliskie więzi'
						image={img3}
						color='#E6CCCA'
						texts={ourMethodsData.bliskie_wiezi}
						isImgLeft={false}
						id='pracownia-relacyjna'
						accentImg={thread}
						accentImgPosition='text'
						top='inital'
						left='initial'
						right='5%'
						bottom='5%'
						isRound={false}
						textColor='#1D1D1B'
						paddingBottom='150px'
					/>
					<MethodsTile
						header='swoboda tworzenia'
						image={img4}
						color='#A9CAE5'
						texts={ourMethodsData.swoboda_tworzenia}
						isImgLeft={true}
						id='pracownia-manualna'
						accentImg={conffeti}
						accentImgPosition='text'
						top='3%'
						left='initial'
						right='5%'
						bottom='initial'
						isRound={false}
						textColor='#1D1D1B'
						paddingBottom='150px'
					/>
				</Holder>
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
