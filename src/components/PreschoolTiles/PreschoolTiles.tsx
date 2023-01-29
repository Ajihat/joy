import { Link } from 'react-router-dom';

import styles from './PreschoolTiles.module.css';

import tileImg1 from 'assets/preschool/preschool_tile1.jpg';
import tileImg2 from 'assets/preschool/preschool_tile2.jpg';
import tileImg3 from 'assets/preschool/preschool_tile3.jpg';
import tileImg4 from 'assets/preschool/preschool_tile4.jpg';
import tileImg5 from 'assets/preschool/preschool_tile5.jpg';
import tileImg6 from 'assets/preschool/preschool_tile6.jpg';
import tileImg7 from 'assets/preschool/preschool_tile7.jpg';
import tileImg8 from 'assets/preschool/preschool_tile8.jpg';
import tileImg9 from 'assets/preschool/preschool_tile9.jpg';
import tileImg10 from 'assets/preschool/preschool_tile10.jpg';
import tileImg11 from 'assets/preschool/preschool_tile11.jpg';

import music from 'assets/decorations/music.svg';
import flower from 'assets/decorations/flower.svg';
import thread from 'assets/decorations/thread.svg';
import rays from 'assets/decorations/rays.svg';
import book from 'assets/decorations/book.svg';
import conffeti from 'assets/decorations/conffeti.svg';
import chat from 'assets/decorations/chat.svg';

import { appRoutes } from 'data/appRoutes/appRoutes';

export const PreschoolTiles = () => {
	return (
		<div className={styles.container}>
			<article
				className={styles.tile}
				style={{
					backgroundColor: 'rgb(143,62,53)',
				}}
			>
				<img className={styles.image} src={tileImg1} alt='zamiłowanie do muzyki' />
				<div className={styles.inner}>
					<img className={styles.accent} src={music} alt='muzyka' />
					<div className={styles.holder}>
						<h2 className={styles.header}>zamiłowanie do muzyki</h2>
						<p className={styles.text}>
							Lubimy muzykować w grupie, bo daje nam to radość i pozwala uwolnić ekspresję tworzenia.
							Utwory dobieramy ze szczególną uważnością rozbudzając gust muzyczny i otwierając dziecięce
							umysły na różnorodność dźwięków i barw muzyki.
						</p>
					</div>
					<Link className={styles.link} to={appRoutes.preschool_our_methods + '#pracownia-muzyczna'}>
						więcej
					</Link>
				</div>
			</article>
			<div
				className={styles.imageTile}
				style={{
					backgroundImage: `url(${tileImg2})`,
				}}
			></div>
			<article
				className={styles.tile}
				style={{
					backgroundColor: '#313E29',
				}}
			>
				<img className={styles.image} src={tileImg3} alt='zamiłowanie do muzyki' />
				<div className={styles.inner}>
					<img className={styles.accent} src={flower} alt='muzyka' />
					<div className={styles.holder}>
						<h2 className={styles.header}>natura i ruch</h2>
						<p className={styles.text}>
							Nasze działania edukacyjne często przenosimy w plener. Nie zapominamy o spacerach do
							pobliskiego lasu, gdzie na łonie natury poznajemy tajemnice przyrody. Poprzez ruch wpływamy
							na prawidłową budowę i postawę ciała, uczymy walki z przeciwnościami i współpracy.
						</p>
					</div>
					<Link className={styles.link} to={appRoutes.preschool_our_methods + '#pracownia-ruchowa'}>
						więcej
					</Link>
				</div>
			</article>
			<div
				className={styles.imageTile}
				style={{
					backgroundImage: `url(${tileImg4})`,
				}}
			></div>
			<article
				className={styles.tile}
				style={{
					backgroundColor: '#A8CAE5',
				}}
			>
				<img className={styles.image} src={tileImg5} alt='swoboda tworzenia' />
				<div className={styles.inner}>
					<img className={styles.accent} src={thread} alt='muzyka' />
					<div className={styles.holder}>
						<h2 className={styles.header}>swoboda tworzenia</h2>
						<p className={styles.text}>
							Na co dzień dużo lepimy, tworzymy i malujemy na dużych płaszczyznach odkrywając twórczy
							potencjał dziecka. W akcie tworzenia nasze sale zamieniają się w pracownie rękodzieła. Każdy
							wytwór jest unikatowy, ponieważ od początku do końca powstaje według zamysłu dziecka.
						</p>
					</div>
					<Link className={styles.link} to={appRoutes.preschool_our_methods + '#pracownia-manualna'}>
						więcej
					</Link>
				</div>
			</article>
			<article
				className={styles.tile}
				style={{
					backgroundColor: '#B6842B',
				}}
			>
				<img className={styles.image} src={tileImg6} alt='prowokacje edukacyjne' />
				<div className={styles.inner}>
					<img className={styles.accent} src={rays} alt='muzyka' />
					<div className={styles.holder}>
						<h2 className={styles.header}>prowokacje edukacyjne</h2>
						<p className={styles.text}>
							Do edukacji podchodzimy niestandardowo. Stawiamy na kreatywne myślenie i nieszablonowe
							pomysły. Podążamy za dziecięcymi zainteresowaniami tworząc prowokacje edukacyjne.
						</p>
					</div>
					<Link className={styles.link} to={appRoutes.preschool_our_methods + '#prowokacje-edukacyjne'}>
						więcej
					</Link>
				</div>
			</article>
			<article
				className={styles.tile}
				style={{
					backgroundColor: '#406780',
				}}
			>
				<img className={styles.image} src={tileImg7} alt='pasja do literatury' />
				<div className={styles.inner}>
					<img className={styles.accent} src={book} alt='muzyka' />
					<div className={styles.holder}>
						<h2 className={styles.header}>pasja do literatury</h2>
						<p className={styles.text}>
							Dzięki książkom poznajemy najdalsze zakątki świata, przenosimy się w przestrzeń pełną
							fantazji i marzeń, dotykamy rzeczy nienamacalnych, odkrywamy najgłębsze tajemnice. Czytamy
							dzieciom i z dziećmi, oglądamy ilustracje w książkach, które także niosą ze sobą niezwykłe
							historie, sami tworzymy opowiadania, albumy czy komiksy.
						</p>
					</div>
					<Link className={styles.link} to={appRoutes.preschool_our_methods + '#pracownia-literacka'}>
						więcej
					</Link>
				</div>
			</article>
			<article
				className={styles.tile}
				style={{
					backgroundColor: '#E79A8F',
				}}
			>
				<img className={styles.image} src={tileImg8} alt='bliskie więzi' />
				<div className={styles.inner}>
					<img className={styles.accent} src={conffeti} alt='muzyka' />
					<div className={styles.holder}>
						<h2 className={styles.header}>bliskie więzi</h2>
						<p className={styles.text}>
							Zaspokajanie potrzeb tu i teraz zapewnia bliskość i szczerość relacji. Tworzymy atmosferę
							zaufania, wzrastania i rozwoju w poczuciu bezpieczeństwa i akceptacji, inspirując się
							pedagogiką Emilio Reggio.
						</p>
					</div>
					<Link className={styles.link} to={appRoutes.preschool_our_methods + '#pracownia-relacyjna'}>
						więcej
					</Link>
				</div>
			</article>
			<div
				className={styles.imageTile}
				style={{
					backgroundImage: `url(${tileImg9})`,
				}}
			></div>
			<div
				className={styles.imageTile}
				style={{
					backgroundImage: `url(${tileImg10})`,
				}}
			></div>
			<div
				className={styles.imageTile}
				style={{
					backgroundImage: `url(${tileImg11})`,
				}}
			></div>
			<article
				className={styles.tile}
				style={{
					backgroundColor: '#80AA6E',
				}}
			>
				<img className={styles.image} src={tileImg8} alt='zanurzenie w języku angielskim' />
				<div className={styles.inner}>
					<img className={styles.accent} src={chat} alt='muzyka' />
					<div className={styles.holder}>
						<h2 className={styles.header}>zanurzenie w języku angielskim</h2>
						<p className={styles.text}>
							Stwarzamy warunki do naturalnej i spontanicznej komunikacji, przypominającej funkcjonowanie
							w rodzinie dwujęzycznej, poprzez codzienny kontakt z wielokulturowym zespołem nauczycieli
							anglojęzycznych.
						</p>
					</div>
					<Link className={styles.link} to={appRoutes.preschool_our_methods + '#lekcje-angielskiego'}>
						więcej
					</Link>
				</div>
			</article>
		</div>
	);
};
