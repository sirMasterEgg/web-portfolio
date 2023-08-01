import React from 'react';

const Navbar = () => {
	return (
		<nav className="text-secondary">
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Portofolio</li>
			</ul>
			<div className="w-8 h-8 bg-background"></div>
			<div className="w-8 h-8 bg-primary"></div>
			<div className="w-8 h-8 bg-secondary"></div>
			<div className="w-8 h-8 bg-accent-1"></div>
			<div className="w-8 h-8 bg-accent-2"></div>
			<div className="w-8 h-8 bg-accent-3"></div>
			<div className="w-8 h-8 bg-border"></div>
		</nav>
	);
};

export default Navbar;
