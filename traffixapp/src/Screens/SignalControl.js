import React from 'react';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LeftNavbar';
import '../Styles/SignalControl.css'; 
import video1 from '../Videos/video1.mp4'; // Import video1
import video2 from '../Videos/detection1.0.mp4'; // Import detection1

export default function SignalControl() {
  return (
        <div className="SignalControl-container">
      <LeftNavbar />
      <Navbar />
      <div className="content">
        <h1>Car Detection</h1>
        
        <div className="video-section">
          <div className="text-container">
            <h2>Understanding the System</h2>
            <p>This video explains how the traffic management system works and its key features.</p>
          </div>
          <div className="video-container">
            <video width="700" height="350" autoPlay loop muted>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="video-section">
          <div className="text-container">
            <h2>Real-Time Traffic Updates</h2>
            <p>This video shows how the system provides real-time updates and alerts to users.</p>
          </div>
          <div className="video-container">
            <video width="700" height="350" autoPlay loop muted>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
        </div>
      );
    }
    