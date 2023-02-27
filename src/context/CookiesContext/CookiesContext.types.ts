export interface CookiesProviderProps {
	children: React.ReactNode;
}

export interface ICookiesContext {
	areCookiesAccepted: boolean;
	setAreCookiesAccepted: React.Dispatch<React.SetStateAction<boolean>>;
}
