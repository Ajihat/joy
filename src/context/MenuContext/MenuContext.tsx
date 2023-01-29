import { createContext, useState } from 'react';

import { MenuProviderProps, IMenuContext } from './MenuContext.types';

export const MenuContext = createContext<null | IMenuContext>(null);

export const MenuProvider = ({ children }: MenuProviderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<MenuContext.Provider
			value={{
				isMenuOpen,
				setIsMenuOpen,
			}}
		>
			{children}
		</MenuContext.Provider>
	);
};
