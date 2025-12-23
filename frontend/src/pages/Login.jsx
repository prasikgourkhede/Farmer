import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from "axios"

function Login() {
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
    axios.post("http://localhost:3000/auth/login", formData, {withCredentials: true}).then(response=>{
      console.log(response.data);
      navigate("/home")
    })
  };

  return (
    <div className="farmer-login-container">
      <div className="farmer-login-card">
        <div className="farmer-login-header">
          <h1 className="farmconnect-title">🌾FarmConnect</h1>
          <p className="welcome-back-farmer">Welcome back, farmer</p>
          <h2 className="signin-subtitle">Sign in to your farmer account</h2>
        </div>

        <form onSubmit={handleSubmit} className="farmer-login-form">
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

          <button type="submit" className="farmer-signin-btn">
            Sign in as farmer
          </button>
        </form>

        <div className="farmer-signup-section">
          <p>Don't have a farmer account? 
            <span className="signup-link" onClick={()=>{ navigate("/register")}}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;