import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Inventory & Sales System</h1>
      <ul className="navbar-links">
        <li><Link to="/items">Items</Link></li>
        <li><Link to="/orders">Orders</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
