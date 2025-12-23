import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyerRegister.css';

function BuyerRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
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
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1 className="farmconnect-title">🌾FarmConnect</h1>
          <p className="create-account-text">Create your buyer account</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Get started with FarmConnect</h2>
          
          <div className="input-group">
            <label htmlFor="username">Full name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="form-input"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email address</label>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="buyer-signup-btn">
            Sign up as buyer
          </button>
        </form>

        <div className="signin-link">
          <p>Already have a buyer account?
            <button type="button" className="link-btn" onClick={ ()=>{ navigate("/buyerlogin")}}>
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuyerRegister;