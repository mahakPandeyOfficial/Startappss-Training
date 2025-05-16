import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main-container flex items-start justify-between px-10 py-12">
      <div className="hero">
        <h1 className="text-6xl ">Hello Bloggers...</h1>
      </div>
      <nav className="right-navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Posts</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
