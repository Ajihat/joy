import ReactDom from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

import { useCookiesContext } from 'context/CookiesContext/useCookiesContext';

import { appRoutes } from 'data/appRoutes/appRoutes';

import colseImg from 'assets/decorations/close-btn.svg';

import styles from './Popup.module.css';

export const Popup = () => {
	const { areCookiesAccepted, setAreCookiesAccepted } = useCookiesContext();
	const location = useLocation();

	const handleClick = () => {
		localStorage.setItem('cookies', 'true');
		setAreCookiesAccepted(true);
	};

	const handleClose = () => {
		localStorage.setItem('cookies', 'false');
		setAreCookiesAccepted(true);
	};

	if (areCookiesAccepted || location.pathname === appRoutes.cookies_policy) return null;

	return ReactDom.createPortal(
		<div className={styles.holder}>
			<div className={styles.popup}>
				<p className={styles.text}>
					Korzystamy z plików cookies dzięki, którym nasza strona może lepiej działać w celach reklamowych i
					statystycznych zgodnie z{' '}
					<Link className={styles.text} to={appRoutes.cookies_policy}>
						Polityką Prywatności.
					</Link>
				</p>
				<div className={styles.box}>
					<button onClick={handleClick} className={styles.btn}>
						Ok, rozumiem
					</button>
				</div>
				<button onClick={handleClose} className={styles.close}>
					<img src={colseImg} alt='zamknij' />
				</button>
			</div>
		</div>,
		document.getElementById('portal')!
	);
};
