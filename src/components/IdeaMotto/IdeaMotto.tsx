import { IdeaMottoProps } from './IdeaMotto.types';

import styles from './IdeaMotto.module.css';

export const IdeaMotto = ({ text, circleColor }: IdeaMottoProps) => {
	return (
		<div className={styles.motto}>
			<p className={styles.text}>
				{text}
				<div
					className={styles.circle}
					style={{
						backgroundColor: circleColor,
					}}
				></div>
				<div
					className={styles.circle}
					style={{
						backgroundColor: circleColor,
					}}
				></div>
			</p>
		</div>
	);
};
