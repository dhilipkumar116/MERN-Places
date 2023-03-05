import React from 'react';
import './styles.css';
// import sample from '../../../../image/img-4.jpeg';
import { FaTrash } from 'react-icons/fa';
import { AiFillLike, AiFillEdit } from 'react-icons/ai';
import moment from 'moment';
import { deletePost, likePost } from '../../../../actions/posts';
import { useDispatch } from 'react-redux';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <div className='post-container'>
      <div className='img-container'>
        <img
          className='img'
          src={post.selectedFile}
          alt='post'
        />
        <div className='creater-and-time'>
          <h4>{post.creator}</h4>
          <p>{moment(post.createdOn).fromNow()}</p>
        </div>
        <div className='more'>
          <button onClick={() => setCurrentId(post._id)}>
            <AiFillEdit />
          </button>
        </div>
      </div>
      <div className='content'>
        <p>
          {post.tags.map((tag) => (
            <span
              key={post.tags.indexOf(tag)}>{`#${tag} `}</span>
          ))}
        </p>
        <h3>{post.title}</h3>
        <p>{post.message}</p>
        <div className='post-footer'>
          <button onClick={() => dispatch(likePost(post._id))}>
            <AiFillLike /> LIKE {post.likeCount}
          </button>
          <button onClick={() => dispatch(deletePost(post._id))}>
            <FaTrash /> DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
