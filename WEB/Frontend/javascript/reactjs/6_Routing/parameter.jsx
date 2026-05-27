// App.jsx
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/user/1">User 1</Link> |{" "}
        <Link to="/user/42">User 42</Link> |{" "}
        <Link to="/post/10/comment/3">Post 10 Comment 3</Link>
      </nav>
    </div>
  );
}

// Single route parameter
function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>User Page</h1>
      <p>User ID: {id}</p>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
}

// Multiple route parameters
function Comment() {
  const { postId, commentId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Comment Page</h1>
      <p>Post ID: {postId}</p>
      <p>Comment ID: {commentId}</p>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
}

// Optional parameter example
function Profile() {
  const { username } = useParams();
  return (
    <div>
      <h1>Profile Page</h1>
      <p>{username ? `Username: ${username}` : 'No username provided'}</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/post/:postId/comment/:commentId" element={<Comment />} />
        <Route path="/profile/:username?" element={<Profile />} />
      </Routes>
    </Router>
  );
}