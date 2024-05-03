import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Landing.css'; // You will create this file for your custom styles
import logo from './logo-rp.png'; // Update the path to the location of your logo

function Landing() {
  return (
    <div className="landing-page">
      <div className="overlay">


        <div className='space'> 
        </div>

        <div className="hero-section text-center">
          <h1 metaname="Title" content="Restaurants at Erin Mills Center also known as Ridgeway Plaza in Mississauga "
>Ridgeway Plaza</h1>
          <p>Explore Erin Mills Centre, spanning Ridgway Rd, Eglinton Ave and Odyssey Dr</p>
          <Button href="#restaurants" variant="dark" id="explore-button" size="lg">Explore Restaurants</Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
