import React from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './Screens/Home';
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import UpdateInfo from './Screens/UpdateInfo';
import HowItWorks from './Screens/How-it-works';
import Dashboard from './Screens/Dashboard';
import Challan from './Screens/Challan';
import AboutUs from './Screens/AboutUs';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/updateinfo" element={<UpdateInfo />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/challan" element={<Challan />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
