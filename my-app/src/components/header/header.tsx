import React, { useState } from 'react';
import './header.css';
import MenuIcon from '../../menu.svg';
import Logo from '../../logo.svg';
import SearchIcon from '../../search-icon.svg';
import ShoppingCartIcon from '../../shopping-cart-icon.svg';
import UserIcon from '../../user-icon.svg';
import LoginPage from '../../pages/LoginPage/LoginPage'; // Adjust the import path as necessary
import { useSearch } from'../../SearchContext'; 

type HeaderProps = {
  onCartClick: () => void;
  onLogoClick: () => void;
  cartItemCount: number;
};

const Header: React.FC<HeaderProps> = ({ onCartClick, onLogoClick,cartItemCount }) => {
  const { setSearchTerm } = useSearch();
  const [inputValue, setInputValue] = useState(''); 
  const [isLoginPageVisible, setIsLoginPageVisible] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Before setting state:", inputValue);
    setInputValue(event.target.value);
    console.log("After setting state:", event.target.value);
  };
  const handleSearchSubmit = () => {
    setSearchTerm(inputValue);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };


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
          <img src={Logo} alt="Logo" className="logo" onClick={onLogoClick}/>
        </div>
        <div className="right-section">
          <div className="search-box">
            <img src={SearchIcon} alt="Search" className="search-icon"  onClick={handleSearchSubmit} />
            <input type="text" placeholder="Hvad leder du efter" className="search-input" value={inputValue} onChange={handleSearchChange} onKeyDown={handleKeyDown} />
          </div>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
          <img src={ShoppingCartIcon} alt="Shopping Cart" className="shopping-cart-icon"  onClick={onCartClick} />
          {cartItemCount > 0 && (
              <span className="cart-counter">{cartItemCount}</span>
            )}
          </div>
          <img src={UserIcon} alt="User" className="user-icon" onClick={toggleLoginPage}style={{ position: 'relative' }} />
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
