import React from 'react';
import NavigationBar from './components/Navbar';
import Landing from './components/Landing';
import RestaurantGrid from './components/RestaurantGrid';
import './App.css';

function App() {
  return (
    <div className="App">

      <NavigationBar />
      <Landing />
      <RestaurantGrid />
    </div>
  );
}

export default App;
