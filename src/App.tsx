import { Routes, Route } from 'react-router-dom';

import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop';

import { Home } from 'pages/Home/Home';
import { Popup } from 'components/Popup/Popup';
//Babycare
import { Babycare } from 'pages/Babycare/Babycare';
import { Idea } from 'pages/Babycare/Idea';
import { OurMethods } from 'pages/Babycare/OurMethods';
import { Team } from 'pages/Babycare/Team';
import { Menu } from 'pages/Babycare/Menu/Menu';
import { Adaptation } from 'pages/Babycare/Adaptation';
import { Contact } from 'pages/Babycare/Contact';
//Preschool
import { Preschool } from 'pages/Preschool/Preschool';
import { PreIdea } from 'pages/Preschool/PreIdea/PreIdea';
import { PreOurmethods } from 'pages/Preschool/PreOurmethods/PreOurmethods';
import { PreTeam } from 'pages/Preschool/PreTeam/PreTeam';
import { PreMenu } from 'pages/Preschool/PreMenu/PreMenu';
import { PreContact } from 'pages/Preschool/PreContact/PreContact';

import { appRoutes } from 'data/appRoutes/appRoutes';

import './App.css';

export const App = () => {
	return (
		<div className='app'>
			<Routes>
				<Route path={appRoutes.homePage} element={<Home />} />
				{/* Babycare */}
				<Route path={appRoutes.babycare} element={<Babycare />} />
				<Route path={appRoutes.babycare_idea} element={<Idea />} />
				<Route path={appRoutes.babycare_our_methods} element={<OurMethods />} />
				<Route path={appRoutes.babycare_team} element={<Team />} />
				<Route path={appRoutes.babycare_menu} element={<Menu />} />
				<Route path={appRoutes.babycare_adaptation} element={<Adaptation />} />
				<Route path={appRoutes.babycare_contact} element={<Contact />} />
				{/* Preschool */}
				<Route path={appRoutes.preschool} element={<Preschool />} />
				<Route path={appRoutes.preschool_idea} element={<PreIdea />} />
				<Route path={appRoutes.preschool_our_methods} element={<PreOurmethods />} />
				<Route path={appRoutes.preschool_team} element={<PreTeam />} />
				<Route path={appRoutes.preschool_menu} element={<PreMenu />} />
				<Route path={appRoutes.preschool_contact} element={<PreContact />} />
			</Routes>
			<ScrollToTop />
			<Popup />
		</div>
	);
};
