import { motion } from 'framer-motion';

import styles from 'pages/Preschool/Preschool.module.css';

export const Preschool = () => {
	return (
		<motion.div className={styles.preschool} initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
			Preschool
		</motion.div>
	);
};
