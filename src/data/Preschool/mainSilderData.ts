import img1Desktop from 'assets/preschool/preschool_mainSlider_img1.jpg';
import img2Desktop from 'assets/preschool/preschool_mainSlider_img2.jpg';
import img3Desktop from 'assets/preschool/preschool_mainSlider_img3.jpg';
import img4Desktop from 'assets/preschool/preschool_mainSlider_img4.jpg';

import img1Mobile from 'assets/preschool/preschool_mainSlider_img1_mobile.jpg';
import img2Mobile from 'assets/preschool/preschool_mainSlider_img2_mobile.jpg';
import img3Mobile from 'assets/preschool/preschool_mainSlider_img3_mobile.jpg';
import img4Mobile from 'assets/preschool/preschool_mainSlider_img4_mobile.jpg';

import { appRoutes } from 'data/appRoutes/appRoutes';

export const mainSliderData = [
	{
		id: 1,
		images: {
			imageDesktop: img1Desktop,
			imageMobile: img1Mobile,
		},
		text: 'pasja do muzyki',
		href: appRoutes.preschool_our_methods + '#pracownia-muzyczna',
		color: '#EFC46E',
	},
	{
		id: 2,
		images: {
			imageDesktop: img2Desktop,
			imageMobile: img2Mobile,
		},
		text: 'natura i ruch',
		href: appRoutes.preschool_our_methods + '#pracownia-ruchowa',
		color: '#80AA6E',
	},
	{
		id: 3,
		images: {
			imageDesktop: img3Desktop,
			imageMobile: img3Mobile,
		},
		text: 'bliskie więzi',
		href: appRoutes.preschool_our_methods + '#pracownia-relacyjna',
		color: '#E6CCCA',
	},
	{
		id: 4,
		images: {
			imageDesktop: img4Desktop,
			imageMobile: img4Mobile,
		},
		text: 'prowokacje edukacyjne',
		href: appRoutes.preschool_our_methods + '#prowokacje-edukacyjne',
		color: '#A9CAE5',
	},
];
