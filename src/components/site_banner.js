import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SiteBanner extends Component {

  render() {
    return (
      <div id="banner">
        <h1>The Research Aid</h1>
        <p>A tool for generating ideas and organizing your discoveries.</p>
        <footer>
          <Link className="button" to="/posts/new">
            Get Started
          </Link>
        </footer>
      </div>
    );
  };
}

export default SiteBanner;
