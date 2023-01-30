import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { Header } from 'components/Header/Header';
import { Holder } from 'components/Holder/Holder';
import { MethodsTile } from 'components/MethodsTile/MethodsTile';
import { English } from 'components/English/English';
import { Footer } from 'components/Footer/Footer';
import { Burger } from 'components/Burger/Burger';
import { SideBar } from 'components/SideBar/SideBar';
import { Logo } from 'components/Logo/Logo';

import { ourMethodsData } from 'data/Preschool/ourMethodsData/ourMethodsData';

import headerImg from 'assets/preschool/PreOurmethods/preschool_ourmethods_header.jpg';
import headerImgMobile from 'assets/preschool/PreOurmethods/preschool_ourmethods_header_mobile.jpg';

import img1 from 'assets/preschool/PreOurmethods/preschool_ourmethods_img1.jpg';
import music from 'assets/decorations/music.svg';
import img2 from 'assets/preschool/PreOurmethods/preschool_ourmethods_img2.jpg';
import flower from 'assets/decorations/flower.svg';
import img3 from 'assets/preschool/PreOurmethods/preschool_ourmethods_img3.jpg';
import thread from 'assets/decorations/thread.svg';
import img4 from 'assets/preschool/PreOurmethods/preschool_ourmethods_img4.jpg';
import rays from 'assets/decorations/rays.svg';
import img5 from 'assets/preschool/PreOurmethods/preschool_ourmethods_img5.jpg';
import book from 'assets/decorations/book.svg';
import img6 from 'assets/preschool/PreOurmethods/preschool_ourmethods_img6.jpg';
import conffeti from 'assets/decorations/conffeti.svg';

export const PreOurmethods = () => {
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
				<title>Joy | Preschool | Nasze metody</title>
				<meta
					name='description'
					content='Naszą ideą jest niestandardowe podejście do edukacji w którym stawiamy na kreatywne podejście i nieszablonowe pomysły. Wykorzystujemy do tego prowokacje edukacyjne, , zarażamy zamiłowaniem do muzyki i pasją do literatury, wykorzystujemy otaczającą nas naturę, by jak najpełniej wykorzystać potrzebę ruchu i ciekawość poznawczą dziecka. Całości dopełnia codzienny kontakt z wielokulturowym zespołem edukatorów i zanurzeniem w języku angielskim.'
				/>
			</Helmet>
			<Header
				image={headerImg}
				imageMobile={headerImgMobile}
				text='nasze metody'
				color='#E6CCCA'
				aligment='right'
				isRound={true}
			/>
			<Holder>
				<MethodsTile
					image={img1}
					header='zamiłowanie do muzyki'
					color='#8F3E35'
					texts={ourMethodsData.zamilowanie_do_muzyki}
					isImgLeft={false}
					accentImg={music}
					isRound={true}
					textColor='white'
					accentImgPosition='image'
					top='initial'
					left='5%'
					bottom='5%'
					right='initial'
					id='pracownia-muzyczna'
				/>
				<MethodsTile
					image={img2}
					header='natura i ruch'
					color='#313F29'
					texts={ourMethodsData.natura_i_ruch}
					isImgLeft={true}
					accentImg={flower}
					isRound={true}
					textColor='white'
					accentImgPosition='image'
					top='5%'
					left='initial'
					bottom='initial'
					right='5%'
					id='pracownia-ruchowa'
				/>
				<MethodsTile
					image={img3}
					header='swoboda tworzenia'
					color='#A9CAE5'
					texts={ourMethodsData.swoboda_tworzenia}
					isImgLeft={false}
					accentImg={thread}
					isRound={true}
					textColor='white'
					accentImgPosition='image'
					top='5%'
					left='5%'
					bottom='initial'
					right='initial'
					id='pracownia-manualna'
				/>
				<MethodsTile
					image={img4}
					header='prowokacje edukacyjne'
					color='#B5842B'
					texts={ourMethodsData.prowokacje_edukacyjne}
					isImgLeft={true}
					accentImg={rays}
					isRound={true}
					textColor='white'
					accentImgPosition='image'
					top='5%'
					left='5%'
					bottom='initial'
					right='initial'
					id='prowokacje-edukacyjne'
				/>
				<MethodsTile
					image={img5}
					header='pasja do literatury'
					color='#416780'
					texts={ourMethodsData.pasja_do_literatury}
					isImgLeft={false}
					accentImg={book}
					isRound={true}
					textColor='white'
					accentImgPosition='image'
					top='5%'
					left='5%'
					bottom='initial'
					right='initial'
					id='pracownia-literacka'
				/>
				<MethodsTile
					image={img6}
					header='bliskie więzi'
					color='#E79A8F'
					texts={ourMethodsData.bliskie_wiezi}
					isImgLeft={true}
					accentImg={conffeti}
					isRound={true}
					textColor='white'
					accentImgPosition='image'
					top='5%'
					left='initial'
					bottom='initial'
					right='5%'
					id='pracownia-relacyjna'
				/>
			</Holder>
			<English />
			<Burger site='preschool' />
			<SideBar site='preschool' />
			<Logo site='preschool' />
			<Footer color='#80AA6E' />
		</motion.div>
	);
};
