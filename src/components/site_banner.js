import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SiteBanner extends Component {

  render() {
    return (
      <div id="banner">
        <h1>The Research Aid</h1>
        <p>A tool for generating ideas and organizing your discoveries.</p>
        <footer>
          <Link className="button" to="/projects/new">
            Get Started
          </Link>
          <span className="p-left">or</span>
          <Link className="button" to="/projects">
            See Projects
          </Link>
        </footer>
      </div>
    );
  };
}

export default SiteBanner;
