import React, { useState ,useEffect  } from 'react';
import axios from 'axios';
import './SignUpPage.css';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';


const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(''); 

    try {
      const response = await axios.post('https://nordiccricketdtu-3b6acaa15a99.herokuapp.com/auth/signup', {
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        setMessage('Signup successful!');
      } else {
        setMessage('An unexpected error occurred.');
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setMessage(`Signup failed: ${error.response?.data?.error || error.message}`);
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, []);

  return (
 <div className="container-main">
  {loading && <LoadingIndicator />}
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