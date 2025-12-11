import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import axios from "axios"
function Register() {
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
    axios.post("http://localhost:3000/auth/register", formData, {withCredentials: true}).then(response=>{
      console.log(response.data);
      navigate("/home")
    })
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1 className="farmconnect-title">🌾FarmConnect</h1>
          <p className="create-account-text">Create your farmer account</p>
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

          {/* <div className="terms-agreement">
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span className="checkmark"></span>
              I agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">Privacy Policy</a>
            </label>
          </div> */}

          <button type="submit" className="signup-btn">
            Sign up as farmer
          </button>
        </form>

        <div className="signin-link">
          <p>Already have a farmer account?
            <button type="button" className="link-btn" onClick={ ()=>{ navigate("/login")}}>
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;