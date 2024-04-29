import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../../CartContext';
import './ProductsPage.css'; 
import sortFilter from '../../sortFilter.png';
import SortFilterPage from '../SortFilterPage/SortFilterPage';
import { Button } from '@mui/material';
import {Product as Product } from '../../types/types';
import { useSearch } from '../../SearchContext';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import { useNavigate } from 'react-router-dom';

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const { cartItems, setCartItems } = useCart();
  const { addToCart } = useCart();
  const { searchTerm } = useSearch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('https://nordiccricketdtu-3b6acaa15a99.herokuapp.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const navigateToProductDetail = (id: number) => {
    navigate(`/productspage/${id}`); 
  };


   useEffect(() => {
    if (searchTerm !== '') { 
      const fetchProductsBySearch = async () => {
        try {
          const response = await axios.get<Product[]>(`https://nordiccricketdtu-3b6acaa15a99.herokuapp.com/products/search?name=${encodeURIComponent(searchTerm)}`);
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products by search:', error);
          setError('Failed to load search results.');
        }
      };
      fetchProductsBySearch();
    }
  }, [searchTerm]);
  
  useEffect(() => {
    console.log("Updated Cart Items in ProductPage:", cartItems);
}, [cartItems]);
useEffect(() => {
  const timeout = setTimeout(() => {
    setLoading(false);
  }, 250);

  return () => clearTimeout(timeout);
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
      {loading && <LoadingIndicator />}
      {error && <div className="error">{error}</div>}
      <div className="sort-filter">
        <button className="sort-filter-button" onClick={() => setShowModal(true)}>
          <span>Sortér og Filtrér</span>
          <img src={sortFilter} alt="Sort & Filter" className="filter-icon"/>
        </button>
      </div>
      <div className="product-page">
        {products.map((product) => (
          <div key={product.id} className="product-card" >
            <img src={product.image_url} onClick={() => navigateToProductDetail(product.id)}/>
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
