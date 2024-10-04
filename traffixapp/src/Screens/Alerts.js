import React from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/Alerts.css'; // Ensure this is the correct path to your CSS file
import LeftNavbar from '../Components/LeftNavbar';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <LeftNavbar/>
      <Navbar />
      <div className="content">
        <h1>Alerts</h1>
        <h1>Alerts</h1>
        <h1>Alerts</h1>
        <h1>Alerts</h1>
        <h1>Alerts</h1>
        <h1>Alerts</h1>
        <h1>Alerts</h1>
        <h1>Alerts</h1>


        {/* Add your content here */}
      </div>
    </div>
  );
}
