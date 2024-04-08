
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
// import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/basket" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/" element={<HomePage />} />


        // ... other routes
         
      </Routes>
    </Router>
  );
}

export default App;
