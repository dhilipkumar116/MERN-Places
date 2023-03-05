import {
  FETCH_ALL,
  UPDATE,
  DELETE,
  CREATE,
  LIKE,
} from '../constants/actionType';
import * as api from '../api';
// we can import all export depends on our requirements
// we can access api.fetchPosts();

// actions - for normal operation
// const getPosts = () => {
//   const action = { type: 'FETCH_ALL', payload: [] };
//   return action;
// };

// for asynchronous operation
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = { type: FETCH_ALL, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    return dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    return dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    return dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
