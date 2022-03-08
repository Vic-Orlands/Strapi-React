import React from 'react';
import { Link } from 'react-router-dom';
import classes from './nav.module.css';

export default function NavHeader() {
	return (
		<div className={classes.navBar}>
			<h1>My Estate</h1>

			<nav className={classes.navLink}>
				<ul>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<li>Home</li>
					</Link>

					<Link to="estates" style={{ textDecoration: 'none' }}>
						<li>Estates</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
}
