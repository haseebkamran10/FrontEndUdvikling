import { BrowserRouter as Router, Routes, Route , useNavigate} from 'react-router-dom';
import Header from './components/header/header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ContactInfo from './pages/ContactInfo/ContactInfo';
import { CartProvider } from './CartContext';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';

function HeaderWithNavigation() {
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate('/cart');
  };

  return <Header onCartClick={navigateToCart} />;
}
function App() {
  return (
    <CartProvider>
      <Router>
      <HeaderWithNavigation />
        <Routes>
          <Route path="/cart" element={<CheckoutPage />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
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