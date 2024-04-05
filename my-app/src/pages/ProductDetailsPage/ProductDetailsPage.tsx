import React from 'react';
import './ProductDetailsPage.css';
import img from '../../kookaburra-placeholder.png';
import klarnaLogo from '../../klarna-logo.svg';
import viaBillLogo from '../../viabill-logo.png';
import returnIcon from '../../Return.svg';
import shippingIcon from '../../shipping.svg';
import rocketIcon from '../../rocket.svg';
import expressbankLogo from '../../expressbank-logo.png'

const ProductDetailsPage = () => {
  const handleAddToBasket = () => {
    console.log('Item added to the basket');
  };

  return (
    <div className='productdetails-page-cont'>
      <div className='left-cont'>
        <img src={img} alt="Cricket Bat" />
      </div>
      <div className='right-cont'>
        <div className="category-info">
          <h1>Cricket Bats</h1>
        </div>
        <div className="product-info">
          <h2>Kookaburra Kahuna Cricket Bat</h2>
          <div className='price-container'>
            <p className="price">
              DKK 2400
              <span className="original-price">DKK 3000.00</span>
              <span className="save-price">Save DKK 600.00</span>
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
