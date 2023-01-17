import { MethodsTileProps } from './MethodsTile.types';

import styles from './MethodsTile.module.css';

export const MethodsTile = ({ image, header, color, texts, isImgLeft }: MethodsTileProps) => {
	return (
		<article className={styles.article}>
			<div
				className={styles.text}
				style={{
					backgroundColor: color,
				}}
			>
				<h2 className={styles.header}>{header}</h2>
				{texts.map((text, index) => (
					<p className={styles.paragraph} key={index}>
						{text}
					</p>
				))}
			</div>
			<div
				className={styles.img}
				style={{
					backgroundImage: `url(${image})`,
					order: isImgLeft ? '1' : '2',
				}}
			></div>
		</article>
	);
};
