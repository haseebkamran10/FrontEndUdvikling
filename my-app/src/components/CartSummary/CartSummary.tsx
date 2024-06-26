import React from 'react';
import './CartSummary.css';
type CartSummaryProps = {
  total: number;
  discount: number;
  onGoToPayment: () => void;
};

const CartSummary: React.FC<CartSummaryProps> = ({ total, discount, onGoToPayment }) => {
  const deliveryCharge = 40; 

  return (
    <div className="cart-summary">
        <h4>Oversigt</h4>
        <hr />
        <div className="summary-row">
          <p>Sum</p>
          <p>{total - discount} kr.</p>
        </div>
        {discount > 0 && <p className="discount">10 % discount on Total</p>}
        
        <div className="summary-row">
          <p>Levering</p>
          <p>{deliveryCharge} kr.</p>
        </div>
        <hr />
        <div className="summary-row">
          <p>Total</p>
          <p>{total + deliveryCharge - discount} kr.</p>
        </div>
        <hr />
        <p>Du kan indtaste værdikuponer og vælge din leveringsmuligheder ved kassen</p>
              </div>
  );
};

export default CartSummary;
