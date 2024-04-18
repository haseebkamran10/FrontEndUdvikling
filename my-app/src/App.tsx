import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

import LoginPage from './pages/LoginPage/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ContactInfo from './pages/ContactInfo/ContactInfo';
import { CartProvider } from './CartContext'; // Import the CartProvider
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';


function App() {
  return (
    <CartProvider> {/* Wrap your routes with CartProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/cart" element={<CheckoutPage />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          {/* ... other routes */}
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
          <Route path="/productspage" element={<ProductsPage />} />
          <Route path="/productdetail" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;