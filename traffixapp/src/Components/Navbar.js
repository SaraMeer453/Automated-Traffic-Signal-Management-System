// Navbar.js
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css'; // Import CSS file

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');

    if (confirmLogout) {
      localStorage.removeItem('user'); // Example
      navigate('/');
    }
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
        
      </div>
    </div>
  );
}

