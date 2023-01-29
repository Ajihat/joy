import { motion } from 'framer-motion';

import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Holder } from 'components/Holder/Holder';
import { MethodsTile } from 'components/MethodsTile/MethodsTile';
import { Burger } from 'components/Burger/Burger';
import { SideBar } from 'components/SideBar/SideBar';
import { Logo } from 'components/Logo/Logo';

import headerImg from 'assets/babycare/Team/babycare_team_header.jpg';
import headerImgMobile from 'assets/babycare/Team/babycare_team_header_mobile.jpg';
import pattern from 'assets/decorations/pattern.svg';

import { teamData } from 'data/Babycare/teamData/teamData';

export const Team = () => {
	return (
		<motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
			<Header
				color='#80AA6E'
				text='Załoga Joy'
				aligment='left'
				image={headerImg}
				imageMobile={headerImgMobile}
				isRound={false}
			/>
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
					isRound={false}
					textColor='#1D1D1B'
				/>
			</Holder>
			<Footer color='#A9CAE5' />
			<Burger site='babycare' />
			<SideBar site='babycare' />
			<Logo site='babycare' />
		</motion.div>
	);
};
