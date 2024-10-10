import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LeftNavbar';
import '../Styles/SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cnic: '',
    password: '',
    confirmPassword: '',
    area: '',
    sector: '',
    employeeId: '',
    phoneNumber: '',
  });
  const [sectors, setSectors] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});
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

    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};

    // First name validation
    const nameRegex = /^[a-zA-Z]+$/;
    if (!formData.firstName) {
      errors.firstName = 'First name cannot be empty.';
    } else if (!nameRegex.test(formData.firstName)) {
      errors.firstName = 'First name can only contain alphabets, no spaces, numbers, or special characters.';
    }

    // Last name validation
    if (!formData.lastName) {
      errors.lastName = 'Last name cannot be empty.';
    } else if (!nameRegex.test(formData.lastName)) {
      errors.lastName = 'Last name can only contain alphabets, no spaces, numbers, or special characters.';
    }

    // Employee ID validation
    if (!formData.employeeId) {
      errors.employeeId = 'Employee ID cannot be empty.';
    }

    // CNIC validation
    const cnicRegex = /^\d{13}$/;
    if (!formData.cnic) {
      errors.cnic = 'CNIC cannot be empty.';
    } else if (!cnicRegex.test(formData.cnic)) {
      errors.cnic = 'CNIC must be exactly 13 digits.';
    }

    // Phone number validation
    const phoneRegex = /^\d{11}$/;
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone number cannot be empty.';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be exactly 11 digits.';
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@police\.gov\.pk$/;
    if (!formData.email) {
      errors.email = 'Email cannot be empty.';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Email must end with @police.gov.pk.';
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,10}$/; // Checks for lowercase, uppercase, number, special char, length 8-10
    if (!formData.password) {
      errors.password = 'Password cannot be empty.';
    } else if (!passwordRegex.test(formData.password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be between 8 to 10 characters long. No spaces allowed.';
    }

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    // Area validation
    if (!formData.area) {
      errors.area = 'Area cannot be empty.';
    }

    // Sector validation
    if (!formData.sector) {
      errors.sector = 'Sector cannot be empty.';
    }

    // If there are any errors, set the error messages
    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    // Submit the form data to the server
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
       // console.error('Sign-up error:', data.message);
        // Display a popup for existing employee ID, email, or CNIC
        alert(data.message); // Show the error message from the server
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="app-container">
      <LeftNavbar />
      <Navbar />
      <div className="signup-container-wrapper">
        <div className="signup-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errorMessages.firstName && <p className="error">{errorMessages.firstName}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errorMessages.lastName && <p className="error">{errorMessages.lastName}</p>}
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
                pattern="^isb-\d{3}$"
                title="Format: isb-XXX (where X is a digit)"
              />
              {errorMessages.employeeId && <p className="error">{errorMessages.employeeId}</p>}
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
              {errorMessages.email && <p className="error">{errorMessages.email}</p>}
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
              {errorMessages.cnic && <p className="error">{errorMessages.cnic}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              {errorMessages.phoneNumber && <p className="error">{errorMessages.phoneNumber}</p>}
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
              {errorMessages.password && <p className="error">{errorMessages.password}</p>}
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
              {errorMessages.confirmPassword && <p className="error">{errorMessages.confirmPassword}</p>}
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
              {errorMessages.area && <p className="error">{errorMessages.area}</p>}
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
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>{sector}</option>
                ))}
              </select>
              {errorMessages.sector && <p className="error">{errorMessages.sector}</p>}
            </div>
            <button type="submit">Sign Up</button>
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
