import React, { useState } from 'react';
import Header from '../../components/header/header';
import CartList from '../../components/CartList/CartList';
import CartSummary from '../../components/CartSummary/CartSummary'; // Import the CartSummary component
import { CartItem } from '../../types/types';
import kookaburraImage from '../../kookaburra-bat.jpg';
import grayNicollsImage from '../../gray-nicolls-bat.jpg';
import sgImage from '../../sg-bat.jpg';
import gmImage from '../../gm-bat.jpg';
import './CheckoutPage.css';

// Sample product data (update with actual data as necessary)
const products = [
  { id: 1, name: "Kookaburra Kahuna", price: 2599.00, pictureUrl: kookaburraImage },
  { id: 2, name: "Gray-Nicolls Giant", price: 2799.00, pictureUrl: grayNicollsImage },
  { id: 3, name: "SG Sunny Gold", price: 3199.00, pictureUrl: sgImage },
  { id: 4, name: "GM Diamond", price: 2999.00, pictureUrl: gmImage },
];

// Initialize cart items with a quantity of 0
const initialCartItems: CartItem[] = products.map(product => ({
  product: product,
  quantity: 0,
}));

const CheckoutPage: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item,
      ),
    );
  };

  return (
    <div className="checkout-page">
      <Header />
      <h1 className="checkout-heading">Velkommen til din indkøbskurv</h1>
      <div className="checkout-content">
        <CartList items={cartItems} onQuantityChange={handleQuantityChange} />
        <CartSummary cartItems={cartItems} />

      </div>
    </div>
  );
};

export default CheckoutPage;
