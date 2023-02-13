import { LogoHolderProps } from './LogoHolder.types';

import styles from './LogoHolder.module.css';

export const LogoHolder = ({ children }: LogoHolderProps) => {
	return <div className={styles.holder}>{children}</div>;
};
