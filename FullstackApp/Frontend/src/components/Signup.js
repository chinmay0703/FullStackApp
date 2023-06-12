import React, { useState } from 'react';
import './clinic.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset the error and success message states
    setError(null);
    setSuccessMessage('');

    // Make a POST request to the backend signup endpoint
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Signup failed');
        }
        return response.json();
      })
      .then((data) => {
        setSuccessMessage('User created successfully');
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred during signup');
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Signup</button>
          {successMessage && <p>{successMessage}</p>}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
