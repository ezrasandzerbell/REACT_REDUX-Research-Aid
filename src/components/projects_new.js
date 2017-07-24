import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProject } from '../actions';
import SiteSimpleHeader from './site_simple_header';

class ProjectsNew extends Component {
  renderField(field) {

    const { meta: { touched, error } } = field;

    // using destructuring to pull "touch" and "error" properties off of the nested "meta" object

    const className = `form-group ${touched && error ? 'has-danger': ''}`

    // colon is being used to signify "otherwise", as in if these two conditions, then has-danger, otherwise empty string

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error: ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createProject(values, () => {
      this.props.history.push('/projects');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <SiteSimpleHeader />
        <div className="projectIndexBody container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="pageTitle">Create New Project</h1>
            </div>
            <div className="col-md-6">
              <Link className="btn btn-danger floatright" to="/projects">
                Cancel
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="Title"
              name="title"
              component={this.renderField}
            />
            <button type="submit" className="btn btn-primary">Submit</button>

          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {}

  if (!values.title) {
    errors.title = "Enter a title!";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'ProjectNewForm'
})(
  connect(null, { createProject })(ProjectsNew)
);
