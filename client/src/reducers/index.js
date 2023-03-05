import { combineReducers } from 'redux';
import { postReducer } from './posts';

const reducers = combineReducers({
  posts: postReducer,
  // we can add just postReducer , for the convention i change the name to post
});

export default reducers;
