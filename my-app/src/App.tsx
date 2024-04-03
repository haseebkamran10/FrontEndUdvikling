// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import OrderSubmission from './pages/OrderSubmission/OrderSubmission';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/basket" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        {/* Other routes */}
        <Route path="/OrderSubmission" element={<OrderSubmission />} />
      </Routes>
    </Router>
  );
}

export default App;
