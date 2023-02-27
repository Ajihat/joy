import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { appRoutes } from 'data/appRoutes/appRoutes';

export const NoMatch = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate(appRoutes.homePage);
	}, [navigate]);

	return null;
};
