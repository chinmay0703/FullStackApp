
import React from 'react';
import './clinic.css';
import mapp from './images/map.jpg';
const Map = () => {
    const handleClick = () => {
      window.open('https://goo.gl/maps/5kjjRq2Gz4bw7iQY8'); // Replace 'https://example.com' with your desired URL
    };
  
    return (
      <div className='containerr'>
        <h5 className='buttoooo'>___________</h5>
        <h5 className='buttoooo'>CONTACT US</h5>
      
        <img src={mapp} alt="Ima" className='responsive-imagee' onClick={handleClick} />
      </div>
    );
  };
  


export default Map;



