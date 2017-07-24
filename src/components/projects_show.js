import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProject, deleteProject } from '../actions';
import SiteSimpleHeader from './site_simple_header';

class ProjectsShow extends Component {

  componentDidMount() {
    console.log(this.props)
    const { id } = this.props.match.params;
    this.props.fetchProject(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deleteProject(id, () => {
      this.props.history.push('/projects');
    });
  }

  render() {
    const { project } = this.props;

    if(!project) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <SiteSimpleHeader />
        <div className="container projectShowBody">
          <div className="row">
            <div className="col-md-6">
              <h1 className="pageTitle">{project.title}</h1>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-danger pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}
                >
                Delete
              </button>
            </div>
          </div>
          <Link to="/projects">Back to Projects</Link>
        </div>
      </div>
    );
  };
}

function mapStateToProps({ projects }, ownProps) {
  return { project: projects[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchProject, deleteProject } )(ProjectsShow);
