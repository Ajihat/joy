import img1Desktop from 'assets/preschool/preschool_mainSlider_img1.jpg';
import img2Desktop from 'assets/preschool/preschool_mainSlider_img2.jpg';
import img3Desktop from 'assets/preschool/preschool_mainSlider_img3.jpg';
import img4Desktop from 'assets/preschool/preschool_mainSlider_img4.jpg';

import img1Mobile from 'assets/preschool/preschool_mainSlider_img1_mobile.jpg';
import img2Mobile from 'assets/preschool/preschool_mainSlider_img2_mobile.jpg';
import img3Mobile from 'assets/preschool/preschool_mainSlider_img3_mobile.jpg';
import img4Mobile from 'assets/preschool/preschool_mainSlider_img4_mobile.jpg';

export const mainSliderData = [
	{
		id: 1,
		images: {
			imageDesktop: img1Desktop,
			imageMobile: img1Mobile,
		},
		text: 'Pasja do muzyki',
		href: 'program',
		color: '#EFC46E',
	},
	{
		id: 2,
		images: {
			imageDesktop: img2Desktop,
			imageMobile: img2Mobile,
		},
		text: 'Natura i ruch',
		href: 'program',
		color: '#80AA6E',
	},
	{
		id: 3,
		images: {
			imageDesktop: img3Desktop,
			imageMobile: img3Mobile,
		},
		text: 'Bliskie więzi',
		href: 'program',
		color: '#E6CCCA',
	},
	{
		id: 4,
		images: {
			imageDesktop: img4Desktop,
			imageMobile: img4Mobile,
		},
		text: 'Prowokacje edukacyjne',
		href: 'program',
		color: '#A9CAE5',
	},
];
