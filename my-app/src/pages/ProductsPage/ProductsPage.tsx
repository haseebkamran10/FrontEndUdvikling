import React from 'react';
import './ProductsPage.css'; // Make sure to create this CSS file
import kookaburraImage from '../../kookaburra-bat.jpg';
const ProductsPage = () => {
  // Function to handle adding item to the basket
  const handleAddToBasket = () => {
    console.log('Item added to the basket');
  };

  return (
    <div className="product-container">
      <img src={kookaburraImage} alt="Cricket bat" className="cricket-bat-image" />
      <div className="card-items">
      <div className="product-info">
        <div className="category-info">
          <h1>Cricket Bats</h1>
        </div>
        <div className="cricket-bat-info">
          <h2>Adidas Incurza 3.0 Cricket Bat</h2>
          <p className="price">
            £150.00
            <span className="original-price">£300.00</span>
          </p>
          <button className="add-to-basket-btn" onClick={handleAddToBasket}>
            Add to basket
          </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProductsPage;
