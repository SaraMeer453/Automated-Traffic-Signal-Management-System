import React from 'react';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LeftNavbar'; // Import the new component
import '../Styles/How-it-works.css'; // Ensure this is the correct path to your CSS file

export default function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <LeftNavbar /> {/* Add this line */}
      <Navbar />
      <div className="content">
        <h1>How It Works</h1>
        
        {/* Upper video section */}
        <div className="video-section">
          <div className="text-container">
            <h2>Understanding the System</h2>
            <p>This video explains how the traffic management system works and its key features.</p>
          </div>
          <div className="video-container">
            <video width="320" height="240" controls>
              <source src="your-upper-video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Lower video section */}
        <div className="video-section">
          <div className="text-container">
            <h2>Real-Time Traffic Updates</h2>
            <p>This video shows how the system provides real-time updates and alerts to users.</p>
          </div>
          <div className="video-container">
            <video width="320" height="240" controls>
              <source src="your-lower-video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
