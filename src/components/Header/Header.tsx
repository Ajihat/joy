import styles from './Header.module.css';

import { HeaderProps } from './Header.types';

export const Header = ({ image, text, color, aligment }: HeaderProps) => {
	const position = {
		left: {
			bottom: '7%',
			left: '5%',
		},
		right: {
			bottom: '7%',
			right: '5%',
		},
	};

	return (
		<div
			className={styles.header}
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<div
				className={styles.box}
				style={{
					backgroundColor: color,
					...position[aligment],
				}}
			>
				<h1 className={styles.text}>{text}</h1>
			</div>
		</div>
	);
};
