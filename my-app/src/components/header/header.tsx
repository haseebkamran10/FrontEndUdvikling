import React, { useState } from 'react';
import './header.css';
import MenuIcon from '../../menu.svg';
import Logo from '../../logo.svg';
import SearchIcon from '../../search-icon.svg';
import ShoppingCartIcon from '../../shopping-cart-icon.svg';
import UserIcon from '../../user-icon.svg';
import LoginPage from '../../pages/LoginPage/LoginPage'; // Adjust the import path as necessary

type HeaderProps = {
  onCartClick: () => void;
};
const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const [isLoginPageVisible, setIsLoginPageVisible] = useState(false);

  // Event handler to toggle the visibility of the LoginPage
  const toggleLoginPage = () => {
    setIsLoginPageVisible(!isLoginPageVisible);
  };

  return (
    <>
      <div className="header-container">
        <div className="left-section">
          <img src={MenuIcon} alt="Menu" className="menu-icon" />
          <span className="page-title">Cricket Bats</span>
          <span className="page-title">Cricket Sko</span>
          <span className="page-title">Udstyr</span>
        </div>
        <div className="center-section">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="right-section">
          <div className="search-box">
            <img src={SearchIcon} alt="Search" className="search-icon" />
            <input type="text" placeholder="Hvad leder du efter" className="search-input" />
          </div>
          <img src={ShoppingCartIcon} alt="Shopping Cart" className="shopping-cart-icon"  onClick={onCartClick} />
          {/* User icon now controls the visibility of LoginPage */}
          <img src={UserIcon} alt="User" className="user-icon" onClick={toggleLoginPage} />
        </div>
      </div>
      {isLoginPageVisible && (
        <LoginPage
          isVisible={isLoginPageVisible}
          onClose={() => setIsLoginPageVisible(false)}
        />
      )}
    </>
  );
};

export default Header;
