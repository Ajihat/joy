import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { IdeaMotto } from 'components/IdeaMotto/IdeaMotto';
import { IdeaTiles } from 'components/IdeaTiles/IdeaTiles';
import { Burger } from 'components/Burger/Burger';
import { SideBar } from 'components/SideBar/SideBar';
import { Logo } from 'components/Logo/Logo';
import { Footer } from 'components/Footer/Footer';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { LogoHolder } from 'components/LogoHolder/LogoHolder';

import image1 from 'assets/babycare/Idea/babycare_idea_image1.jpg';
import image2 from 'assets/babycare/Idea/babycare_idea_image2.jpg';
import image3 from 'assets/babycare/Idea/babycare_idea_image3.jpg';

export const Idea = () => {
	return (
		<motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
			<Helmet>
				<title>Joy | Babycare | Idea</title>
				<meta
					name='description'
					content='W Joy Babycare misją jest stworzenie dzieciom przestrzeni do swobodnego tworzenia, by doświadczając stawały się otwartymi i samodzielnymi ludźmi. Zarażamy maluchy naszym zamiłowaniem do muzyki, która towarzyszy nam w każdym momencie dnia i wspiera nas w budowaniu z dziećmi bliskich więzi. Wykorzystujemy otaczającą nas naturę, by jak najpełniej wykorzystać potrzebę ruchu i ciekawość poznawczą dziecka.'
				/>
				<meta property='og:title' content='Joy | Babycare | Idea' />
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
			<PageWrapper>
				<IdeaMotto
					text='Jesteśmy kameralnym miejscem, gdzie panuje przyjazna i troskliwa atmosfera.'
					circleColor='#A9CAE5'
				/>
				<IdeaTiles
					image1={image1}
					color1='#8F3E35'
					text1='Poprzez czułą adaptację wspólnie z Rodzicem wprowadzamy maluszki w nasz wyjątkowy,
żłobkowy świat. Na co dzień dużo przytulamy, bujamy, kołyszemy, bierzemy na ręce, na
kolana, dużo czytamy. Są to naturalne i najwłaściwsze oznaki naszej bliskości i troski, które
dają dzieciom poczucie bezpieczeństwa.'
					circleColor1='#E79A8F'
					image2={image2}
					color2='#313E29'
					text2='Naszą misją jest stworzenie dzieciom przestrzeni do swobodnego tworzenia, by
				doświadczając stawały się otwartymi i samodzielnymi ludźmi. Zarażamy maluchy naszym
				zamiłowaniem do muzyki, która towarzyszy nam w każdym momencie dnia i wspiera nas w
				budowaniu z dziećmi bliskich więzi. Wykorzystujemy otaczającą nas naturę, by jak najpełniej
				wykorzystać potrzebę ruchu i ciekawość poznawczą dziecka.'
					circleColor2='#80AA6E'
					image3={image3}
					color3='#B6842B'
					text3='Już od 15 lat dbamy o to, aby nasze miejsce jak najlepiej spełniało swoją ważną rolę. Nasi
				najmłodsi podopieczni i ich rodzice czują się u nas bezpiecznie, swobodnie i przyjemnie, jak
				w domu.'
					circleColor3='#EFC46E'
					color4='#406780'
					text4='Cieszymy się na nasze wspólne spotkanie!'
					circleColor4='#A9CAE5'
					isRound={false}
				/>
				<Burger site='babycare' />
				<SideBar site='babycare' />
				<LogoHolder>
					<Logo site='babycare' />
				</LogoHolder>
				<Footer color='#A9CAE5' />
			</PageWrapper>
		</motion.div>
	);
};
