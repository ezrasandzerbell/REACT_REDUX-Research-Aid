import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SiteSimpleHeader extends Component {
  render() {
    return (
      <header id="header" className="projectIndexHeader">
          <div className="inner">
            <Link to="/" className="logo">Theory</Link>
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

export default SiteSimpleHeader;
