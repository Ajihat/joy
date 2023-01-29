import { useContext } from 'react';
import { MenuContext } from './MenuContext';

export const useMenuContext = () => {
	const ctx = useContext(MenuContext);
	if (!ctx) throw new Error('useMenuContext can only be used inside ContextProvider');
	return ctx;
};
