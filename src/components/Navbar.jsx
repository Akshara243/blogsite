import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">My Travel Blog</h1>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
          <li><Link to="/login" className="nav-link">Login</Link></li>
          <li><Link to="/posts" className="nav-link">Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
