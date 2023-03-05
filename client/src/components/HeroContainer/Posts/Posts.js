import React from 'react';
// to use states from redux store
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import './styles.css';
import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className='posts-container'>
      {!posts.length ? (
        <CircularProgress className='progress_bar' />
      ) : (
        posts.map((post) => {
          return (
            <Post
              key={post._id}
              post={post}
              setCurrentId={setCurrentId}
            />
          );
        })
      )}
    </div>
  );
};

export default Posts;
