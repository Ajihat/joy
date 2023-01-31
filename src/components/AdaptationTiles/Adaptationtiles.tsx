import { useState, useEffect, useCallback } from 'react';

import styles from './AdaptationTiles.module.css';

import headerDesktop from 'assets/babycare/Adaptation/babycare_adaptation_header_desktop.jpg';
import headerMobile from 'assets/babycare/Adaptation/babycare_adaptation_header_mobile.jpg';

import arc from 'assets/decorations/adaptation_arc.svg';
import circle from 'assets/decorations/adaptation_circle.svg';
import triangle from 'assets/decorations/adaptation_triangle.svg';
import point from 'assets/decorations/adaptation_point.svg';

export const Adaptationtiles = () => {
	const [headerImg, setHeaderImg] = useState(() => {
		return window.innerWidth > 800 ? headerDesktop : headerMobile;
	});

	const onWindowResize = useCallback(() => {
		if (window.innerWidth > 800) {
			setHeaderImg(headerDesktop);
		} else {
			setHeaderImg(headerMobile);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('resize', onWindowResize);
		return () => window.removeEventListener('resize', onWindowResize);
	}, [onWindowResize]);
	return (
		<div>
			<div
				className={styles.header}
				style={{
					backgroundImage: `url(${headerImg})`,
				}}
			>
				<div className={styles.box}>
					<p className={styles.text}>
						Czuła adaptacja to coś, czego rodzice szukają dla swojego maleństwa i dla siebie. To poznanie
						się w atmosferze szacunku i zrozumienia, a także kameralność miejsca, łagodność w relacji i dużo
						ciepła w kontakcie z maluszkiem.
					</p>
				</div>
				<img src={arc} alt='łuk' className={styles.arc} />
			</div>
			<div className={styles.bottom}>
				<div className={styles.whiteBox}>
					<img src={point} alt='point' className={styles.point} />
					<p className={styles.smallText}>
						W Joy BabyCare wiemy, że już na etapie poszukiwania najlepszego miejsca ważne jest, żeby poczuć
						atmosferę żłobka. Zapraszamy Rodziców do nas, opowiadamy jak u nas jest, pokazujemy przestrzeń w
						której maluszek za chwilę będzie stawiał pierwsze kroki. Takie spotkanie to solidna podstawa do
						zbudowania zaufania.
					</p>
					<img src={point} alt='point' className={styles.point} />
					<p className={styles.smallText}>
						Maluszka i rodzica wita uśmiechnięta nauczycielka i zaprasza do dalszej wspólnej podróży.
						Podczas dwutygodniowej adaptacji powoli poznajemy się, zbliżamy, otwieramy na nowe
						doświadczenia. Rodzic towarzyszy dziecku korzystając ze wskazówek doświadczonych pedagogów,
						którzy z pełnym zrozumieniem dla emocji doradzają jak wesprzeć malucha.
					</p>
				</div>
				<div className={styles.boxHidden}>
					<p className={styles.text}>
						Czuła adaptacja to coś, czego rodzice szukają dla swojego maleństwa i dla siebie. To poznanie
						się w atmosferze szacunku i zrozumienia, a także kameralność miejsca, łagodność w relacji i dużo
						ciepła w kontakcie z maluszkiem.
					</p>
				</div>
				<div className={styles.whiteBoxHidden}>
					<img src={point} alt='point' className={styles.point} />
					<p className={styles.smallText}>
						W Joy BabyCare wiemy, że już na etapie poszukiwania najlepszego miejsca ważne jest, żeby poczuć
						atmosferę żłobka. Zapraszamy Rodziców do nas, opowiadamy jak u nas jest, pokazujemy przestrzeń w
						której maluszek za chwilę będzie stawiał pierwsze kroki. Takie spotkanie to solidna podstawa do
						zbudowania zaufania.
					</p>
					<img src={point} alt='point' className={styles.point} />
					<p className={styles.smallText}>
						Maluszka i rodzica wita uśmiechnięta nauczycielka i zaprasza do dalszej wspólnej podróży.
						Podczas dwutygodniowej adaptacji powoli poznajemy się, zbliżamy, otwieramy na nowe
						doświadczenia. Rodzic towarzyszy dziecku korzystając ze wskazówek doświadczonych pedagogów,
						którzy z pełnym zrozumieniem dla emocji doradzają jak wesprzeć malucha.
					</p>
				</div>
				<img src={circle} alt='okrąg' className={styles.circle} />
				<img src={triangle} alt='trójkąt' className={styles.triangle} />
			</div>
		</div>
	);
};
