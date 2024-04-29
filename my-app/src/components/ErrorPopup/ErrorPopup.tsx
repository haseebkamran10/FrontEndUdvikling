
import React , { useEffect }from 'react';
import './ErrorPopup.css'; 
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type ErrorPopupProps = {
  message: string;
  onClose: () => void;
  duration?: number;
};


const ErrorPopup: React.FC<ErrorPopupProps> = ({ message, onClose,duration = 2000 }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer); 
      }, [onClose, duration]);

  return (
    
    <div className="error-popup">
     <CheckCircleIcon className="check-icon" />
     <p className="message-content">{message} </p>Du skal acceptere vilkår og betingelser før du fortsætter.
     <CloseIcon onClick={onClose} className="close-icon"></CloseIcon>
    </div>
  );
};

export default ErrorPopup;
