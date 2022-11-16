import React from 'react';

import Sidebar from './components/Sidebar';
import Discover from './pages/Discover';
import TopCharts from './pages/TopCharts';

import './assets/styles/general.css';
import './assets/styles/styles.css';

function App() {
	return (
		<div className="main-app">
			<Sidebar />

			<main className="main-content">
				<Discover />
				<TopCharts />
			</main>
		</div>
	);
}

export default App;
