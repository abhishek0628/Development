import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
      >
        Home
      </NavLink>
      <NavLink 
        to="/about"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
      >
        About
      </NavLink>
    </nav>
  );
}