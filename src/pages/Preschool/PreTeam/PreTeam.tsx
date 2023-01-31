import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { Header } from 'components/Header/Header';
import { Holder } from 'components/Holder/Holder';
import { MethodsTile } from 'components/MethodsTile/MethodsTile';
import { Logo } from 'components/Logo/Logo';
import { Burger } from 'components/Burger/Burger';
import { SideBar } from 'components/SideBar/SideBar';
import { Footer } from 'components/Footer/Footer';

import { teamData } from 'data/Preschool/teamData/teamData';

import headerImgDesktop from 'assets/preschool/PreTeam/preschool_team_header_desktop.jpg';
import headerImgMobile from 'assets/preschool/PreTeam/preschool_team_header_mobile.jpg';

import pattern from 'assets/decorations/pattern.svg';

export const PreTeam = () => {
	return (
		<motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
			<Helmet>
				<title>Joy | Preschool | Zespół</title>
				<meta
					name='description'
					content='W Joy Preschool uważamy, że dzieci to osoby, które zasługują na największą uwagę. Pod dobrą opieką troskliwych nauczycieli będą się doskonale rozwijać, dzięki czemu nie tylko dadzą pociechę rodzicom, ale także wiele osiągną w późniejszym życiu.'
				/>
			</Helmet>
			<Header
				image={headerImgDesktop}
				imageMobile={headerImgMobile}
				text='załoga Joy'
				color='#E79A8F'
				aligment='left'
				isRound={true}
			/>
			<Holder>
				<MethodsTile
					image={teamData.images}
					color='#EFC46E'
					texts={teamData.texts}
					isImgLeft={true}
					accentImg={pattern}
					accentImgPosition='text'
					top='initial'
					left='initial'
					bottom='40px'
					right='40px'
					isRound={true}
					textColor='#1D1D1B'
					header={null}
				/>
			</Holder>
			<Logo site='preschool' />
			<Burger site='preschool' />
			<SideBar site='preschool' />
			<Footer color='#80AA6E' />
		</motion.div>
	);
};
