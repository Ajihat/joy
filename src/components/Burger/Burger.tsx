import { BurgerProps } from './Burger.types';

import { useMenuContext } from 'context/MenuContext/useMenuContext';

import styles from './Burger.module.css';

export const Burger = ({ site }: BurgerProps) => {
	const { isMenuOpen, setIsMenuOpen } = useMenuContext();
	const color = site === 'babycare' ? '#416780' : '#313F29';

	const handleClick = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	return (
		<div
			onClick={handleClick}
			className={styles.burger}
			style={{
				backgroundColor: color,
			}}
		>
			<div className={styles.inner}>
				<span className={`${styles.bar} ${isMenuOpen ? styles.barOpen : null}`}></span>
				<span className={`${styles.bar} ${isMenuOpen ? styles.barOpen : null}`}></span>
				<span className={`${styles.bar} ${isMenuOpen ? styles.barOpen : null}`}></span>
			</div>
		</div>
	);
};
