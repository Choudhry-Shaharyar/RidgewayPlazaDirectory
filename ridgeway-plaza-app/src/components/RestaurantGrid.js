import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import logo from './logo-rp.png'; // Update the path to the location of your logo

function RestaurantGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');

  // const handleCuisineClick = (cuisine) => {
  //   // Toggle the selected cuisine; if it's already selected, clear it
  //   if (selectedCuisine === cuisine) {
  //     setSelectedCuisine(''); // Clear the selected cuisine
  //     // Optionally reset the search term when clearing the cuisine
  //     setSearchTerm(''); 
  //   } else {
  //     setSelectedCuisine(cuisine);
  //     // Optionally, clear the search term when a new cuisine is selected
  //     setSearchTerm('');
  //   }
  // };
  const handleCuisineChange = (event) => {
    setSelectedCuisine(event.target.value);
    setSearchTerm(''); // Optionally reset the search term when changing the cuisine
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
      name: "Sumac",
      address: "3920 Eglinton Ave W #25",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "(905) 569-1888",
      website: "https://www.ubereats.com/ca/store/sumaq-iraqi-charcoal-grill-mississauga/fYOE0JyKVqe_Di52tzpy8Q",
      category: "Mediterranean"
    },
    {
      id: 3,
      name: "Ozzys",
      address: "456 Burger Blvd, Ridgeway",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "+0987654321",
      website: "http://theburgerjoint.com",
      category: "Mediterranean"
    },
    {
      id: 4,
      name: "Burger Factory",
      address: "4500 Ridgeway Dr, L5M 7N4",
      image: "/images/burgerFactory.jpg", // Replace with actual path to image
      phone: "(905) 607-6444",
      website: "http://burgerfactory.ca/",
      category: "Mediterranean"
    },
    {
      id: 5,
      name: "The Burger Joint",
      address: "456 Burger Blvd, Ridgeway Plaza",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "+0987654321",
      website: "http://theburgerjoint.com",
      category: "Mediterranean"
    },
    {
      id: 6,
      name: "The Burger Joint",
      address: "456 Burger Blvd, Ridgeway Plaza",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "+0987654321",
      website: "http://theburgerjoint.com",
      category: "Mediterranean"
    },
    {
      id: 7,
      name: "The Burger Joint",
      address: "456 Burger Blvd, Ridgeway Plaza",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "+0987654321",
      website: "http://theburgerjoint.com",
      category: "Mediterranean"
    },
    {
      id: 8,
      name: "The Burger Joint",
      address: "456 Burger Blvd, Ridgeway Plaza",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "+0987654321",
      website: "http://theburgerjoint.com",
      category: "Mediterranean"
    }
    // ... Add more restaurants as needed
  ];
  // const filteredRestaurants = searchTerm.length === 0 ? restaurants : restaurants.filter(restaurant =>
  //   restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const cuisines = ['All Categories', 'Italian', 'Mediterranean', 'New York', 'Mexico City', 'San Francisco'];

const filteredRestaurants = restaurants.filter(restaurant => {
  const matchesSearchTerm = searchTerm.length === 0 || restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesCuisine = selectedCuisine.length === 0 || restaurant.category === selectedCuisine;
  return matchesSearchTerm && matchesCuisine;
});

  return (
    <div className="content-container">


    <div className="search-container" id='restaurants'>
      <div className='msg'>Find Restaurants & Order Now!</div>
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
    <div className='grid-and-filter-container'>
      <div className="filter-container">
        <h1>CHOOSE CATEGORY</h1>
          <select
            value={selectedCuisine}
            onChange={handleCuisineChange}
            className="cuisine-dropdown"
          >
            {cuisines.map((cuisine, index) => (
              <option key={index} value={cuisine === 'All Categories' ? '' : cuisine}>
              {cuisine}
              </option>
            ))}
          </select>
        </div>

      <div className="restaurant-grid">
        {filteredRestaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
      
    </div>



   
  </div>
  );
}

export default RestaurantGrid;
