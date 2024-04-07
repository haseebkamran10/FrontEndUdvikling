import React,{ useState } from 'react';
import './ProductsPage.css'; 
import grayNicollsImage from '../../gray-nicolls-bat.jpg';
import sortFilter from '../../sortFilter.png';
import SortFilterPage from '../SortFilterPage/SortFilterPage';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const products: Product[] = [
  
  { id: 1, name: 'Gray Nicolls ', price: 850, imageUrl: grayNicollsImage },
  { id: 2, name: 'Kookaburra', price: 900, imageUrl: grayNicollsImage },
  { id: 1, name: 'Gray Nicolls ', price: 850, imageUrl: grayNicollsImage },
  { id: 2, name: 'Kookaburra', price: 900, imageUrl: grayNicollsImage },
  { id: 1, name: 'Gray Nicolls ', price: 850, imageUrl: grayNicollsImage },
  { id: 2, name: 'Kookaburra', price: 900, imageUrl: grayNicollsImage },
  { id: 1, name: 'Gray Nicolls ', price: 850, imageUrl: grayNicollsImage },
  { id: 2, name: 'Kookaburra', price: 900, imageUrl: grayNicollsImage },
  { id: 1, name: 'Gray Nicolls ', price: 850, imageUrl: grayNicollsImage },
  { id: 2, name: 'Kookaburra', price: 900, imageUrl: grayNicollsImage },
  { id: 1, name: 'Gray Nicolls ', price: 850, imageUrl: grayNicollsImage },
  { id: 2, name: 'Kookaburra', price: 900, imageUrl: grayNicollsImage },
];

const ProductPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

    return (
      <div className="container">
        <div className="sort-filter">
          <button className="sort-filter-button" onClick={() => { setShowModal(true)}}>
            <span>Sort & Filter</span>
            <img src={sortFilter} alt="Sort & Filter" className="filter-icon"/>
          </button>
        </div>
        <div className="product-page">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} kr.</p>
              <SortFilterPage show={showModal} onClose={() => setShowModal(false)} />
            </div>
          ))}
        </div>
      </div>
    );
  };


export default ProductPage;
