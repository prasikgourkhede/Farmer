import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo" onClick={() => navigate('/')}>
          <div className="logo-icon">🌾</div>
          <span className="logo-text">FarmConnect</span>
        </div>

        {/* Navigation Tabs */}
        <div className="nav-tabs">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `nav-tab ${isActive ? 'active' : ''}`
            }
          >
            <span className="tab-icon">🏠</span>
            <span className="tab-text">Home</span>
          </NavLink>

          <NavLink
            to="/aiplant"
            className={({ isActive }) =>
              `nav-tab ${isActive ? 'active' : ''}`
            }
          >
            <span className="tab-icon">🤖</span>
            <span className="tab-text">AI Plant</span>
          </NavLink>

          {/* Uncomment if you need Auction */}
          {/* <NavLink
            to="/auction"
            className={({ isActive }) =>
              `nav-tab ${isActive ? 'active' : ''}`
            }
          >
            <span className="tab-icon">💰</span>
            <span className="tab-text">Auction</span>
          </NavLink> */}
        </div>

        {/* Right Section */}
        <div className="nav-right">
          <button className="host-btn" onClick={() => navigate('/buyerlogin')}>
            <span className="host-icon">🤵</span>
            <span className="host-text">Become a Host</span>
          </button>

          <div className="global-menu" onClick={() => navigate('/favourites')}>
            <span className="globe-icon">🪴</span>
          </div>

          {/* <div className="user-menu" onClick={() => navigate('/profile')}>
            <div className="menu-icon">☰</div>
            <div className="user-avatar">
              <span className="avatar-icon">👤</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
