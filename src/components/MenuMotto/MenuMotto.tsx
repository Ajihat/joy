import { MenuMottoProps } from './MenuMotto.types';

import styles from './MenuMotto.module.css';

export const MenuMotto = ({ text }: MenuMottoProps) => {
	return (
		<div className={styles.motto}>
			<p className={styles.text}>{text}</p>
		</div>
	);
};
