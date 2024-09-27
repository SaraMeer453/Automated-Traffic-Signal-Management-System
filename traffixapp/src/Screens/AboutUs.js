import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/AboutUs.css'; // Ensure this is the correct path to your CSS file

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <Navbar />
      <div className="content">
        <h1>About Us</h1>
        {/* Add your content here */}
      </div>
      <Footer />
    </div>
  );
}
