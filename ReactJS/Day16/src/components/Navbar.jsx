import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-container flex items-start justify-between px-10 py-12">
      <div className="hero">
        <h1 className="text-6xl ">Hello Bloggers...</h1>
      </div>
      <nav className="right-navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
