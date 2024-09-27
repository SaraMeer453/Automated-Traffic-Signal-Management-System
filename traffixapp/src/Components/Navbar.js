import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Images/traffixlogo.png'; // Ensure correct extension
import '../Styles/Navbar.css'; // Import CSS file

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Display a confirmation dialog
    const confirmLogout = window.confirm('Are you sure you want to log out?');

    if (confirmLogout) {
      // Perform logout logic here (e.g., clearing user session)
      localStorage.removeItem('user'); // Example

      // Redirect to login page
      navigate('/login');
    }
    // If canceled, do nothing and stay on the current page
  };

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link home-link" to="/home">Home</Link>
              <Link className="nav-link" to="/how-it-works">How it works</Link>
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
              <Link className="nav-link" to="/challan">Challan</Link>
              <Link className="nav-link" to="/about-us">About Us</Link>
              <button className="nav-link btn btn-link" onClick={handleLogout}>LogOut</button>
            </div>
          </div>
          <Link className="navbar-brand" to="/home">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
