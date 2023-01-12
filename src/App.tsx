import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Preschool } from 'pages/Preschool/Preschool';
import { Babycare } from 'pages/Babycare/Babycare';

import { appRoutes } from 'data/appRoutes/appRoutes';

import './App.css';

export const App = () => {
	return (
		<div className='app'>
			<Routes>
				<Route path={appRoutes.homePage} element={<Home />} />
				<Route path={appRoutes.preschool} element={<Preschool />} />
				<Route path={appRoutes.babycare} element={<Babycare />} />
			</Routes>
		</div>
	);
};
