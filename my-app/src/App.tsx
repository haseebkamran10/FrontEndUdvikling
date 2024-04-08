
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import PaymentPage from './pages/ContactInfo/ContactInfo';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ContactInfo from './pages/ContactInfo/ContactInfo';
import { CartProvider } from './CartContext'; // Import the CartProvider



function App() {
  return (
    <CartProvider> {/* Wrap your routes with CartProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/cart" element={<CheckoutPage />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          {/* ... other routes */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;