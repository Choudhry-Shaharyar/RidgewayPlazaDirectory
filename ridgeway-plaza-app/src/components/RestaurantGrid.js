import React, { useState, useEffect, useRef } from 'react';
import RestaurantCard from './RestaurantCard';
import logo from './logo-rp.png'; // Update the path to the location of your logo
import './RestaurantCard.css'; // You will create this file for your custom styles

function RestaurantGrid() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const itemsPerPage = 9; // Number of restaurants per page
  const [currentPage, setCurrentPage] = useState(1);
  const restaurantGridRef = useRef(null);

  const handleCuisineChange = (event) => {
    setSelectedCuisine(event.target.value);
    setSearchTerm(''); // Optionally reset the search term when changing the cuisine
    setCurrentPage(1); // Reset to first page when changing cuisin
    scrollToTop();

  };
  // Function to handle search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when changing search term
    scrollToTop();

  };
  useEffect(() => {
    fetch('data/restaurants.json')  // Update with the correct path to your JSON file
      .then(response => response.json())
      .then(data => setRestaurants(data));
  }, []);

  
  // const filteredRestaurants = searchTerm.length === 0 ? restaurants : restaurants.filter(restaurant =>
  //   restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  // TO-DO: AzBerry
  const cuisines = ['All Categories', 'Afghan', 'African', 'American', 'Cafe', 'Chinese', 'Desi', 'Dessert', 'Mexican', 'Middle Eastern', 'Peruvian'];


  // Filter restaurants based on search term and selected cuisine for the current page
  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearchTerm = searchTerm.length === 0 || restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === 'All Categories' || restaurant.category.toLowerCase().includes(selectedCuisine.toLowerCase());
    return matchesSearchTerm && matchesCuisine;
  });

  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredRestaurants.length);
  const visibleRestaurants = filteredRestaurants.slice(startIndex, endIndex);
  const goToPage = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    // Scroll to the top of the grid container when currentPage changes
    if (currentPage > 1 && restaurantGridRef.current) {
      restaurantGridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

  // Function to scroll to the top of the card list
  const scrollToTop = () => {
    if (restaurantGridRef.current) {
      restaurantGridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  // Reset page number to 1 if filtered results change the total number of pages
  if (currentPage > totalPages && totalPages !== 0) {
    setCurrentPage(1);
  }

  return (
    <div className="content-container">
      <h1 metaname="description" content="Explore Ridgeway Plaza with our interactive map! Navigate through our diverse range of shops, restaurants, and services. Find your way around easily and discover everything Ridgeway Plaza has to offer."
>     </h1>
     <meta content='List of all the restaurants at Ridgeway Plaza. Ridgeway Plaza Directory has over 70 unqiue restaurants'></meta>
      <div className="search-container" id='restaurants'>
        <div className='msg'>Find Restaurants & Order Now!</div>
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="search-input"
        />
      </div>
      <div ref={restaurantGridRef} className='grid-and-filter-container' metaname="description" content="Discover the vibrant dining and shopping scene at Ridgeway Plaza in Mississauga! Browse our comprehensive list of restaurants and stores, offering a diverse range of culinary delights and retail experiences. From cozy cafes to trendy boutiques, Ridgeway Plaza has something for everyone. Explore our directory and plan your next visit today!">
        <div className="filter-container">
          <div className='choose'>CHOOSE CATEGORY</div>
          <label>
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
          </label>
        </div>
        <div className="restaurant-grid">
          {visibleRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
      <div className="pagination">
        <button
          id="btn"
          onClick={() => {
            goToPage(currentPage === 1 ? totalPages : currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        <span id='pag-msg'>Page {currentPage} of {totalPages}</span>
        <button
          id="btn"
          onClick={() => {
            goToPage(currentPage === totalPages ? 1 : currentPage + 1);
          }}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default RestaurantGrid;
