import axios from 'axios';
import Firebase from 'firebase';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

export const FETCH_PROJECTS = 'fetch_projects';
export const FETCH_PROJECT = 'fetch_project';
export const CREATE_PROJECT = 'create_project';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=Zebra1234';
const API_KEY_PROJ = '?key=Zebra12345';

const Posts = new Firebase('https://researchaid-1d27b.firebaseio.com/');


export function fetchPosts() {
  return dispatch => {
    Posts.child('posts').on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };
};

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  .then(() => callback())

  return {
    type: DELETE_POST,
    payload: id
  }
}

export function fetchProjects() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY_PROJ}`);

  return {
    type: FETCH_PROJECTS,
    payload: request
  };
}

export function fetchProject(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY_PROJ}`);

  return {
    type: FETCH_PROJECT,
    payload: request
  }
}

export function createProject(values, callback) {
  // TODO: connect to firebase
  const request = axios.post(`${ROOT_URL}/posts${API_KEY_PROJ}`, values)
  .then(() => callback())

  return {
    type: CREATE_PROJECT,
    payload: request
  };
}

export function deleteProject(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY_PROJ}`)
  .then(() => callback())

  return {
    type: DELETE_PROJECT,
    payload: id
  }
}
