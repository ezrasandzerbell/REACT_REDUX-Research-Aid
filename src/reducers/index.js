import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import ProjectsReducer from './reducer_projects';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  projects: ProjectsReducer,
  form: formReducer
});

export default rootReducer;
