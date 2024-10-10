import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftNavbar from '../Components/LeftNavbar';
import Navbar from '../Components/Navbar';
import '../Styles/UpdateInfo.css';

const UpdateInfo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    employeeId: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    phoneNumber: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
          const token = localStorage.getItem('token'); 
          const response = await fetch('/api/user', {
              method: 'GET',
              headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
              },
          });
          
          if (!response.ok) {
              throw new Error('Failed to fetch user data');
          }
          
          const userData = await response.json();
          console.log('Fetched user data:', userData); // Log user data
          setFormData(prevData => ({
              ...prevData,
              firstName: userData.firstName,
              lastName: userData.lastName,
              employeeId: userData.employeeId,
              phoneNumber: userData.phoneNumber || '',
          }));
      } catch (error) {
          console.error(error);
      }
  }
  

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    console.log('Updated password data submitted:', {
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword,
    });
    setFormData(prevData => ({ ...prevData, oldPassword: '', newPassword: '', confirmNewPassword: '' }));
  };

  const handleSavePhoneNumber = (e) => {
    e.preventDefault();
    console.log('Updated phone number submitted:', formData.phoneNumber);
  };

  return (
    <div className="updateinfo-container">
      <LeftNavbar />
      <div className="update-content">
        <Navbar />
        <h2>Update Your Information</h2>

        <div className="form-wrapper">
          {/* Name and Employee ID Section */}
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <output id="firstName">{formData.firstName}</output>
            <label htmlFor="lastName">Last Name:</label>
            <output id="lastName">{formData.lastName}</output>
            <label htmlFor="employeeId">Employee ID:</label>
            <output id="employeeId">{formData.employeeId}</output>
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
