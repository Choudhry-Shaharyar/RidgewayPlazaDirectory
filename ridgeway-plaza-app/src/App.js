import React from 'react';
import NavigationBar from './components/Navbar';
import Landing from './components/Landing';
import RestaurantGrid from './components/RestaurantGrid';
import './App.css';
import InteractiveMap from './components/InteractiveMap';
import Footer from './components/Footer';
import ReactGA from 'react-ga4';
function App() {

  ReactGA.initialize("G-H3Y2F3F5SC");
  return (
    <div className="App">

      <NavigationBar />
      <Landing />
      <RestaurantGrid />
      <InteractiveMap />
      <Footer />
    </div>
  );
}

export default App;
