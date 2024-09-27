import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="body-content">
        <h1>A Smart Traffic Management System</h1> {/* Replace this with your actual content */}
      </div>
      <Footer />
    </div>
  );
}
