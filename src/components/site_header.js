import React, { Component } from 'react';

class SiteHeader extends Component {
  render() {
    return (
      <header id="header">
				<div className="inner headerInBanner">
					<a href="index.html" className="logo">Home</a>
					<nav id="nav">
						<a href="index.html">My Research</a>
						<a href="generic.html">Featured Articles</a>
						<a href="elements.html">FAQ</a>
						<a href="elements.html">Log Out</a>
					</nav>
					<a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
				</div>
			</header>
    );
  };
}

export default SiteHeader;
