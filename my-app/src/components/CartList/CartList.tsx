// src/components/CartList/CartList.tsx
import React from 'react';
import { CartItem as CartItemType } from '../../types/types'; // Ensure the path is correct
import emptyCartIcon from '../../empty-cart.svg'; // Ensure the path is correct
import './CartList.css';

type CartListProps = {
  items: CartItemType[];
};

const CartList: React.FC<CartListProps> = ({ items }) => {
  return (
    <div className="cart-list">
      {items.length === 0 ? (
        <div className="cart-list-empty">
          <h2 className="empty-cart-header">Velkommen til din indkøbskurv</h2>
          <img src={emptyCartIcon} alt="Empty Cart" className="empty-cart-icon" />
          <p className="empty-cart-message">
            Det ser ud til, at din kurv er tom. Start din shopping ved at tilføje varer til kurven.
          </p>
        </div>
      ) : (
        items.map((item) => (
          <div key={item.product.id} className="cart-item">
            <img src={item.product.pictureUrl} alt={item.product.name} className="cart-item-image" />
            <div className="cart-item-details">
              <span className="cart-item-name">{item.product.name}</span>
              <span className="cart-item-quantity">Quantity: {item.quantity}</span>
              <span className="cart-item-price">{item.product.price} DKK</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartList;
