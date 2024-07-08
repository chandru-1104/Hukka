import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [shopDropdownVisible, setShopDropdownVisible] = useState(false); // State for Shop dropdown
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const toggleShopDropdown = () => {
    setShopDropdownVisible(!shopDropdownVisible);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" style={{ visibility: isMobile && showMobileMenu ? 'visible' : 'visible' }}>
          <img src={logo} alt="Logo" style={{ width: '170px', height: '100px' }} />
        </div>
        {isMobile && (
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        )}
        <nav className={`navbar ${isMobile ? 'mobile' : ''} ${showMobileMenu ? 'active' : ''}`}>
          <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
              <Link to="#shop" aria-haspopup="true" aria-expanded={dropdownVisible}>
                Shop
              </Link>
              {dropdownVisible && (
                <ul className="dropdown-menu">
                  <li><Link to="/vape-products">Vape & vaping accessories</Link></li>
                  <li><Link to="/smoke-products">Smoking</Link></li>
                </ul>
              )}
            </li>
            <li><a href="#about-us">About Us</a></li>
            <li><Link to="#delivery">Delivery</Link></li>
            <li><a href="#footer">Contact Us</a></li>
          </ul>
        </nav>

        {!isMobile && (
          <div className="search-bar">
            <div className="input-group rounded">
              <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <span className="input-group-text border-0 gradient-text" id="search-addon">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        )}

        <div className={`right-section ${isMobile ? 'mobile-right-section' : ''}`}>
          <Link to="/signinupform" className="user-icon">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <div className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </div>
      </div>

      {isMobile && showMobileMenu && (
        <div className="mobile-dropdown" style={{ width: '100%', textAlign: 'center' }}>
          <ul className="mobile-nav-links" style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ fontSize: '18px', padding: '10px 0' }}><Link to="/">Home</Link></li>
            <li style={{ fontSize: '18px', padding: '10px 0' }} onClick={toggleShopDropdown}>
              <span>Shop</span>
              {shopDropdownVisible && (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={{ fontSize: '16px', padding: '8px 0' }}><Link to="/vape-products">Vape & vaping accessories</Link></li>
                  <li style={{ fontSize: '16px', padding: '8px 0' }}><Link to="/smoke-products">Smoking</Link></li>
                </ul>
              )}
            </li>
            <li style={{ fontSize: '18px', padding: '10px 0' }}><a href="#about-us">About Us</a></li>
            <li style={{ fontSize: '18px', padding: '10px 0' }}><Link to="#delivery">Delivery</Link></li>
            <li style={{ fontSize: '18px', padding: '10px 0' }}><a href="#footer">Contact Us</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
