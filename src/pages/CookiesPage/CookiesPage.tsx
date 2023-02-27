import { LinkButton } from 'components/LinkButton/LinkButton';

import { appRoutes } from 'data/appRoutes/appRoutes';

import styles from './CookiesPage.module.css';

export const CookiesPage = () => {
	return (
		<div className={styles.page}>
			<div className={styles.inner}>
				<h1 className={styles.header}>polityka cookies</h1>
				<p className={styles.text}>
					Wykorzystywanie Państwa adresów IP służy jedynie diagnozowaniu problemów związanych z pracą serwera,
					analizą naruszeń bezpieczeństwa oraz w zarządzaniu Serwisem. Informacje te w żaden sposób nie są
					łączone z danymi osobowymi Użytkowników. Wyjątkowo serwis wykorzystuje pliki „cookies", które
					ułatwiają korzystanie z jej zasobów. „Cookies" zawierają użyteczne informacje i są przechowywane na
					komputerze użytkownika - nasz serwer może je odczytać przy ponownym połączeniu się z tym komputerem.
					Zapisywane „cookies” służą wyłącznie w celu utrzymania sesji użytkownika (po zalogowaniu), dzięki
					której użytkownik nie musi na każdej stronie wpisywać swojej nazwy i hasła, tworzenia statystyk
					oglądalności dla naszych partnerów treściowych i reklamodawców, prezentacji reklam internetowych o
					treści najbardziej zbliżonej do zainteresowań użytkownika. Pliki te nie gromadzą Państwa danych
					osobowych, nie zmieniają konfiguracji komputera, nie służą do instalowania bądź deinstalacji
					jakichkolwiek programów komputerowych, wirusów lub trojanów, nie ingerują w integralność systemu
					bądź danych Użytkownika, nie są przetwarzanie przez inne serwisy internetowe.
				</p>
				<p className={styles.text}>
					Użytkownik może jednak ustawić swoją przeglądarkę w taki sposób, aby pliki cookies nie zapisywały
					się na jego dysku, albo automatycznie usuwały w określonym czasie. Ustawienia te mogą więc zostać
					zmienione w taki sposób, aby blokować automatyczną obsługę plików cookies w ustawieniach
					przeglądarki internetowej bądź informować o ich każdorazowym przesłaniu na urządzenie użytkownika.
					Niestety w konsekwencji może to prowadzić do problemów z wyświetlaniem niektórych witryn, czyli na
					przykład wielokrotnego wyświetlania tych samych banerów reklamowych. Ponadto pliki cookies mogą być
					w każdym momencie usunięte przez użytkownika, a wyłączenie informacji „cookies" w przeglądarce nie
					pozbawia użytkownika dostępu do zasobów serwisu.
				</p>
				<div className={styles.linkHolder}>
					<LinkButton linkText='powrót do strony głównej' href={appRoutes.homePage} textColor='white' />
				</div>
			</div>
		</div>
	);
};
