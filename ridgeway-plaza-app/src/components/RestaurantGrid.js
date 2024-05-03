import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import logo from './logo-rp.png'; // Update the path to the location of your logo
import './RestaurantCard.css'; // You will create this file for your custom styles

function RestaurantGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const itemsPerPage = 9; // Number of restaurants per page
  const [currentPage, setCurrentPage] = useState(1);


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
    setCurrentPage(1); // Reset to first page when changing cuisin
  };

    // Function to handle search term change
    const handleSearchTermChange = (event) => {
      setSearchTerm(event.target.value);
      setCurrentPage(1); // Reset to first page when changing search term
    };
  const restaurants = [
    {
        id: 1,
        name: "Sumac",
        address: "3920 Eglinton Ave W #25",
        image: "/images/sumac.png", // Replace with actual path to image
        phone: "(905) 569-1888",
        website: "https://www.ubereats.com/ca/store/sumaq-iraqi-charcoal-grill-mississauga/fYOE0JyKVqe_Di52tzpy8Q",
        category: "Middle Eastern"
      },
    {
      id: 2,
      name: "Celio Lounge",
      address: "3505 Odyssey Dr Unit 74",
      image: "/images/celio.jpg", // Replace with actual path to image
      phone: "(416) 666-6744",
      website: "https://www.celiolounge.ca/",
      category: "Lounge"
    },
    {
      id: 3,
      name: "Ginsoy",
      address: "3505 Odyssey Dr unit 75",
      image: "/images/ginsoy.jpg", // Replace with actual path to image
      phone: "+1-866-616-3151",
      website: "https://ginsoy.ca/menu/",
      category: "Chinese"
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
      name: "Hamdi",
      address: "3505 Odyssey Dr #72",
      image: "/images/hamdi.jpg", // Replace with actual path to image
      phone: "(905) 828-5556",
      website: "https://hamdirestaurant.ca/",
      category: "African (Somali)"
    },
    {
      id: 6,
      name: "L’ Afghan Grill",
      address: "3970 Eglinton Ave W unit 3",
      image: "/images/afghangrill.jpg", // Replace with actual path to image
      phone: "(905) 569-9300",
      website: "https://www.lafghangrill.com/",
      category: "Middle Eastern"
    },
    {
      id: 7,
      name: "The Burger Joint",
      address: "456 Burger Blvd, Ridgeway Plaza",
      image: "/images/sumac.png", // Replace with actual path to image
      phone: "+0987654321",
      website: "http://theburgerjoint.com",
      category: "American"
    },
    {
      id: 8,
      name: "Dera Biryani",
      address: "3505 Odyssey Dr Unit 70",
      image: "/images/dera.jpg", // Replace with actual path to image
      phone: "(647) 803-5497",
      website: "https://www.facebook.com/DeraBiryani/",
      category: "Desi"
    }
    // ... Add more restaurants as needed
  ];
  // const filteredRestaurants = searchTerm.length === 0 ? restaurants : restaurants.filter(restaurant =>
  //   restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const cuisines = ['All Categories', 'Italian', 'Middle Eastern', 'African', 'Desi', 'Chinese', 'Lounge'];


  // Filter restaurants based on search term and selected cuisine for the current page
  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearchTerm = searchTerm.length === 0 || restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === 'All Categories' || restaurant.category.toLowerCase().includes(selectedCuisine.toLowerCase());
    return matchesSearchTerm && matchesCuisine;
  });

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredRestaurants.length);

  // Filter restaurants for the current page
  const visibleRestaurants = filteredRestaurants.slice(startIndex, endIndex);

  // Function to handle page navigation
  const goToPage = (page) => {
    setCurrentPage(page);
  };


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
    <div className='grid-and-filter-container' metaname="description" content="Discover the vibrant dining and shopping scene at Ridgeway Plaza in Mississauga! Browse our comprehensive list of restaurants and stores, offering a diverse range of culinary delights and retail experiences. From cozy cafes to trendy boutiques, Ridgeway Plaza has something for everyone. Explore our directory and plan your next visit today!">

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
          {visibleRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      
    </div>
    
    <div className="pagination">
          <button id="btn"
            onClick={() => goToPage(currentPage === 1 ? totalPages : currentPage - 1)}
            disabled={currentPage === 1}
          >
            {'<'}
          </button>
          <span id='pag-msg'>Page {currentPage} of {totalPages}</span>
          <button id="btn"
            onClick={() => goToPage(currentPage === totalPages ? 1 : currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {'>'}
          </button>
    </div>



   
  </div>
  );
}

export default RestaurantGrid;
