import { Link } from 'react-router-dom';

import arrow from 'assets/decorations/arrow.svg';

import { LinkButtonProps } from './LinkButton.types';

import styles from './LinkButton.module.css';

export const LinkButton = ({ linkText, href, textColor }: LinkButtonProps) => {
	return (
		<Link className={styles.link} to={href}>
			<div className={styles.circle}>
				<img src={arrow} alt='link' />
			</div>
			<span
				className={styles.text}
				style={{
					color: textColor,
				}}
			>
				{linkText}
			</span>
		</Link>
	);
};
