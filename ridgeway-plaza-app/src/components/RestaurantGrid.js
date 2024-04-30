import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import logo from './logo-rp.png'; // Update the path to the location of your logo

function RestaurantGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');

  const handleCuisineClick = (cuisine) => {
    // Toggle the selected cuisine; if it's already selected, clear it
    if (selectedCuisine === cuisine) {
      setSelectedCuisine(''); // Clear the selected cuisine
      // Optionally reset the search term when clearing the cuisine
      setSearchTerm(''); 
    } else {
      setSelectedCuisine(cuisine);
      // Optionally, clear the search term when a new cuisine is selected
      setSearchTerm('');
    }
  };
  const restaurants = [
    {
      id: 1,
      name: "Bella Italia",
      address: "123 Pasta Lane, Ridgeway Plaza",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "+1234567890",
      website: "http://bellaitalia.com",
      category: "Italian"
    },
    {
      id: 2,
      name: "The Burger Joint",
      address: "456 Burger Blvd, Ridgeway Plaza",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "+0987654321",
      website: "http://theburgerjoint.com",
      category: "Medditerarian"
    },
    {
      id: 3,
      name: "Ozzys",
      address: "456 Burger Blvd, Ridgeway Plaza",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "+0987654321",
      website: "http://theburgerjoint.com",
      category: "Medditerarian"
    },
    {
      id: 4,
      name: "The Burger Joint",
      address: "456 Burger Blvd, Ridgeway Plaza",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "+0987654321",
      website: "http://theburgerjoint.com",
      category: "Medditerarian"
    },
    {
      id: 5,
      name: "The Burger Joint",
      address: "456 Burger Blvd, Ridgeway Plaza",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "+0987654321",
      website: "http://theburgerjoint.com",
      category: "Medditerarian"
    },
    {
      id: 6,
      name: "The Burger Joint",
      address: "456 Burger Blvd, Ridgeway Plaza",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "+0987654321",
      website: "http://theburgerjoint.com",
      category: "Medditerarian"
    },
    {
      id: 7,
      name: "The Burger Joint",
      address: "456 Burger Blvd, Ridgeway Plaza",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "+0987654321",
      website: "http://theburgerjoint.com",
      category: "Medditerarian"
    },
    {
      id: 8,
      name: "The Burger Joint",
      address: "456 Burger Blvd, Ridgeway Plaza",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "+0987654321",
      website: "http://theburgerjoint.com",
      category: "Medditerarian"
    }
    // ... Add more restaurants as needed
  ];
  // const filteredRestaurants = searchTerm.length === 0 ? restaurants : restaurants.filter(restaurant =>
  //   restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const cuisines = ['Italian', 'Medditerarian', 'New York', 'Mexico City', 'San Francisco'];

const filteredRestaurants = restaurants.filter(restaurant => {
  const matchesSearchTerm = searchTerm.length === 0 || restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesCuisine = selectedCuisine.length === 0 || restaurant.category === selectedCuisine;
  return matchesSearchTerm && matchesCuisine;
});

  return (
    <div className="content-container">
      <div className="filter-container">
       {cuisines.map((cuisine, index) => (
          <button key={index} onClick={() => handleCuisineClick(cuisine)} className={`filter-button ${selectedCuisine === cuisine ? 'active' : ''}`}>
            {cuisine}
          </button>
        ))}
      </div>

    <div className="search-container">
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
    <div className="restaurant-grid">
      {filteredRestaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} {...restaurant} />
      ))}
    </div>
  </div>
  );
}

export default RestaurantGrid;
