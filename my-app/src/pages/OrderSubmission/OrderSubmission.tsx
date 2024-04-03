// OrderSubmission.tsx
import React from 'react';
import './OrderSubmission.css'; // Corrected import

const OrderSubmission: React.FC = () => {
  const handlePayment = () => {
    // Handle payment logic here
    console.log('Payment processed!');
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <div className="form-group">
        <label htmlFor="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter card number" required />
      </div>
      <div className="form-group">
        <label htmlFor="expirationDate">Expiration Date</label>
        <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YY" required />
      </div>
      <div className="form-group">
        <label htmlFor="cvv">CVV</label>
        <input type="text" id="cvv" name="cvv" placeholder="CVV" required />
      </div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default OrderSubmission;
