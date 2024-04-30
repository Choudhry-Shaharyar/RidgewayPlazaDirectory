import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Landing.css'; // You will create this file for your custom styles
import logo from './logo-rp.png'; // Update the path to the location of your logo

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">

          
    <div className="container">
    <div className='logo-container'>
      <img src={logo} alt="Ridgeway Plaza Directory Logo" className="logo" />
      <span className="logo-text">Ridgeway Plaza Directory</span>
    </div>
    

      <div className="navbar-nav ml-auto">
        <a className="nav-item nav-link" href="#restaurants">Restaurants</a>
        <Button variant="warning" id="addRestaurantBTN">Add a Restaurant</Button>
      </div>
    </div>
  </nav>
  );
}

export default NavigationBar;
