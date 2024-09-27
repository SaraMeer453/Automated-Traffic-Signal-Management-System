import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/How-it-works.css'; // Ensure this is the correct path to your CSS file

export default function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <Navbar />
      <div className="content">
        <h1>How It Works</h1>
        {/* Add your content here */}
      </div>
      <Footer />
    </div>
  );
}
