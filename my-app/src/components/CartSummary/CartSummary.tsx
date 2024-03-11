import React from 'react';
import { CartItem } from '../../types/types';
import './CartSummary.css';

type CartSummaryProps = {
  cartItems: CartItem[];
  goToPayment: () => void; // Add this prop for the goToPayment function
};

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems, goToPayment }) => {
  // Calculate the total price of the items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.quantity * item.product.price;
  }, 0);

  // Apply a 10% discount for orders over 300 DKK
  const discount = totalPrice > 300 ? totalPrice * 0.1 : 0;

  // Final price after applying the discount
  const finalPrice = totalPrice - discount;

  return (
    <div className="cart-summary">
      <h2 className="summary-title">Oversigt</h2>
      <div className="summary-row">
        <span className="summary-text">Sum</span>
        <span className="summary-price">{totalPrice.toFixed(2)} DKK</span>
      </div>
      <div className="summary-row">
        <span className="summary-text">Rabat</span>
        <span className="summary-price">-{discount.toFixed(2)} DKK</span>
      </div>
      <div className="summary-total">
        <span className="summary-text">Total</span>
        <span className="summary-price">{finalPrice.toFixed(2)} DKK</span>
      </div>
      <button className="checkout-button" onClick={goToPayment}>
  Gå til kassen
</button>
      {/* Payment method icons here */}
    </div>
  );
};

export default CartSummary;
