
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ContactInfo from './pages/ContactInfo/ContactInfo';
import { CartProvider } from './CartContext'; // Import the CartProvider
import { StripeProvider } from './utils/stripeClient'; 
import PaymentPage from './pages/PaymentPage/PaymentPage';


function App() {
  return (
    <StripeProvider>
    <CartProvider> {/* Wrap your routes with CartProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/cart" element={<CheckoutPage />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          <Route path="/paymentpage" element={< PaymentPage />} />
          {/* ... other routes */}
        </Routes>
      </Router>
    </CartProvider>
    </StripeProvider>
  );
}

export default App;