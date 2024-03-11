// src/components/CartList/CartList.tsx

import React from 'react';
import { CartItem as CartItemType } from '../../types/types';
import emptyCartIcon from '../../empty-cart.svg';
import './CartList.css';

type CartListProps = {
  items: CartItemType[];
  onQuantityChange: (id: number, delta: number) => void;
};

const CartList: React.FC<CartListProps> = ({ items, onQuantityChange }) => {
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
              <div className="cart-item-pricing">
                <span className="cart-item-price">{(item.product.price * item.quantity).toFixed(2)} DKK</span>
                <div className="cart-item-quantity-control">
                  <button onClick={() => onQuantityChange(item.product.id, -1)}>-</button>
                  <span className="cart-item-quantity">{item.quantity}</span>
                  <button onClick={() => onQuantityChange(item.product.id, 1)}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartList;
