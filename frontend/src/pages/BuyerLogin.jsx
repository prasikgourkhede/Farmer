import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyerLogin.css';

function BuyerLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="buyer-login-container">
      <div className="buyer-login-card">
        <div className="buyer-login-header">
          <h1 className="buyerconnect-title">🌾FarmConnect</h1>
          <p className="welcome-back-buyer">Welcome back, buyer</p>
          <h2 className="signin-subtitle">Sign in to your buyer account</h2>
        </div>

        <form onSubmit={handleSubmit} className="buyer-login-form">
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="form-input"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="buyer-signin-btn">
            Sign in as buyer
          </button>
        </form>

        <div className="buyer-signup-section">
          <p>Don't have a buyer account? 
            <span className="signup-link" onClick={()=>{ navigate("/buyer-register")}}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuyerLogin;