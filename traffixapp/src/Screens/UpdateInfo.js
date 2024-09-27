import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/UpdateInfo.css';

const UpdateInfo = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    cnic: '',
    password: '',
    confirmPassword: '',
    area: '',
    sector: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from local storage or state and set it to formData
    const userData = {
      username: 'exampleUser',
      email: 'example@example.com',
      cnic: '12345-6789012-3',
      password: 'password123',
      confirmPassword: 'password123',
      area: 'Islamabad',
      sector: 'Sector1'
    };
    setFormData(userData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle updating user info
    console.log('Updated user data submitted:', formData);
    navigate('/home'); // Redirect to home page after updating info
  };

  return (
    <div className="updateinfo-container">
      <h2>Update Info</h2>
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
          <input
            type="text"
            id="area"
            name="area"
            value={formData.area}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="sector">Sector:</label>
          <input
            type="text"
            id="sector"
            name="sector"
            value={formData.sector}
            readOnly
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateInfo;
