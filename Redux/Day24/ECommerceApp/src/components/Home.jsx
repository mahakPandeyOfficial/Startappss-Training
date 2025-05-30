import React from "react";
import Products from './Products'

const Home = () => {
  return (
    <div className="hero">
    <div className="card text-bg-dark text-black border-0">
      <img src="./assets/heroBg.png" className="card-img" alt="background" height="600px" />
      <div className="card-img-overlay d-flex justify-content-start align-items-center">
        <div className="container text-start" style={{  maxWidth: '30%', marginLeft: '1000px', marginBottom: '190px'}}>
          <h5 className="card-title display-3 mb-0">YOUR STYLE. YOUR STORE</h5>
          <p className="card-text lead fs-2">
          "Bringing the mall to your screen, one click at a time."
          </p>
          
        </div>
      </div>
    </div>

    <Products />
  </div>
  
  );
};

export default Home;
