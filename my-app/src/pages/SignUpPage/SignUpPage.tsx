import React, { useState } from 'react';
import axios from 'axios';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State to store messages from the server

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(''); // Clear any previous messages

    try {
      const response = await axios.post('http://localhost:3000/auth/signup', {
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        setMessage('Signup successful!');
      } else {
        setMessage('An unexpected error occurred.');
      }
    } catch (error: any) {
      setMessage(`Signup failed: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
      <form onSubmit={handleSignUp} style={{ width: '100%', maxWidth: '400px' }}>
        <div className="contact-info-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="contact-info-container">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        {message && <p style={{ color: message.startsWith('Signup failed') ? 'red' : 'green' }}>{message}</p>} {/* Display the message below the button */}
      </form>
    </div>
  );
};

export default SignUp;