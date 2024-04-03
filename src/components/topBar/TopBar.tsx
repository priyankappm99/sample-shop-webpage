import React from 'react';
import { Link } from 'react-router-dom';
import "./topbar.scss"
const TopBar = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
