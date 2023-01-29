export interface MainSliderProps {
	data: {
		id: number;
		images: {
			imageDesktop: string;
			imageMobile: string;
		};
		text: string;
		href: string;
		color: string;
	}[];
	isRound: boolean;
}
