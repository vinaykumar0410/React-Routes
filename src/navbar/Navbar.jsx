import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../auth/Auth";
import './navbar.css'

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className='nav-item'>Home</NavLink>
        <NavLink to="/about" className='nav-item'>About</NavLink>
        <NavLink to="/contact" className='nav-item'>Contact</NavLink>
        <NavLink to="/projects" className='nav-item'>Projects</NavLink>
        <NavLink to="/users" className='nav-item'>Users</NavLink>
        {user ? (
          <NavLink to="/logout" className='nav-item' onClick={logout}>
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login" className='nav-item'>Login</NavLink>
        )}
        <Link id="user">{user}</Link>
      </nav>
    </>
  );
};

export default Navbar;
