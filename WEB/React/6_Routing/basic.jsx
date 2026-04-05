// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />      {/* default page */}
        <Route path="/about" element={<About />} /> {/* another page */}
      </Routes>
    </Router>
  );
}

export default App;