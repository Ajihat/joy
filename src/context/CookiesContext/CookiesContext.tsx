import { createContext, useState } from 'react';

import { ICookiesContext, CookiesProviderProps } from './CookiesContext.types';

export const CookiesContext = createContext<null | ICookiesContext>(null);

export const CookiesProvider = ({ children }: CookiesProviderProps) => {
	const [areCookiesAccepted, setAreCookiesAccepted] = useState<boolean>(() => {
		const storedValue = localStorage.getItem('cookies');
		if (storedValue === null) {
			return false;
		} else {
			return JSON.parse(storedValue);
		}
	});
	return (
		<CookiesContext.Provider
			value={{
				areCookiesAccepted,
				setAreCookiesAccepted,
			}}
		>
			{children}
		</CookiesContext.Provider>
	);
};
