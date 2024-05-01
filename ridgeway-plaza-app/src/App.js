import React from 'react';
import NavigationBar from './components/Navbar';
import Landing from './components/Landing';
import RestaurantGrid from './components/RestaurantGrid';
import './App.css';
import InteractiveMap from './components/InteractiveMap';
import Footer from './components/Footer';
function App() {
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
