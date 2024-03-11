// src/pages/CheckoutPage/CheckoutPage.tsx

import React from 'react';
import Header from '../../components/header/header'; // Adjust the path as needed
import CartList from '../../components/CartList/CartList';
import { CartItem } from '../../types/types'; // Adjust the path as needed
import kookaburraImage from '../../kookaburra-bat.jpg'; // Adjust the path as needed
import './CheckoutPage.css'; // This will style the Checkout page

// Sample cart items data for testing purposes
const sampleCartItems: CartItem[] = [
  {
    product: {
      id: 1,
      name: "Kookaburra Kahuna",
      price: 2599.00,
      pictureUrl: kookaburraImage, // Use the imported image
    },
    quantity: 2,
  },
  // ... add more items as needed for testing
];

const CheckoutPage: React.FC = () => {
  return (
    <div className="checkout-page">
      <Header /> {/* This ensures the Header is the first thing in your checkout page */}
      <CartList items={sampleCartItems} />
      {/* Here you can add more components like CartSummary, CheckoutForm, etc. */}
    </div>
  );
};

export default CheckoutPage;
