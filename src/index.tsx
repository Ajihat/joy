import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

import { MenuProvider } from 'context/MenuContext/MenuContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Router>
			<MenuProvider>
				<App />
			</MenuProvider>
		</Router>
	</React.StrictMode>
);
