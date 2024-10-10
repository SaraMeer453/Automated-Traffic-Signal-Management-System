import React from 'react';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LeftNavbar'; 
import '../Styles/How-it-works.css'; 

export default function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <LeftNavbar />
      <Navbar />
      <div className="content">
        <h1>How It Works</h1>
        
        <div className="video-section">
          <div className="text-container">
            <h2>Understanding the System</h2>
            <p>This video explains how the traffic management system works and its key features.</p>
          </div>
          
        </div>

        <div className="video-section">
          <div className="text-container">
            <h2>Real-Time Traffic Updates</h2>
            <p>This video shows how the system provides real-time updates and alerts to users.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
