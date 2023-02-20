import { useContext } from 'react';
import { DeviceContext } from './DeviceContext';

export const useDeviceContext = () => {
	const ctx = useContext(DeviceContext);
	if (!ctx) throw new Error('useDeviceContext can only be used inside ContextProvider');
	return ctx;
};