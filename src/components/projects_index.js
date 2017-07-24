import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../actions';
import SiteSimpleHeader from './site_simple_header';

class ProjectsIndex extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    return _.map(this.props.projects, project => {
      return (

        <li className="list-group-item" key={project.id}>
          <Link to={`/projects/${project.id}`}>
            {project.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
          <SiteSimpleHeader />
          <div className="projectIndexBody container">

            <div className="row">
              <div className="col-md-6">
                <h1 className="pageTitle">Projects</h1>
              </div>
            <div className="col-md-6">
            <Link className="btn btn-primary floatright" to="/projects/new">
              Add a project
            </Link>
            </div>
            </div>

            <ul className="list-group">
              {this.renderProjects()}
            </ul>


          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectsIndex);
