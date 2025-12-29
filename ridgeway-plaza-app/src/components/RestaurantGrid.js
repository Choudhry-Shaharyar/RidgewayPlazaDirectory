import React, { useState, useEffect, useRef } from 'react';
import RestaurantCard from './RestaurantCard';
import './RestaurantCard.css';

function RestaurantGrid() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 18;
  const [currentPage, setCurrentPage] = useState(1);
  const restaurantGridRef = useRef(null);

  const handleCuisineChange = (event) => {
    setSelectedCuisine(event.target.value);
    setSearchTerm('');
    setCurrentPage(1);
    scrollToTop();
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
    scrollToTop();
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCuisine('');
    setCurrentPage(1);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch('data/restaurants.json')
      .then(response => response.json())
      .then(data => {
        setRestaurants(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching restaurants:', error);
        setIsLoading(false);
      });
  }, []);

  const cuisines = ['All Categories', 'Afghan', 'African', 'American', 'Cafe', 'Caribbean', 'Chinese', 'Desi', 'Dessert', 'Lounge', 'Mexican', 'Middle Eastern', 'Peruvian'];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearchTerm = searchTerm.length === 0 || restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === '' || selectedCuisine === 'All Categories' || restaurant.category.toLowerCase().includes(selectedCuisine.toLowerCase());
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
    if (currentPage > 1 && restaurantGridRef.current) {
      restaurantGridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

  const scrollToTop = () => {
    if (restaurantGridRef.current) {
      restaurantGridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (currentPage > totalPages && totalPages !== 0) {
    setCurrentPage(1);
  }

  const hasActiveFilters = searchTerm !== '' || selectedCuisine !== '';

  return (
    <div className="content-container">
      <div className="search-container" id='restaurants'>
        <div className='msg'>Find Restaurants & Order Now!</div>
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="search-input"
          aria-label="Search restaurants"
        />
      </div>
      <div ref={restaurantGridRef} className='grid-and-filter-container'>
        <div className="filter-container">
          <div className='choose'>CHOOSE CATEGORY</div>
          <label>
            <select
              value={selectedCuisine}
              onChange={handleCuisineChange}
              className="cuisine-dropdown"
              aria-label="Filter by cuisine category"
            >
              {cuisines.map((cuisine, index) => (
                <option key={index} value={cuisine === 'All Categories' ? '' : cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
          </label>
        </div>

        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading restaurants...</p>
          </div>
        ) : filteredRestaurants.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🍽️</div>
            <h3>No restaurants found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button className="clear-filters-btn" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="restaurant-grid">
            {visibleRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
          </div>
        )}
      </div>

      {!isLoading && filteredRestaurants.length > 0 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => goToPage(currentPage === 1 ? totalPages : currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            {'<'}
          </button>
          <span className='pagination-info'>Page {currentPage} of {totalPages}</span>
          <button
            className="pagination-btn"
            onClick={() => goToPage(currentPage === totalPages ? 1 : currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            {'>'}
          </button>
        </div>
      )}
    </div>
  );
}

export default RestaurantGrid;
