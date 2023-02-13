import styles from './PageWrapper.module.css';

import { PageWrapperProps } from './PageWrapper.types';

export const PageWrapper = ({ children }: PageWrapperProps) => {
	return <div className={styles.wrapper}>{children}</div>;
};
