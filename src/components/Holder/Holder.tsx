import styles from './Holder.module.css';

import { HolderProps } from './Holder.types';

export const Holder = ({ children, additionalClass }: HolderProps) => {
	return <div className={`${styles.holder} ${additionalClass ? styles.row : null}`}>{children}</div>;
};
