import { IdeaMottoProps } from './IdeaMotto.types';

import styles from './IdeaMotto.module.css';

export const IdeaMotto = ({ text, circleColor }: IdeaMottoProps) => {
	return (
		<div className={styles.motto}>
			<p className={styles.text}>
				{text}
				<span
					className={styles.circle}
					style={{
						backgroundColor: circleColor,
					}}
				></span>
				<span
					className={styles.circle}
					style={{
						backgroundColor: circleColor,
					}}
				></span>
			</p>
		</div>
	);
};
