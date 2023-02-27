import { createContext, useState } from 'react';

import { DeviceProviderProps, IDeviceContext } from './DeviceContext.types';

export const DeviceContext = createContext<null | IDeviceContext>(null);

export const DeviceProvider = ({ children }: DeviceProviderProps) => {
	const [isDeviceIos, setIsDeviceIos] = useState(() => {
		const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
		if (isIOS) {
			return true;
		} else {
			return false;
		}
	});
	return (
		<DeviceContext.Provider
			value={{
				isDeviceIos,
			}}
		>
			{children}
		</DeviceContext.Provider>
	);
};
