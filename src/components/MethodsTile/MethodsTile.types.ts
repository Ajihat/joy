export interface MethodsTileProps {
	image: string | string[];
	header: string | null;
	color: string;
	texts: string[];
	isImgLeft: boolean;
	id?: string;
	accentImg: string;
	accentImgPosition: 'image' | 'text';
	top: string;
	left: string;
	bottom: string;
	right: string;
	isRound: boolean;
	textColor: string;
}
