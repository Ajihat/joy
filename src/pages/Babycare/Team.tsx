import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Holder } from 'components/Holder/Holder';
import { MethodsTile } from 'components/MethodsTile/MethodsTile';

import headerImg from 'assets/babycare/Team/babycare_team_header.jpg';
import pattern from 'assets/decorations/pattern.png';

import { teamData } from 'data/Babycare/teamData/teamData';

export const Team = () => {
	console.log(typeof window.location.pathname);
	return (
		<div>
			<Header color='#80AA6E' text='Załoga Joy' aligment='left' image={headerImg} />
			<Holder>
				<MethodsTile
					image={teamData.images}
					header={null}
					texts={teamData.texts}
					color='#E6CCCA'
					isImgLeft={true}
					accentImg={pattern}
					accentImgPosition='bottom'
				/>
			</Holder>
			<Footer />
		</div>
	);
};
