import styles from './Holder.module.css';

import { HolderProps } from './Holder.types';

export const Holder = ({ children }: HolderProps) => {
	return <div className={styles.holder}>Holder</div>;
};
