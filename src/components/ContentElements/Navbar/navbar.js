import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="navContainer">
      <ul className="navLinks">
        <li className="navItem">
          <Link to="/">Home </Link>
        </li>
        <li className="navItem">
          <Link to="/about">About Me </Link>
        </li>
        <li className="navItem">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="navItem">
          <Link to="/contact">Contact Me </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar