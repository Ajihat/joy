export interface MenuProviderProps {
	children: React.ReactNode;
}

export interface IMenuContext {
	isMenuOpen: boolean;
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
