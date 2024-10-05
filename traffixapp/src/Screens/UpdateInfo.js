import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftNavbar from '../Components/LeftNavbar';
import Navbar from '../Components/Navbar';
import '../Styles/UpdateInfo.css';

const UpdateInfo = () => {
  const [formData, setFormData] = useState({
    username: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    phoneNumber: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from local storage or state and set it to formData
    const userData = {
      username: 'exampleUser',
      phoneNumber: '1234567890',
    };
    setFormData(userData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    // Logic to handle password update
    console.log('Updated password data submitted:', {
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword,
    });
    // Reset password fields after saving
    setFormData({ ...formData, oldPassword: '', newPassword: '', confirmNewPassword: '' });
  };

  const handleSavePhoneNumber = (e) => {
    e.preventDefault();
    // Logic to handle phone number update
    console.log('Updated phone number submitted:', formData.phoneNumber);
  };

  const handleSaveUsername = (e) => {
    e.preventDefault();
    // Logic to handle username update
    console.log('Updated username submitted:', formData.username);
  };

  return (
    <div className="updateinfo-container">
      <LeftNavbar />
      <div className="update-content">
        <Navbar />
        <h2>Update Your Information</h2>
        
        <div className="form-wrapper">
          {/* Username Section */}
          <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <button type="submit" onClick={handleSaveUsername}>Save</button>
          </div>

          {/* Password Section */}
          <div className="form-group">
            <label htmlFor="oldPassword">Old Password:</label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              required
            />
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
            <label htmlFor="confirmNewPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" onClick={handleSavePassword}>Save</button>
          </div>

          {/* Phone Number Section */}
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
            <button type="submit" onClick={handleSavePhoneNumber}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;
