import React, { useState ,useEffect  } from 'react';
import axios from 'axios';
import './LoginPage.css';
import CloseIcon from '@mui/icons-material/Close';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Link } from 'react-router-dom';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

interface LoginPageProps {
  isVisible: boolean;
  onClose: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ isVisible, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(''); 
    setSuccessMessage(''); 

    try {
      const response = await axios.post('https://nordiccricketdtu-3b6acaa15a99.herokuapp.com/auth/signin', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data) {
      setSuccessMessage('Sign in successful!');
      setEmail('');
      setPassword('');

    }

     
    
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
       
        if (error.response) {
          setErrorMessage(error.response.data.error || 'An error occurred during sign-in');
        } else if (error.request) {
          setErrorMessage('The server did not respond');
        } else {
          setErrorMessage(error.message);
        }
      } else {
        setErrorMessage('An unexpected error occurred');
      }
      console.error('Login error:', error);
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, []);
  

  const containerClasses = `login-page-cont${isVisible ? ' show' : ''}`;

  return (
    <div className={containerClasses} style={{ display: 'flex', flexDirection: 'column' }}>
      {loading && <LoadingIndicator />}
      <div className='right-cont'>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3>Log ind</h3>
          <CloseIcon onClick={onClose}  style={{ cursor: 'pointer' }}/>
        </div>

        {/* Success message pop-up */}
        {successMessage && <div className="success-message">{successMessage}</div>}

        {/* Error message pop-up */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <p style={{ textAlign: "left" }}>Log ind på din konto:</p>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='E-mail'
            required
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='Adgangskode'
            required
          />
          <div className='btns-cont'>
            <button type='button' className='btn1'>Glemt adgangskode</button>
            <button type="submit" className='btn2'>Log ind</button>
          </div>
        </form>
        <h3 style={{ textAlign: "left", fontSize: "1.0rem" }}>Ikke medlem endnu</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
  <SportsCricketIcon />
  <Link to="/signup" style={{ marginLeft: "15px", color: "gray", textDecoration: "none" }}>
    Bliv medlem
  </Link>
</div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <ErrorOutlineIcon />
          <p style={{ marginLeft: "15px", color: "gray" }}>Læs om alle fordele</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;