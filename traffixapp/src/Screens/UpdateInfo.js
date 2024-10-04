import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftNavbar from '../Components/LeftNavbar'; // Import the new component
import Navbar from '../Components/Navbar';
import '../Styles/UpdateInfo.css';

const UpdateInfo = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    cnic: '',
    password: '',
    confirmPassword: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    phoneNumber: '',
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
      phoneNumber: '1234567890',
      area: 'Islamabad',
      sector: 'Sector1'
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
    // Reset phone number field after saving
    setFormData({ ...formData, phoneNumber: '' });
  };

  const handleSaveUsername = (e) => {
    e.preventDefault();
    // Logic to handle username update
    console.log('Updated username submitted:', formData.username);
    // Reset username field after saving
    setFormData({ ...formData, username: '' });
  };

  return (
    <div className="updateinfo-container">
                <LeftNavbar /> {/* Add this line */}
                <Navbar />

      <h2>Update Info</h2>

      <div className="update-container-wrapper">
        {/* Change Password Container */}
        <div className="update-container">
          <h3>Change Password</h3>
          <form onSubmit={handleSavePassword}>
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
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmNewPassword">Confirm New Password:</label>
              <input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>

        {/* Change Phone Number Container */}
        <div className="update-container">
          <h3>Change Phone Number</h3>
          <form onSubmit={handleSavePhoneNumber}>
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
            </div>
            <button type="submit">Save</button>
          </form>
        </div>

        {/* Change Username Container */}
        <div className="update-container">
          <h3>Change Username</h3>
          <form onSubmit={handleSaveUsername}>
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
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;
