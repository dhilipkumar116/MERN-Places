import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
    //   201 - successful creation
  } catch (error) {
    res.status(409).json({ error_message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  // console.log(post);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send('post not found');
    return;
  }
  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      post,
      {
        new: true,
        // it gives the updated posts
      }
    );
    res.json(updatedPost);
  } catch (error) {
    res.send().json({ error });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send('post not found');
    return;
  }
  try {
    await PostMessage.findByIdAndDelete(id);
    res.json({ message: 'Post deleted successfully.' });
  } catch (error) {
    res.status(409).json({ error });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send('post is not found');
    return;
  }
  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      { $inc: { likeCount: 1 } },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    res.status(409).json({ error });
    console.log(error);
  }
};