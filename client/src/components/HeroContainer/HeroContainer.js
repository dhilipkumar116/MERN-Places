import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import './styles.css';
import Posts from './Posts/Posts';
import Form from './Form/Form';

function HeroContainer() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // lifited the state level up and passing the state to the least child component is known as props drilling
  // setCurrentId is set in Post comp so that we can get selected _id here and now passing this id to form to update the particular post

  return (
    <div className='HeroContainer'>
      <Posts setCurrentId={setCurrentId} />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
}

export default HeroContainer;
