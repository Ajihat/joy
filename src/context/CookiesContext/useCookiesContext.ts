import { useContext } from 'react';
import { CookiesContext } from './CookiesContext';

export const useCookiesContext = () => {
	const ctx = useContext(CookiesContext);
	if (!ctx) throw new Error('useCookiesContext can only be used inside ContextProvider');
	return ctx;
};
