import React from 'react';
import { BrowserRouter as Router, Routes, Route ,useNavigate} from 'react-router-dom';
import Header from './components/header/header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ContactInfo from './pages/ContactInfo/ContactInfo';
import { CartProvider, useCart } from './CartContext';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import { SearchProvider  } from'./SearchContext'; 
import HomePage from './pages/HomePage/HomePage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import { useState } from 'react';
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator';
import TermsPage from './pages/TermsPage/TermsPage';

function HeaderWithNavigation() {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navigateToCart = () => {
    navigate('/cart');
  };
  const navigateToHomePage = () => {
    navigate('/');
  };

  return <Header onCartClick={navigateToCart}  onLogoClick={navigateToHomePage} cartItemCount={totalItems} />;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 250);

  return (
    <CartProvider>
      <SearchProvider>
        <Router>
         <HeaderWithNavigation/>
         {loading && <LoadingIndicator/>}
       
          <Routes>
          <Route path="/signup" element={<SignUpPage/>} />
           <Route path="/cart" element={<CheckoutPage />} />
           <Route path="/contactinfo" element={<ContactInfo />} />
           <Route path="/delivery" element={<DeliveryPage />} />
           <Route path="/paymentpage" element={<PaymentPage />} />
           <Route path="/productspage" element={<ProductsPage />} />
           <Route path="/productspage/:id" Component={ProductDetailsPage}/>
           <Route path="/terms" element={<TermsPage />} />
           <Route path="/" element={<HomePage />} />
          
          </Routes>
          
    
         
        </Router>
       
      </SearchProvider>
    </CartProvider>
  );
}

export default App;