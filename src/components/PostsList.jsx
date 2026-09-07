import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost, updatePost, fetchPostById } from '../redux/postsSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleUpdatePost = (id) => {
    dispatch(fetchPostById(id));
  };

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <button onClick={() => handleUpdatePost(post.id)}>Edit</button>
          </li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {content}
    </div>
  );
};

export default PostsList;