import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../redux/postsSlice';

const UpdatePost = ({ postId }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.posts.posts.find((p) => p.id === postId)
  );
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      dispatch(updatePost({ id: postId, title, body }));
    }
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>Update Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default UpdatePost;