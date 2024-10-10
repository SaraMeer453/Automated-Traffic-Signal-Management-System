import React from 'react';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LeftNavbar'; 
import '../Styles/Home.css';
import aerialImage from '../Images/aerial.jpeg'; 

export default function Home() {
  return (
    <div className="home-container">
                <LeftNavbar /> {/* Add this line */}

      <Navbar />
      <div className="body-content">
        
        {/* <h1>Smart traffic , Smooth flow and reduced Congestion</h1> */}

        <div className="black-box"></div>
        
        <img src={aerialImage} alt="Aerial View" className="aerial-image "  /> 
      </div>
    </div>
  );
}
