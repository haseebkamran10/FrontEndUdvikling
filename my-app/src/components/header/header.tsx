import React from 'react';
import './header.css';
import MenuIcon from '../../menu.svg';
import Logo from '../../logo.svg';
import SearchIcon from '../../search-icon.svg';
import UserIcon from '../../user-icon.svg';
import ShoppingCartIcon from '../../shopping-cart-icon.svg';

const Header: React.FC = () => {
  return (
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
        <img src={ShoppingCartIcon} alt="Shopping Cart" className="shopping-cart-icon" />
        <img src={UserIcon} alt="User" className="user-icon" />
      </div>
    </div>
  );
};

export default Header;
