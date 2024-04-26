import React, { useState } from 'react';
import axios from 'axios';
import './SignUpPage.css'

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(''); 

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
 <div className="container-main">
    <div className="signup-container">
  
      <h2>Opret Bruger</h2>
      <form onSubmit={handleSignUp}className="signup-form">
     
        <div className="signup-input-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="signup-input-container">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
        {message && <p style={{ color: message.startsWith('Signup failed') ? 'red' : 'green' }}>{message}</p>} {/* Display the message below the button */}
      </form>
    </div>
  </div> 
    
  );
};

export default SignUp;