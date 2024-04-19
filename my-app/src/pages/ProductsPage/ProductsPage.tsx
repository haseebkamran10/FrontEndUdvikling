import React,{ useState, useEffect  } from 'react';
import axios from 'axios';
import { useCart } from '../../CartContext';
import './ProductsPage.css'; 
import sortFilter from '../../sortFilter.png';
import SortFilterPage from '../SortFilterPage/SortFilterPage';
import { Button } from '@mui/material';
import {Product as Product } from '../../types/types';


const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const { cartItems, setCartItems } = useCart();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  

  const handleAddToBasket = (product: Product) => {
    addToCart(product);
    const existingItem = cartItems.find(item => item.product.id === product.id);
  
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([
        ...cartItems,
        { 
          product,
          quantity: 1 
        },
      ]);
    }
  };

  return (
    <div className="container">
      <h1 className='title'>Produkter</h1>
      <div className="sort-filter">
        <button className="sort-filter-button" onClick={() => setShowModal(true)}>
          <span>Sortér og Filtrér</span>
          <img src={sortFilter} alt="Sort & Filter" className="filter-icon"/>
        </button>
      </div>
      <div className="product-page">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image_url}/>
            <h3>{product.name}</h3> 
            <p>{product.price} kr.</p> 
            <Button className="addToBasket" onClick={() => handleAddToBasket(product)}>Add to Basket</Button>
            <SortFilterPage show={showModal} onClose={() => setShowModal(false)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
