import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

import { MenuProvider } from 'context/MenuContext/MenuContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<Router>
				<MenuProvider>
					<App />
				</MenuProvider>
			</Router>
		</HelmetProvider>
	</React.StrictMode>
);
