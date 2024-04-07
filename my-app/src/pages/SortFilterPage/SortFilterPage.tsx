import React from 'react';
import './SortFilterPage.css';

type Props = {
  show: boolean;
  onClose: () => void;
};

const SortFilterPage: React.FC<Props> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Filter Products</h2>
          <button className="close-modal" onClick={onClose}>&times;</button>
        </div>
        <ul className="filter-options">
          <li>Sort <span className="arrow">&gt;</span></li>
          <li>Price Range <span className="arrow">&gt;</span></li>
          {/* ... more filter options */}
        </ul>
        <button className="modal-button" onClick={onClose}>View Products (10)</button>
      </div>
    </div>
  );
};

export default SortFilterPage;
