import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import ConstructionPage from './pages/ConstructionPage/ConstructionPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ConstructionPage />} />
        <Route path="/basket" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        // ... other routes
      </Routes>
    </Router>
  );
}

export default App;
