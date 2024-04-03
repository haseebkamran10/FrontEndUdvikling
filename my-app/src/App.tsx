import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/basket" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/productspage" element={<ProductsPage 
    productName="Example Product Name" 
    productPrice={150.00} 
    discountPrice={100.00} 
    currency="£" />} />
        // ... other routes
      </Routes>
    </Router>
  );
}

export default App;
