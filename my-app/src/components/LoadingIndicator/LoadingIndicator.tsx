import React from 'react';
import './LoadingIndicator.css'; // Style for the loading indicator

const LoadingIndicator: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingIndicator;
