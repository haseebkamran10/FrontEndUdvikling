import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContext'; 
import Header from '../../components/header/header';
import CartList from '../../components/CartList/CartList';
import CartSummary from '../../components/CartSummary/CartSummary';
import './CheckoutPage.css';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, handleQuantityChange, total, discount } = useCart();

  const goToContactInfo = () => {
    navigate('/contactinfo'); 
  };

  const goToProductsPage = () => {
    navigate('/productspage');
  };

  useEffect(() => {
    console.log("Cart Items in CheckoutPage:", cartItems);
  }, [cartItems]);

  return (
    <div className="checkout-page">
      <Header onCartClick={function (): void { } } cartItemCount={0}/>
      <h1 className="checkout-heading">Velkommen til din indkøbskurv</h1>
      <div className="checkout-content">
        <CartList items={cartItems} onQuantityChange={handleQuantityChange} />
        <CartSummary total={total} discount={discount} onGoToPayment={goToContactInfo} />
      </div>
      <div className="checkout-button">
        <button onClick={goToProductsPage}>Tilbage</button>
        <button onClick={goToContactInfo}>Fortsæt</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
