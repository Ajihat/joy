import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { Adaptationtiles } from 'components/AdaptationTiles/Adaptationtiles';
import { Logo } from 'components/Logo/Logo';
import { Burger } from 'components/Burger/Burger';
import { SideBar } from 'components/SideBar/SideBar';
import { Footer } from 'components/Footer/Footer';
import { LogoHolder } from 'components/LogoHolder/LogoHolder';

export const Adaptation = () => {
	return (
		<motion.div
			initial={{ opacity: 0.2 }}
			animate={{ opacity: 1 }}
			style={{
				backgroundColor: '#E6CCCA',
			}}
		>
			<Helmet>
				<title>Joy | Babycare | Adaptacja</title>
				<meta
					name='description'
					content='W Joy Babycare poprzez czułą adaptację wspólnie z Rodzicem wprowadzamy maluszki w nasz wyjątkowy, żłobkowy świat. Na co dzień dużo przytulamy, bujamy, kołyszemy, bierzemy na ręce, na kolana, dużo czytamy. Są to naturalne i najwłaściwsze oznaki naszej bliskości i troski, które dają dzieciom poczucie bezpieczeństwa.'
				/>
				<meta property='og:title' content='Joy | Babycare | Adaptacja' />
				<meta
					property='og:description'
					content='W Joy Babycare poprzez czułą adaptację wspólnie z Rodzicem wprowadzamy maluszki w nasz wyjątkowy, żłobkowy świat. Na co dzień dużo przytulamy, bujamy, kołyszemy, bierzemy na ręce, na kolana, dużo czytamy. Są to naturalne i najwłaściwsze oznaki naszej bliskości i troski, które dają dzieciom poczucie bezpieczeństwa.'
				/>
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://raw.githubusercontent.com/Ajihat/joy/main/src/assets/social-logo.jpg'
				/>
				<meta property='og:image' content='http://www.joypreschool.pl/social-media.png' />
			</Helmet>
			<Adaptationtiles />
			<LogoHolder>
				<Logo site='babycare' />
			</LogoHolder>

			<Burger site='babycare' />
			<SideBar site='babycare' />
			<Footer color='#A9CAE5' />
		</motion.div>
	);
};
