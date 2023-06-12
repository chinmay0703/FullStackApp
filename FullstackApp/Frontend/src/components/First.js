import React from 'react';
import { Link } from 'react-router-dom';
import k from './images/khara.jpg';
import ke from './images/bodu.jpg';
import news from './images/meditation.jpeg';
import yoga from './images/yogaa.jpeg';
import './clinic.css';
// import Services from './Services';
// import Muscle from './Muscle';

function First() {
  return (
    <div className="contain">
       <h2 className="services-heading">Senior Wellness Hub</h2>
      <div className="ro">
        <Link to="/Services">
          <div>
            <img className="ima" src={k} alt='pht' />
            <figcaption className="caption">Knee pain</figcaption>
          </div>
        </Link>
        <Link to="/Muscle">
          <div>
            <img className="ima" src={ke} alt='pht' />
            <figcaption className="caption">Muscle Strength</figcaption>
          </div>
        </Link>
        <div>
        <Link to="/MeditationExercises">
            <img className="ima" src={news} alt='pht' />
            <figcaption className="caption">Meditation</figcaption>
            </Link>
        </div>
        <div>
          <a href="https://www.nytimes.com/guides/well/beginner-yoga" target="_blank" rel="noopener noreferrer">
            <img className="ima" src={yoga} alt='pht' />
            <figcaption className="caption">Yoga</figcaption>
          </a>
        </div>
        <br></br>
      </div>
      <div className="cont">
        <div className="old-man"></div>
      </div>
    </div>
  );
}

export default First;
