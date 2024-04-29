import React ,{useEffect,useState}from 'react';
import './ProductDetailsPage.css';
import img from '../../images/kookaburra-placeholder.png';
import klarnaLogo from '../../klarna-logo.svg';
import viaBillLogo from '../../viabill-logo.png';
import returnIcon from '../../Return.svg';
import shippingIcon from '../../shipping.svg';
import rocketIcon from '../../rocket.svg';
import expressbankLogo from '../../expressbank-logo.png'
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Product as Product } from '../../types/types';
import { useCart } from '../../CartContext';

const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{id: string}>(); 
  const { addToCart, cartItems, setCartItems } = useCart();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
  
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await axios.get(`https://nordiccricketdtu-3b6acaa15a99.herokuapp.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    }
    fetchProductDetails();
  }, [id]);

  const handleAddToBasket = () => {
    if (product) {
      addToCart(product);
      const existingItem = cartItems.find(item => item.product.id === product.id);
      if (existingItem) {
        setCartItems(cartItems.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      } else {
        setCartItems([...cartItems, { product, quantity: 1 }]);
      }
    }
  };

  
 

    
  if (!product) return <div>Product not found</div>;
  return (
    <div className='productdetails-page-cont'>
      {loading && <LoadingIndicator/>}
      <div className='left-cont'>
          <img src={product.image_url} alt="Cricket Bat" />
        </div><div className='right-cont'>
            <div className="category-info">
              <h1>Cricket Bats</h1>
            </div>
            <div className="product-info">
              <h2>{product.name}</h2>
              <div className='price-container'>
                <p className="price">
                {product.price}
                  <span className="original-price">DKK {(product.price + 500).toFixed(2)}</span>
                  <span className="save-price">Save DKK 500.00</span>
                </p>
              </div>
              <button className="add-to-basket-btn" onClick={handleAddToBasket}>
                Add to basket
              </button>
              <p className="availability">In stock</p>
              <p className="buy-now-text">Køb nu, betal senere</p>
              <div className="logos-container">
                <div className="logo-wrapper">
                  <img src={klarnaLogo} alt="Klarna" className="payment-logo klarna" />
                </div>
                <div className="logo-wrapper">
                  <img src={viaBillLogo} alt="ViaBill" className="payment-logo viabill" />
                </div>
                <div className="logo-wrapper">
                  <img src={expressbankLogo} alt="ExpressBank" className="payment-logo express-bank" />
                </div>

              </div>
              <div className="return-policy-container">
                <img src={returnIcon} alt="Return Policy" className="return-logo" />
                <span className="return-policy-text">365 dages fuld returret</span>
              </div>
              <div className="shipping-policy-container">
                <img src={shippingIcon} alt="Shipping" className="shipping-policy-icon" />
                <span className="shipping-policy-text">Gratis fragt på alle ordrer over DKK 3000</span>
              </div>

              <div className="fast-delivery-policy-container">
                <img src={rocketIcon} alt="Shipping" className="fast-delivery-policy-icon" />
                <span className="fast-delivery-policy-text">Afsendelse indenfor 1-2 hverdage</span>
              </div>
            </div>
          </div>

    </div>
  );
};

export default ProductDetailsPage;
