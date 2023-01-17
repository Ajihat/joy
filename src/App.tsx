import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home } from 'pages/Home/Home';
import { Preschool } from 'pages/Preschool/Preschool';
import { Babycare } from 'pages/Babycare/Babycare';
import { OurMethods } from 'pages/Babycare/OurMethods';
import { Team } from 'pages/Babycare/Team';

import { appRoutes } from 'data/appRoutes/appRoutes';

import './App.css';

export const App = () => {
	return (
		<div className='app'>
			<AnimatePresence>
				<Routes>
					<Route path={appRoutes.homePage} element={<Home />} />
					<Route path={appRoutes.preschool} element={<Preschool />} />
					<Route path={appRoutes.babycare} element={<Babycare />} />
					<Route path={appRoutes.babycare_our_methods} element={<OurMethods />} />
					<Route path={appRoutes.babycare_team} element={<Team />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
};
