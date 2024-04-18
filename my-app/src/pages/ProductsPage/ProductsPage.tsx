import React,{ useState } from 'react';
import { useCart } from '../../CartContext';
import './ProductsPage.css'; 
import grayNicollsImage from '../../gray-nicolls-bat.jpg';
import gmbat from '../../gm-bat.jpg'; 
import sortFilter from '../../sortFilter.png';
import SortFilterPage from '../SortFilterPage/SortFilterPage';
import kookaburra from '../../kookaburra-bat.jpg';
import { Button } from '@mui/material';

type Product = {
  id: number;
  name: string;
  price: number;
  pictureUrl: string;
};

const product: Product[] = [
  
  { id: 1, name: 'Gray Nicolls ', price: 850, pictureUrl: gmbat },
  { id: 2, name: 'Kookaburra', price: 900, pictureUrl: grayNicollsImage },
  { id: 3, name: 'Gray Nicolls ', price: 850, pictureUrl: kookaburra },
  { id: 4, name: 'Kookaburra', price: 900, pictureUrl: grayNicollsImage },
  { id: 5, name: 'Gray Nicolls ', price: 850, pictureUrl: kookaburra },
  { id: 6, name: 'Kookaburra', price: 900, pictureUrl: gmbat },
  { id: 7, name: 'Gray Nicolls ', price: 850, pictureUrl: grayNicollsImage },
  { id: 8, name: 'Kookaburra', price: 900, pictureUrl: gmbat },
  { id: 9, name: 'Gray Nicolls ', price: 850, pictureUrl: kookaburra },
  { id: 10, name: 'Kookaburra', price: 900, pictureUrl: grayNicollsImage },
  { id: 11, name: 'Gray Nicolls ', price: 850, pictureUrl: gmbat },
  { id: 12, name: 'Kookaburra', price: 900, pictureUrl: kookaburra },
  { id: 13, name: 'Gray Nicolls ', price: 850, pictureUrl: grayNicollsImage },
  { id: 14, name: 'Kookaburra', price: 900, pictureUrl: gmbat },
  { id: 15, name: 'Gray Nicolls ', price: 850, pictureUrl: kookaburra },
  { id: 16, name: 'Kookaburra', price: 900, pictureUrl: grayNicollsImage },
];

const ProductPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { cartItems, setCartItems } = useCart();
  const handleAddToBasket = (product: Product) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((item) => item.product.id === product.id);
  
    if (existingItem) {
      // Increment the quantity if the item is already in the cart
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Add the new item to the cart with quantity 1
      // Make sure the product object shape matches the expected CartItem product shape
      setCartItems([
        ...cartItems,
        { 
          product: {
            id: product.id,
            name: product.name,
            price: product.price,
            pictureUrl: product.pictureUrl, // Ensure the property name matches
          }, 
          quantity: 1 
        },
      ]);
    }
  };


    return (
      <div className="container">
        <h1 className='title'>Produkter</h1>
        <div className="sort-filter">
          <button className="sort-filter-button" onClick={() => { setShowModal(true)}}>
            <span>Sortér og Filtrér</span>
            <img src={sortFilter} alt="Sort & Filter" className="filter-icon"/>
          </button>
        </div>
        <div className="product-page">
          {product.map((product) => (
           <div key={product.id} className="product-card">
           <img src={product.pictureUrl} alt={product.name} />
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
