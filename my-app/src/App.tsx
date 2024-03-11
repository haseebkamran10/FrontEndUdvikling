import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/basket" element={<CheckoutPage />} />
        {/* Other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
