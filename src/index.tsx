import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

import { MenuProvider } from 'context/MenuContext/MenuContext';
import { DeviceProvider } from 'context/DeviceContext/DeviceContext';
import { CookiesProvider } from 'context/CookiesContext/CookiesContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<Router>
				<CookiesProvider>
					<DeviceProvider>
						<MenuProvider>
							<App />
						</MenuProvider>
					</DeviceProvider>
				</CookiesProvider>
			</Router>
		</HelmetProvider>
	</React.StrictMode>
);
