import React from 'react';
import './ProductDetailsPage.css';
import img from '../../gray-nicolls-placeholder.jpg'; // This goes up from ProductDetailsPage -> pages and then into src

const ProductDetailsPage = () => {
  return (
    <div className='productdetails-page-cont' style={{ display: 'flex' }}>
      <div className='left-cont'>
        <img src={img} alt="Kookaburra Cricket Bat" />
      </div>
      <div className='right-cont'>
        {/* Product details such as title, price, description, and add-to-basket button */}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
