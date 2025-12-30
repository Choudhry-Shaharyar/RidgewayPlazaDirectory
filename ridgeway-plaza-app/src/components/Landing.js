import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className='space'></div>

        <div className="hero-section text-center">
          <div className="hero-content">
            <h1>Ridgeway Plaza</h1>
            <p className="hero-subtitle">
              Discover Erin Mills Centre's Premier Food Destination
            </p>
            <Button
              href="#restaurants"
              variant="warning"
              id="explore-button"
              size="lg"
            >
              Explore Restaurants
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
