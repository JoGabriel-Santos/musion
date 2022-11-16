/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Sidebar() {
	return (
		<header className="header">
			<a className="logo" href="#">
				<img className="logo-image" src={require('../assets/images/logo.png')} alt="" />
			</a>

			<nav className="main-nav">
				<ul className="main-nav-list">
					<li className="list-item">
						<a className="main-nav-link" href="#">
							Discover
						</a>
					</li>

					<li className="list-item">
						<a className="main-nav-link" href="#">
							Top artists
						</a>
					</li>

					<li className="list-item">
						<a className="main-nav-link" href="#">
							Top charts
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Sidebar;
