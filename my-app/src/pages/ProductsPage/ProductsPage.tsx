import React  from 'react';
import './ProductsPage.css'; // Make sure to create this CSS file
import kookaburraImage from '../../kookaburra-bat.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faKlarna } from '@fortawesome/free-brands-svg-icons';

const ProductsPage: React.FC = () => {
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
          <div className='price-container'>
          <p className="price">
            £150.00
            <span className="original-price">£300.00</span>
            <span className="save-price">£150.00</span>
          </p>
          </div>
          <button className="add-to-basket-btn" onClick={handleAddToBasket}>
            Add to basket
          </button>
          </div>
          <div className="payment-methods">
            <FontAwesomeIcon icon={faPaypal}/>
            <FontAwesomeIcon icon={faKlarna}/>
           <i className="fab fa-paypal">Pay in 3 interest-free payments of £35.99.</i>
            <i className="fab fa-klarna">Make 3 payments of £34.99.</i>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProductsPage;
