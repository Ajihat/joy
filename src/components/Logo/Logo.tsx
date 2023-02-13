import { useNavigate, useLocation } from 'react-router-dom';

import styles from './Logo.module.css';

import joy from 'assets/logo_joy.svg';
import preschool from 'assets/logo_preschool.svg';
import babycare from 'assets/logo_babycare.svg';
import circle from 'assets/logo_circle.svg';
import arc from 'assets/logo_arc.svg';
import triangle from 'assets/logo_triangle.svg';

import { useCheckScrollDirection } from './useCheckScrollDirection';

import { appRoutes } from 'data/appRoutes/appRoutes';

import { LogoProps } from './Logo.types';

export const Logo = ({ site }: LogoProps) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const scrollingDirection = useCheckScrollDirection();
	const logoSrc = site === 'preschool' ? preschool : babycare;
	const link = site === 'preschool' ? appRoutes.preschool : appRoutes.babycare;

	const handleClick = () => {
		if (pathname === link) {
			window.scrollTo(0, 0);
			return;
		}
		navigate(link);
	};
	return (
		<div onClick={handleClick} className={scrollingDirection === 'up' ? styles.logo : styles.logoDown}>
			<img className={scrollingDirection === 'up' ? styles.joy : styles.joyDown} src={joy} alt='joy' />
			<img
				className={scrollingDirection === 'up' ? styles.preschool : styles.preschoolDown}
				src={logoSrc}
				alt='preschool'
			/>
			<img
				className={scrollingDirection === 'up' ? styles.circle : styles.circleDown}
				src={circle}
				alt='circle'
			/>
			<img
				className={scrollingDirection === 'up' ? styles.triangle : styles.triangleDown}
				src={triangle}
				alt='triangle'
			/>
			<img className={scrollingDirection === 'up' ? styles.arc : styles.arcDown} src={arc} alt='arc' />
		</div>
	);
};
