import React from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './clinic.css'; // Import the CSS file for styling
import authorImage from './images/yt.jpeg';
import illustratorImage from './images/rrr.jpeg';

const MeditationExercises = () => {
  return (
    <div className="meditation-container">
      <h1 className="title">What Is Meditation?</h1>
      <h2 className="subtitle">Make It a Habit</h2>
      <h2 className="subtitle">More Exercises</h2>
      <h2 className="subtitle">Meditation's Challenges</h2>
      <h2 className="subtitle">Go Deeper</h2>
      <h2 className="subtitle">How to Meditate</h2>
      <div className="image-container">
        <img className="author-image" src={authorImage} alt="Author" />
        <img className="illustrator-image" src={illustratorImage} alt="Illustrator" />
      </div>
      <p className="description">
        Meditation is a simple practice available to all, which can reduce stress, increase calmness and clarity, and promote happiness. Learning how to meditate is straightforward, and the benefits can come quickly. Here, we offer basic tips to get you started on a path toward greater equanimity, acceptance, and joy. Take a deep breath, and get ready to relax.
      </p>
      <h3 className="section-title">Meditation Exercises</h3>
      <p className="instruction">Find a comfortable spot and get ready to relax.</p>
      {/* Rest of the content */}
    </div>
  );
};

export default MeditationExercises;
