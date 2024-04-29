import React, { useEffect ,useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContext'; 
import Header from '../../components/header/header';
import CartList from '../../components/CartList/CartList';
import CartSummary from '../../components/CartSummary/CartSummary';
import './CheckoutPage.css';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import ErrorPopup from '../../components/ErrorPopup/ErrorPopup';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, handleQuantityChange, total, discount } = useCart();
  const [loading, setLoading] = useState(true);
  const [hasAgreedToTerms, setHasAgreedToTerms] = useState(false);
  const [error, setError] = useState('');
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const goToContactInfo = () => {
    if (!hasAgreedToTerms) {
      setError('');
      setShowErrorPopup(true);
      return;
    }
    setError('');
    setShowErrorPopup(false);
    navigate('/contactinfo'); 
  };

  const goToProductsPage = () => {
    navigate('/productspage');
  };
  const navigateToHomePage = () => {
    navigate('/');
  };

  useEffect(() => {
    console.log("Cart Items in CheckoutPage:", cartItems);
  }, [cartItems]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="checkout-page">
    {loading && <LoadingIndicator />}
    {showErrorPopup && (
        <ErrorPopup message={error} onClose={() => setShowErrorPopup(false)}  duration={2000} />
      )}
      <Header onCartClick={function (): void { } }  onLogoClick={navigateToHomePage}cartItemCount={0}/>
      <h1 className="checkout-heading">Velkommen til din indkøbskurv</h1>
      <div className="checkout-content">
        <CartList items={cartItems} onQuantityChange={handleQuantityChange} />
        <CartSummary total={total} discount={discount} onGoToPayment={goToContactInfo} />
      </div>
      <div className="terms-container">
  <input
    id="terms-checkbox"
    type="checkbox"
    checked={hasAgreedToTerms}
    onChange={(e) => setHasAgreedToTerms(e.target.checked)}
  />
  <label htmlFor="terms-checkbox">
    Jeg accepterer&nbsp;<a href="/terms"> vilkår og betingelser</a>.
  </label>
</div>
{error && <p className="error-message">{error}</p>}
      <div className="checkout-button">
        <button  className="checkout-button-1" onClick={goToProductsPage}>Tilbage</button>
        <button className="checkout-button-2"onClick={goToContactInfo}>Fortsæt</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
