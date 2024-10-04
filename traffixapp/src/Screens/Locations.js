import React from 'react'
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LeftNavbar'; // Import the new component
import '../Styles/Locations.css';


export default function Locations() {
  return (
    <div className="locations-container">
      <LeftNavbar/>
      <Navbar />
      <div className="content">
        <h1>Locations</h1>
        {/* Add your content here */}
      </div>
    </div>
  )
}
