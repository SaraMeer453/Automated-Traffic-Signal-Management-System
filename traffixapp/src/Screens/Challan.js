import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/Challan.css'; // Ensure this is the correct path to your CSS file

export default function Challan() {
  return (
    <div className="challan-container">
      <Navbar />
      <div className="content">
        <h1>Challan</h1>
        {/* Add your content here */}
      </div>
      <Footer />
    </div>
  );
}
