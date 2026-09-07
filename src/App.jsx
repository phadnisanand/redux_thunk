import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import PostsList from './components/PostsList';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';

function App() {

  const [postId, setPostId] = useState(null);

  return (
    <div>
      <h1>Redux Toolkit CRUD with React</h1>
      <CreatePost />
      {postId && <UpdatePost postId={postId} />}
      <PostsList />
    </div>
  );
}

export default App
