// src/components/CartSummary/CartSummary.tsx
import React from 'react';
import { CartItem } from '../../types/types'; // Adjust the import path as needed
import './CartSummary.css';

type CartSummaryProps = {
  cartItems: CartItem[];
};

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems }) => {
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
      {/* Implement additional discount logic and display here */}
      <button className="checkout-button">Gå til kassen</button>
      {/* Payment method icons here */}
    </div>
  );
};

export default CartSummary;
