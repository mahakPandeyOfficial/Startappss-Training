import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../../src/App.css';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div>
            
        
               <h1><NavLink to="/">React Query Learning</NavLink></h1>
              
             <nav>
             
            <ul>
               
                <li>
                <NavLink to="/home">Home</NavLink>
                </li>
                <li> 
                <NavLink to="/trad">Fetch Old</NavLink>
                </li>
                <li>
                <NavLink to="/rq">Fetch RQ</NavLink>
                </li>
                <li>
                <NavLink to="/login">Login</NavLink>
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
    </header>
  )
}

export default Header
