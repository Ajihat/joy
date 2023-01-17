import { Header } from 'components/Header/Header';
import { Holder } from 'components/Holder/Holder';
import { MethodsTile } from 'components/MethodsTile/MethodsTile';
import { Footer } from 'components/Footer/Footer';

import headerImg from 'assets/babycare/OurMethods/babycare_ourmethods_header.jpg';
import img1 from 'assets/babycare/OurMethods/babycare_ourmethods_img1.jpg';
import img2 from 'assets/babycare/OurMethods/babycare_ourmethods_img2.jpg';
import img3 from 'assets/babycare/OurMethods/babycare_ourmethods_img3.jpg';
import img4 from 'assets/babycare/OurMethods/babycare_ourmethods_img4.jpg';
import music from 'assets/decorations/music.png';
import flower from 'assets/decorations/flower.png';
import thread from 'assets/decorations/thread.png';
import conffeti from 'assets/decorations/conffeti.png';

import { ourMethodsData } from 'data/Babycare/ourMethodsData/ourMethodsData';

export const OurMethods = () => {
	return (
		<div>
			<Header image={headerImg} text='nasze metody' color='#E6CCCA' aligment='right' />
			<Holder>
				<MethodsTile
					header='Zamiłowanie do muzyki'
					image={img1}
					color='#EFC46E'
					texts={ourMethodsData.zamilowanie_do_muzyki}
					isImgLeft={false}
					id='1'
					accentImg={music}
					accentImgPosition='bottom'
				/>
				<MethodsTile
					header='Natura i ruch'
					image={img2}
					color='#80AA6E'
					texts={ourMethodsData.natura_i_ruch}
					isImgLeft={true}
					id='2'
					accentImg={flower}
					accentImgPosition='bottom'
				/>
				<MethodsTile
					header='Bliskie więzi'
					image={img3}
					color='#E6CCCA'
					texts={ourMethodsData.bliskie_wiezi}
					isImgLeft={false}
					id='3'
					accentImg={thread}
					accentImgPosition='bottom'
				/>
				<MethodsTile
					header='Swoboda tworzenia'
					image={img4}
					color='#A9CAE5'
					texts={ourMethodsData.swoboda_tworzenia}
					isImgLeft={true}
					id='4'
					accentImg={conffeti}
					accentImgPosition='top'
				/>
			</Holder>
			<Footer />
		</div>
	);
};
