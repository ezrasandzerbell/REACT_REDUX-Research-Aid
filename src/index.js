import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import ProjectsIndex from './components/projects_index';
import ProjectsNew from './components/projects_new';
import ProjectsShow from './components/projects_show';
import SiteIndexContent from './components/site_index_content';
import createLogger from 'redux-logger';

const logger = createLogger;
const createStoreWithMiddleware = applyMiddleware(promise, thunk, logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware (reducers)}>
    <BrowserRouter>
      <div>
      <Switch>
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/posts" component={PostsIndex} />
        <Route path="/projects/new" component={ProjectsNew} />
        <Route path="/projects/:id" component={ProjectsShow} />
        <Route path="/projects" component={ProjectsIndex} />
        <Route path="/" component={SiteIndexContent} />
      </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.primary_container'));
