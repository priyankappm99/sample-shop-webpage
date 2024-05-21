import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./topbar.scss"

const TopBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's login status

  // Function to handle login/logout
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle login status
  };

  return (
    <header className="header">
      <h1 className="logo">My Awesome Store</h1>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">Cart</Link>
          </li>
          <li className="nav-item">
            {/* Conditional rendering for Login/Profile */}
            {isLoggedIn ? (
              <Link to="/profile" className="nav-link">Profile</Link>
            ) : (
              <li onClick={handleLogin} className="nav-link">Login</li>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
