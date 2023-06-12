import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './clinic.css';
import First from './First';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle the response as needed

        if (data.success) {
          setIsLoggedIn(true);
          setError(null);
          navigate('/First'); // Navigate to '/First' route
        } else {
          setError('Invalid email or password');
        }
      } else {
        throw new Error('Signin request failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Wrong Credentials');
    }
  };

  return (
    <div className="signin-container">
      {isLoggedIn ? (
        <First />
      ) : (
        <div className="signin-box">
          <h2>Signin</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
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
            <button type="submit">Signin</button>

            {error && <p>{error}</p>}
          </form>
        </div>
      )}
    </div>
  );
};

export default Signin;
