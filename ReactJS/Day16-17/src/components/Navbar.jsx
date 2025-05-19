import React from "react";
import "./Navbar.css";
import { NavLink ,Link } from "react-router-dom";

//by using NavLink we can add active class to the link

const Navbar = () => {
  return (
    <div className="main-container flex items-start justify-between px-10 py-12">
      <div className="hero">
        <h1 className="text-6xl ">Hello Bloggers...</h1>
      </div>
      <nav className="right-navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
