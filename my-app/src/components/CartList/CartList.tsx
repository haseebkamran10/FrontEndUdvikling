import React from 'react';
import { CartItem as CartItemType } from '../../types/types';
import './CartList.css';

type CartListProps = {
  items: CartItemType[];
  onQuantityChange: (id: number, delta: number) => void;
};

const CartList: React.FC<CartListProps> = ({ items, onQuantityChange }) => {
  return (
    <div className="cart-list">
      {/* Heading added here to always show before the list of items */}
      <h1 className="cart-list-heading">Velkommen til din indkøbskurven</h1>

      {items.map((item) => (
        <div key={item.product.id} className="cart-item">
          <img src={item.product.image_url} alt={item.product.name} className="cart-item-image" />
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
      ))}
    </div>
  );
};

export default CartList;
