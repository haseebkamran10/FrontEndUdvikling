import { BrowserRouter as Router, Routes, Route , useNavigate} from 'react-router-dom';
import Header from './components/header/header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ContactInfo from './pages/ContactInfo/ContactInfo';
import { CartProvider, useCart } from './CartContext';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import { SearchProvider  } from'./SearchContext'; 
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories';

function HeaderWithNavigation() {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navigateToCart = () => {
    navigate('/cart');
  };

  return <Header onCartClick={navigateToCart} cartItemCount={totalItems} />;
}
function App() {
  return (
    <CartProvider>
      <SearchProvider>
      <Router>
      <HeaderWithNavigation />
       <div className="main-content">
        <Routes>
          <Route path="/cart" element={<CheckoutPage />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
          <Route path="/productspage" element={<ProductsPage />} />
          <Route path="/productdetail" element={<ProductDetailsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
       </div>
       <Categories/>
       <Footer />
      </Router>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;