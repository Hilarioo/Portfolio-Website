import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'swiper/css/bundle';
import './css/morph-blob.css';
import './css/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
