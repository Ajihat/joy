import { MainSlider } from 'components/MainSlider/MainSlider';

import { mainSliderData } from 'data/Babycare/mainSliderData';

export const Babycare = () => {
	return (
		<div>
			<MainSlider data={mainSliderData} />
		</div>
	);
};
