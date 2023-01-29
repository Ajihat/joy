import { Link } from 'react-router-dom';

import { useMenuContext } from 'context/MenuContext/useMenuContext';

import { preschoolLinks, babycareLinks } from './SideBarData';

import { SideBarProps } from './SideBar.types';

import styles from './SideBar.module.css';

export const SideBar = ({ site }: SideBarProps) => {
	const color = site === 'babycare' ? '#416780' : '#313F29';
	const links = site === 'babycare' ? babycareLinks : preschoolLinks;
	const { isMenuOpen, setIsMenuOpen } = useMenuContext();

	const handleClick = () => {
		setIsMenuOpen(false);
	};
	return (
		<div
			className={`${styles.sidebar} ${isMenuOpen ? styles.sidebarOpen : null}`}
			style={{
				backgroundColor: color,
			}}
		>
			<ul className={styles.list}>
				{links.map((link) => {
					return (
						<li className={styles.listitem} key={link.id}>
							<Link onClick={handleClick} className={styles.link} to={link.href}>
								{link.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
