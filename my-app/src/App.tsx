
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
//import LoginPage from './pages/LoginPage/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    <Router>
       <Routes>
       <Header/>
        <Route path="/basket" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/productdetail" element={<ProductDetailsPage />} />
        <Route path="/productspage" element={<ProductsPage />} />
        // ... other routes
         
      </Routes>
    </Router>
    
  );
}

export default App;
