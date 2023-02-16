import styles from './English.module.css';

import englishImg from 'assets/preschool/PreOurmethods/preschool_ourmethods_english.jpg';
import chat from 'assets/decorations/chat.svg';

export const English = () => {
	return (
		<article className={styles.section} id='angielski'>
			<div className={styles.inner}>
				<h2 className={styles.header}>zanurzenie w języku angielskim</h2>
				<p className={styles.text}>
					Nauka języków obcych otwiera drzwi do poznania świata i odmiennych kultur. Dzieci mają szansę
					doświadczać tego od pierwszych chwil w przedszkolu, dzięki nauce języka angielskiego i codziennym
					kontaktom z wielokulturowym zespołem nauczycieli anglojęzycznych.
				</p>
				<p className={styles.text}>
					Celem nauki jest „zanurzenie” w języku angielskim poprzez stworzenie warunków do naturalnej i
					spontanicznej komunikacji, przypominającej funkcjonowanie w rodzinie dwujęzycznej. Dzieci poznają
					słownictwo nie tylko podczas regularnych zajęć, ale uczestniczą w realizacji projektów, budują
					relację i więź z nauczycielem anglojęzycznym każdego dnia poszerzając kompetencje językowe.
				</p>
				<p className={styles.text}>
					Nauczanie języka obcego to także łączenie treści polsko i anglojęzycznych we wspólnej realizacji
					projektów. Dzięki temu dzieci w naturalny sposób zgłębiają temat w obu językach jednocześnie.
					Integracja treści programowych pozwala na poszerzanie wiedzy i horyzontów edukacyjnych naszych
					podopiecznych. Wspiera nas w tym metoda Content and Language Integrated Learning (CLIL), która
					polega na łączeniu nauki języka z nauką przedmiotów, co automatycznie poszerza słownictwo. Zdobytą
					wiedzę ćwiczy się w praktyce podczas codziennych aktywności w przedszkolu.
				</p>
			</div>
			<div className={styles.inner}>
				<img className={styles.img} src={englishImg} alt='lekcje-angielskiego' />
				<img className={styles.decoration} src={chat} alt='chat' />
			</div>
		</article>
	);
};
