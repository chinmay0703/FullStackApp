import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './images/home.jpeg'
import './clinic.css'
const Home = () => {
    return (
      
      <div className="home-container" style={{ backgroundImage: `url(${backgroundImage.toString()})` }}>
        <div className='home-content'> 
        <h2>Welcome to Our Website</h2>
        <p className="home-message">
          Sign up now and discover a world of possibilities tailored for you!
        </p>
        <Link to="/signup" className="signup-link">
          Sign Up
        </Link>
        <br />
        <br />
        <Link to="/signin" className="signup-link">
          Signin
        </Link>
        </div>
      </div>
    );
  };
  export default Home;