import { useState, useEffect } from 'react';
import './styles.css';

import TextField from '../../Utilities/TextField/TextField';
import ImageField from '../../Utilities/ImageField/ImageField';
import Button from '../../Utilities/Button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const post = useSelector((state) =>
      currentId
      ? state.posts.find((p) => p._id === currentId)
      : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
      setPostData(post);
      // console.log(postData.tags.join(','));
    }
  }, [post]);

  const handleClick = async (event) => {
    event.preventDefault();
    console.log('click render');
    if (currentId !== 0) {
      dispatch(updatePost(currentId, postData));
      console.log('post updated');
    } else {
      dispatch(createPost(postData));
      console.log('post created');
    }
    clear();
  };

  const clear = () => {
    console.log('clear render');
    if (currentId !== 0) {
      setCurrentId(0);
    }

    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  return (
    <div className='form-container'>
      <form>
        <h3>{!currentId ? 'Create' : 'Edit'} your Memory!</h3>
        <TextField
          value={postData.creator}
          label={'Creator'}
          type={'text'}
          placeHolder={' '}
          onChange={(val) =>
            setPostData({
              ...postData,
              creator: val,
            })
          }
        />
        <TextField
          value={postData.title}
          label={'Title'}
          type={'text'}
          placeHolder={' '}
          onChange={(val) =>
            setPostData({ ...postData, title: val })
          }
        />
        <TextField
          value={postData.message}
          label={'Message'}
          type={'textarea'}
          placeHolder={' '}
          onChange={(val) =>
            setPostData({ ...postData, message: val })
          }
        />
        <TextField
          value={postData.tags}
          label={'Tags (comma separated)'}
          type={'text'}
          placeHolder={' '}
          onChange={(val) =>
            setPostData({ ...postData, tags: val.split(',') })
          }
        />
        <ImageField
          multiple={false}
          getFile={(fileString) => {
            setPostData({
              ...postData,
              selectedFile: fileString,
            });
          }}
        />
        <Button
          value='submit'
          type='submit'
          className='submit-btn'
          onClick={(event) => handleClick(event)}
        />
        <button
          type='button'
          className='clear-btn'
          onClick={clear}>
          clear
        </button>
      </form>
    </div>
  );
};

export default Form;
