import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContext'; // Import useCart from the context you created
import Header from '../../components/header/header';
import CartList from '../../components/CartList/CartList';
import CartSummary from '../../components/CartSummary/CartSummary';
import './CheckoutPage.css';
import kookaburraImage from '../../kookaburra-bat.jpg'; // Make sure the path is correct
import grayNicollsImage from '../../gray-nicolls-bat.jpg';
import sgImage from '../../sg-bat.jpg';
import gmImage from '../../gm-bat.jpg';


const products = [
  { id: 1, name: "Kookaburra Kahuna", price: 2599.00, pictureUrl: kookaburraImage },
  { id: 2, name: "Gray-Nicolls Giant", price: 2799.00, pictureUrl: grayNicollsImage },
  { id: 3, name: "SG Sunny Gold", price: 3199.00, pictureUrl: sgImage },
  { id: 4, name: "GM Diamond", price: 2999.00, pictureUrl: gmImage },
];

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems, handleQuantityChange, total, discount } = useCart();

  // When the component mounts, initialize the cartItems in the context
  // with the products array if the cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      setCartItems(products.map(product => ({
        product: product,
        quantity: 0, // Initialize with a quantity of 0
      })));
    }
  }, [cartItems.length, setCartItems]);

  const goToContactInfo = () => {
    navigate('/contactinfo'); // Navigate to the Contact Info Page
  };

  return (
    <div className="checkout-page">
      <Header />
      <h1 className="checkout-heading">Velkommen til din indkøbskurv</h1>
      <div className="checkout-content">
        <CartList items={cartItems} onQuantityChange={handleQuantityChange} />
        <CartSummary total={total} discount={discount} onGoToPayment={goToContactInfo} />
      </div>
    </div>
  );
};

export default CheckoutPage;