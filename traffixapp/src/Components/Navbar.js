// Navbar.js
import React, { useState } from 'react'; // Import useState
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css'; // Import CSS file

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');

    if (confirmLogout) {
      localStorage.removeItem('user'); // Example
      navigate('/login');
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update the search term state
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search logic here (e.g., redirect to search results)
    console.log('Searching for:', searchTerm); // Placeholder for actual search logic
  };

  return (
    <div className="navbar-container">
      
      <div className="button-container">
        <Link className="button" to="/home">Home</Link>
        <Link className="button" to="/how-it-works">How&nbsp;it&nbsp;works?</Link>
        <Link className="button" to="/alerts">Alerts</Link>
        <Link className="button" to="/challan">Challan</Link>
        <Link className="button" to="/signalcontrol">Signal&nbsp;Control</Link>
        
        <button className="button logout" onClick={handleLogout}>Log Out</button>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>
      </div>
    </div>
  );
}

