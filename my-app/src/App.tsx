
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import CheckoutPage from './pages/CheckoutPage2/CheckoutPage2';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import CheckoutPage2 from './pages/CheckoutPage2/CheckoutPage2';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<CheckoutPage2 />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/productdetail" element={<ProductDetailsPage />} />
        // ... other routes
         
      </Routes>
    </Router>
  );
}

export default App;
