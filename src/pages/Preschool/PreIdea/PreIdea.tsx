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

import image1 from 'assets/preschool/PreIdea/preschool_idea_image1.jpg';
import image2 from 'assets/preschool/PreIdea/preschool_idea_image2.jpg';
import image3 from 'assets/preschool/PreIdea/preschool_idea_image3.jpg';

export const PreIdea = () => {
	return (
		<motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
			<Helmet>
				<title>Joy | Preschool | Idea</title>
				<meta
					name='description'
					content='W Joy Preschool naszą ideą jest niestandardowe podejście do edukacji w którym stawiamy na kreatywne podejście i nieszablonowe pomysły. Tworzymy atmosferę zaufania, wzrastania i rozwoju w poczucie bezpieczeństwa i akceptacji. Ważna jest dla nas bliskość i szczerość relacji.'
				/>
				<meta property='og:title' content='Joy | Preschool | Idea' />
				<meta
					property='og:description'
					content='W Joy Preschool naszą ideą jest niestandardowe podejście do edukacji w którym stawiamy na kreatywne podejście i nieszablonowe pomysły. Tworzymy atmosferę zaufania, wzrastania i rozwoju w poczucie bezpieczeństwa i akceptacji. Ważna jest dla nas bliskość i szczerość relacji.'
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
					circleColor='#E79A8F'
				/>
				<IdeaTiles
					image1={image1}
					color1='#80AA6E'
					text1='Jesteśmy miejscem z 15-letnim doświadczeniem w edukacji dzieci w wieku przedszkolnym.
Naszą filozofię kreowaliśmy pod nazwą KidsCollege i tak pewnie zapamięta nas wielu
absolwentów.'
					circleColor1='#D5DCD0'
					image2={image2}
					color2='#8F3E35'
					text2='Naszą ideą jest niestandardowe podejście do edukacji w którym stawiamy na kreatywne
                podejście i nieszablonowe pomysły. Wykorzystujemy do tego prowokacje edukacyjne, dzięki
                którym możemy podążać za dziecięcymi zainteresowaniami. Zachęcamy do swobodnego
                tworzenia, zarażamy zamiłowaniem do muzyki i pasją do literatury, wykorzystujemy
                otaczającą nas naturę, by jak najpełniej wykorzystać potrzebę ruchu i ciekawość poznawczą
                dziecka. Całości dopełnia codzienny kontakt z wielokulturowym zespołem edukatorów i
                zanurzeniem w języku angielskim.'
					circleColor2='#E79A8F'
					image3={image3}
					color3='#B6842B'
					text3='Tworzymy atmosferę zaufania, wzrastania
                i rozwoju w poczucie bezpieczeństwa
                i akceptacji. Ważna jest dla nas bliskość
                i szczerość relacji.'
					circleColor3='#EFC46E'
					color4='#313F29'
					text4='Zapraszamy do Joy Preschool!'
					circleColor4='#80AA6E'
					isRound={true}
				/>
				<Burger site='preschool' />
				<SideBar site='preschool' />
				<Footer color='#80AA6E' />
				<LogoHolder>
					<Logo site='preschool' />
				</LogoHolder>
			</PageWrapper>
		</motion.div>
	);
};
