import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Holder } from 'components/Holder/Holder';
import { MethodsTile } from 'components/MethodsTile/MethodsTile';
import { Burger } from 'components/Burger/Burger';
import { SideBar } from 'components/SideBar/SideBar';
import { Logo } from 'components/Logo/Logo';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { LogoHolder } from 'components/LogoHolder/LogoHolder';

import headerImg from 'assets/babycare/Team/babycare_team_header.jpg';
import headerImgMobile from 'assets/babycare/Team/babycare_team_header_mobile.jpg';
import pattern from 'assets/decorations/pattern.svg';

import { teamData } from 'data/Babycare/teamData/teamData';

export const Team = () => {
	return (
		<motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
			<Helmet>
				<title>Joy | Babycare | Zespół</title>
				<meta
					name='description'
					content='W Joy Babycare uważamy, że dzieci to osoby, które zasługują na największą uwagę. Pod dobrą opieką troskliwych nauczycieli będą się doskonale rozwijać, dzięki czemu nie tylko dadzą pociechę rodzicom, ale także wiele osiągną w późniejszym życiu.'
				/>
				<meta property='og:title' content='Joy | Babycare | Zespół' />
				<meta
					property='og:description'
					content='W Joy Babycare uważamy, że dzieci to osoby, które zasługują na największą uwagę. Pod dobrą opieką troskliwych nauczycieli będą się doskonale rozwijać, dzięki czemu nie tylko dadzą pociechę rodzicom, ale także wiele osiągną w późniejszym życiu.'
				/>
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://raw.githubusercontent.com/Ajihat/joy/main/src/assets/social-logo.jpg'
				/>
				<meta property='og:image' content='http://www.joypreschool.pl/social-media.png' />
			</Helmet>
			<Header
				color='#80AA6E'
				text='załoga Joy'
				aligment='left'
				image={headerImg}
				imageMobile={headerImgMobile}
				isRound={true}
			/>
			<PageWrapper>
				<Holder>
					<MethodsTile
						image={teamData.images}
						header={null}
						texts={teamData.texts}
						color='#E6CCCA'
						isImgLeft={true}
						accentImg={pattern}
						accentImgPosition='text'
						top='initial'
						left='initial'
						bottom='40px'
						right='40px'
						isRound={true}
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
