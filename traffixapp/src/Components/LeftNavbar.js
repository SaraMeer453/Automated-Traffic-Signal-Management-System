import React from 'react';
import '../Styles/LeftNavbar.css';
import logo from '../Images/traffixlogo.png'; // Ensure correct extension

const LeftNavbar = () => {
  return (
    <div className="left-navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul>
        <li><a href="/newuser">Add New Account</a></li>
        <li><a href="/updateinfo">Update Profile</a></li>
        <li><a href="/locations">Location</a></li>
        <li><a href="/allusers">View All Accounts</a></li>
      </ul>
    </div>
  );
};

export default LeftNavbar;