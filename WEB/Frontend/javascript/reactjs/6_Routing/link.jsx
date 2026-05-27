import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>   {/* navigates to / */}
      <Link to="/about">About</Link> {/* navigates to /about */}
    </nav>
  );
}

export default Navbar;