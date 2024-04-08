
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import PaymentPage from './pages/ContactInfo/ContactInfo';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ContactInfo from './pages/ContactInfo/ContactInfo';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/cart" element={<CheckoutPage />} />
        <Route path="/contactinfo" element={<ContactInfo />} />
        <Route path="/productdetail" element={<ProductDetailsPage />} />
        <Route path="/productspage" element={<ProductsPage />} />

        // ... other routes
         
      </Routes>
    </Router>
  );
}

export default App;
