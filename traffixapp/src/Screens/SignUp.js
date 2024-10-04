import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LeftNavbar'; // Import the new component
import '../Styles/SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    cnic: '',
    password: '',
    confirmPassword: '',
    area: '',
    sector: '',
    employeeId: '', // Add employeeId to state
  });
  const [sectors, setSectors] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === 'area') {
      if (value === 'Islamabad') {
        setSectors(['Sector1', 'Sector2', 'Sector3', 'Sector4', 'Markaz']);
      } else if (value === 'Pindi') {
        setSectors(['Murree Road', 'Westradge', 'Saddar']);
      } else {
        setSectors([]);
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        sector: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Form data submitted:', formData);
        navigate('/');
      } else {
        console.error('Sign-up error:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
   <div className="app-container">
          <LeftNavbar /> {/* Add this line */}

      <Navbar /> {/* Navbar at the top */}
      <div className="signup-container-wrapper">
        <div className="signup-container">
          {/* <h2>Register New User</h2>  */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="employeeId">Employee ID:</label>
              <input
                type="text"
                id="employeeId"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                required
                pattern="^isb-\d{3}$" // Regex pattern to enforce the format
                title="Format: isb-XXX (where X is a digit)"
              />
            </div>
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
              <label htmlFor="cnic">CNIC:</label>
              <input
                type="text"
                id="cnic"
                name="cnic"
                value={formData.cnic}
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
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="area">Area:</label>
              <select
                id="area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
              >
                <option value="">Select Area</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Pindi">Pindi</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="sector">Sector:</label>
              <select
                id="sector"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                required
              >
                <option value="">Select Sector</option>
                {sectors.map((sector, index) => (
                  <option key={index} value={sector}>{sector}</option>
                ))}
              </select>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p className="login-link">
            Already have an account? <Link to="/">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
