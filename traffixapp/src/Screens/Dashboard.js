import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/Dashboard.css'; // Ensure this is the correct path to your CSS file

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <h1>Dashboard</h1>
        {/* Add your content here */}
      </div>
      <Footer />
    </div>
  );
}
