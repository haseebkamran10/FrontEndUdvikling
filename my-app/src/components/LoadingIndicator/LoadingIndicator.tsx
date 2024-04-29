import React from 'react';
import './LoadingIndicator.css'; 

const LoadingIndicator: React.FC = () => {
  return (
    <div className="loading-overlay" data-testid="loading-overlay">
      <div className="spinner" data-testid="loading-spinner"></div>
    </div>
  );
};

export default LoadingIndicator;
