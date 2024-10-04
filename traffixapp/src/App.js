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
import Alerts from './Screens/Alerts';
import Challan from './Screens/Challan';
import AllUsers from './Screens/AllUsers';
import SignalControl from './Screens/SignalControl';
import Locations from './Screens/Locations';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/NewUser" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/updateinfo" element={<UpdateInfo />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/challan" element={<Challan />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/signalcontrol" element={<SignalControl />} />
          <Route path="/locations" element={ <Locations/> } />      

        </Routes>
      </div>
    </Router>
  );
}

export default App;
