import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import aerialImage from '../Images/aerial.jpeg'; // Update the path based on your structure
import logo from '../Images/traffixlogo.png'; // Add the path for your logo image


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
/////
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.email || !formData.password) {
      setError('Please fill in both fields.');
      return;
  }

  try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
      });

      console.log('Response from login:', response); // Log the response

      if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          navigate('/home');
      } else {
          const data = await response.json();
          setError(data.message || 'Login failed. Please try again.');
      }
  } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
  }
};


  return (
    <div className="login-page">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" /> {/* Add the logo here */}
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p>
          <button className="link-button" onClick={() => navigate('/updateinfo')}>Forgot password?</button>
        </p>
        <p>
          <button className="link-button" onClick={() => navigate('/home')}>Homepage</button>
        </p>
      </div>
      <div className="image-container">
        <img src={aerialImage} alt="Aerial view" />
      </div>
    </div>
  );
};

export default Login;
