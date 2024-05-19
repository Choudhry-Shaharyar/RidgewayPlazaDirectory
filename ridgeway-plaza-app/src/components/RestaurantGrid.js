import React, { useState, useEffect, useRef } from 'react';
import RestaurantCard from './RestaurantCard';
import logo from './logo-rp.png'; // Update the path to the location of your logo
import './RestaurantCard.css'; // You will create this file for your custom styles

function RestaurantGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const itemsPerPage = 9; // Number of restaurants per page
  const [currentPage, setCurrentPage] = useState(1);
  const restaurantGridRef = useRef(null);


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
    scrollToTop();

  };

  // Function to handle search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when changing search term
    scrollToTop();

  };
  const restaurants = [
    {
      id: 1,
      name: "Sumaq",
      address: "3920 Eglinton Ave W #25",
      image: "images/sumac.png", // Replace with actual path to image
      phone: "(905) 569-1888",
      website: "https://www.ubereats.com/ca/store/sumaq-iraqi-charcoal-grill-mississauga/fYOE0JyKVqe_Di52tzpy8Q",
      category: "Middle Eastern"
    },
    {
      id: 2,
      name: "Celio Lounge",
      address: "3505 Odyssey Dr #74",
      image: "images/celio.jpg", // Replace with actual path to image
      phone: "(416) 666-6744",
      website: "https://www.celiolounge.ca/",
      category: "American"
    },
    {
      id: 3,
      name: "Ginsoy",
      address: "3505 Odyssey Dr #75",
      image: "images/ginsoy2.jpg", // Replace with actual path to image
      phone: "+1-866-616-3151",
      website: "https://ginsoy.ca/menu/",
      category: "Chinese"
    },
    {
      id: 4,
      name: "Burger Factory",
      address: "4500 Ridgeway Dr, L5M 7N4",
      image: "images/burgerFactory.jpg", // Replace with actual path to image
      phone: "(905) 607-6444",
      website: "http://burgerfactory.ca/",
      category: "American"
    },
    {
      id: 5,
      name: "L’ Afghan Grill",
      address: "3970 Eglinton Ave W #3",
      image: "images/afghangrill.jpg", // Replace with actual path to image
      phone: "(905) 569-9300",
      website: "https://www.lafghangrill.com/",
      category: "Afghan"
    },
    {
      id: 6,
      name: "Red Chilli Hakka Chinese",
      address: "3525 Platinum Dr #104",
      image: "images/redchilli.jpg", // Replace with actual path to image
      phone: "(905) 820-9200",
      website: "https://redchilli.ca/",
      category: "Chinese"
    },
    {
      id: 7,
      name: "Monderie",
      address: "3450 Platinum Dr",
      image: "images/Monderie.jpg", // Replace with actual path to image
      phone: "(416) 904-2505",
      website: "https://monderiebakeshop.ca/",
      category: "Cafe"
    },
    {
      id: 8,
      name: "Melt n Dip",
      address: "3910 Eglinton Ave W #41-42",
      image: "images/dip.jpg", // Replace with actual path to image
      phone: "(905) 608-8300",
      website: "https://meltndip.com/",
      category: "Dessert"
    },
    {
      id: 9,
      name: "Mount Sinai",
      address: "33700 Eglinton Ave W #61",
      image: "images/MountSinai.jpg", // Replace with actual path to image
      phone: "(905) 569-2600",
      website: "https://www.mountsinaimx.com/",
      category: "Mexican"
    },
    {
      id: 10,
      name: "Nawab's Legendary BBQ",
      address: "3525 Platinum Dr #117",
      image: "images/nawab.jpg", // Replace with actual path to image
      phone: "(905) 607-0090",
      website: "https://www.nawabsbbq.ca/",
      category: "Desi"
    },
    {
      id: 11,
      name: "Hamdi",
      address: "3505 Odyssey Dr #72",
      image: "images/hamdi.png", // Replace with actual path to image
      phone: "(905) 828-5556",
      website: "https://hamdirestaurant.ca/",
      category: "African (Somali)"
    },
    {
      id: 12,
      name: "Pizza Karachi",
      address: "3960 Eglinton Ave W #17",
      image: "images/pizzaKarachi.jpg", // Replace with actual path to image
      phone: "(905) 569-0077",
      website: "http://www.pizzakarachi.ca/",
      category: "Desi"
    },
    {
      id: 13,
      name: "Rock'N Deli",
      address: "3525 Platinum Dr #111",
      image: "images/rockNDeli.jpg", // Replace with actual path to image
      phone: "(905) 569-0092",
      website: "https://rockndeli.com/",
      category: "American"
    }
    ,
    {
      id: 14,
      name: "The Bakers",
      address: "3450 Platinum Dr #5",
      image: "images/TheBakers.jpg", // Replace with actual path to image
      phone: "(905) 607-1711",
      website: "https://thebakers.ca/",
      category: "Middle Eastern"
    },
    {
      id: 15,
      name: "Yaaron Ka Adda",
      address: "3920 Eglinton Ave W",
      image: "images/yaaron.jpg", // Replace with actual path to image
      phone: "(905) 569-9222",
      website: "http://yaaronkaadda.ca/",
      category: "Desi"
    },
    {
      id: 16,
      name: "Burger Bloc",
      address: "3870 Eglinton Ave W #53",
      image: "images/burgerbloc2.jpg", // Replace with actual path to image
      phone: "(905) 607-0005",
      website: "https://burgerbloc.ca/",
      category: "American"
    },
    {
      id: 17,
      name: "Karioka Quicky",
      address: " 3920 Eglinton Ave W #27",
      image: "images/karioka.jpg", // Replace with actual path to image
      phone: " (905) 607-0600",
      website: "https://kariokaquickyerinmills.com/",
      category: "Middle Eastern"
    },
    {
      id: 18,
      name: "Smash Burger/Steak",
      address: "3970 Eglinton Ave W #4",
      image: "images/smashburgersteak.jpg", // Replace with actual path to image
      phone: "(905) 607-9009",
      website: "https://www.instagram.com/smashburgersteak/",
      category: "American"
    },
    {
      id: 19,
      name: "Gotcha Bubble Tea",
      address: "3525 Platinum Dr #121",
      image: "images/GotchaBubbleTea.png", // Replace with actual path to image
      phone: "(905) 607-8688",
      website: "https://gotchabubbletea.ca/",
      category: "Cafe"
    },
    {
      id: 20,
      name: "Lazeez Shawarma",
      address: "3465 Platinum Dr #102",
      image: "images/Lazeez.jpg", // Replace with actual path to image
      phone: "(905) 820-0077",
      website: "http://www.lazeezshawarma.com/",
      category: "Middle Eastern"
    },
    {
      id: 21,
      name: "Aseer Time",
      address: "3470 Platinum Dr #37",
      image: "images/aseer.jpg", // Replace with actual path to image
      phone: "(905) 607-0007",
      website: "https://aseertime.taplink.ws/",
      category: "Dessert"
    },
    {
      id: 22,
      name: "Church's Texas Chicken",
      address: "4700 Ridgeway Dr #66",
      image: "images/Churchs.jpg", // Replace with actual path to image
      phone: "(905) 828-8100",
      website: "https://ontario.churchstexaschicken.com/",
      category: "American"
    },
    {
      id: 23,
      name: "3 Food Street",
      address: "4700 Ridgeway Dr #71",
      image: "images/3Food.jpg", // Replace with actual path to image
      phone: "(905) 607-1333",
      website: "http://3foodstreet.com/",
      category: "Desi"
    },
    {
      id: 24,
      name: "Mermaid Fish & Grill House",
      address: "4700 Ridgeway Dr #72",
      image: "images/mermaidfish.jpg", // Replace with actual path to image
      phone: "(905) 569-8200",
      website: "http://mermaidfishhouse.com/",
      category: "Middle Eastern"
    },
    {
      id: 25,
      name: "BeaverTails",
      address: "4700 Ridgeway Dr #73",
      image: "images/beavertails.jpg", // Replace with actual path to image
      phone: "(905) 608-0110",
      website: "https://beavertails.com/",
      category: "Dessert"
    },
    {
      id: 26,
      name: "Karachi Kitchen",
      address: "4700 Ridgeway Dr #74, 75",
      image: "images/karachiKitchen.jpg", // Replace with actual path to image
      phone: "(905) 828-9884",
      website: "https://www.karachikitchen.com/",
      category: "Desi"
    },
    {
      id: 27,
      name: "Sandy's Egyptian Taste",
      address: "3700 Eglinton Ave W #57",
      image: "images/sandy.png", // Replace with actual path to image
      phone: "(647) 285-4888",
      website: "http://www.sandysegyptiantaste.ca/",
      category: "Middle Eastern"
    },
    {
      id: 28,
      name: "Karahi Boys",
      address: "3525 Platinum Dr #113,",
      image: "images/KarahiBoys.jpg", // Replace with actual path to image
      phone: "(905) 273-3600",
      website: "https://www.karahiboys.com/",
      category: "Desi"

    },
    {
      id: 29,
      name: "Brar's",
      address: "3910 Eglinton Ave W #37, 38",
      image: "images/Brar.jpg", // Replace with actual path to image
      phone: "(226) 781-2727",
      website: "http://brars.ca/",
      category: "Desi"
    },
    {
      id: 30,
      name: "Döner & Gyros",
      address: "3910 Eglinton Ave W #40",
      image: "images/Doner.jpg", // Replace with actual path to image
      phone: "(905) 607-1900",
      website: "https://donerandgyros.ca/",
      category: "Middle Eastern"
    },
    {
      id: 31,
      name: "Bollywood Unlimited",
      address: "3970 Eglinton Ave W A-5",
      image: "images/BollywoodUnlimited.jpg", // Replace with actual path to image
      phone: "(905) 820-0707",
      website: "http://bollywoodunlimited.ca/",
      category: "Desi"
    },
    {
      id: 32,
      name: "Asli Shawarma",
      address: "3970 Eglinton Ave W #6",
      image: "images/Asli.jpg", // Replace with actual path to image
      phone: "(905) 820-4100",
      website: "https://www.instagram.com/aslishawarma/",
      category: "Middle Eastern"
    },
    {
      id: 33,
      name: "5 Tara",
      address: "3960 Eglinton Ave W #15",
      image: "images/Tara.jpg", // Replace with actual path to image
      phone: "(905) 607-4141",
      website: "https://5tara.ca/",
      category: "Desi"
    },
    {
      id: 34,
      name: "Jamaica House Jerk",
      address: "3960 Eglinton Ave W #18",
      image: "images/JamaicaHouseJerk.jpg", // Replace with actual path to image
      phone: "(905) 569-0088",
      website: "https://jamaicahousejerk.ca/",
      category: "Caribbean"
    },
    {
      id: 35,
      name: "Chef G",
      address: "3960 Eglinton Ave W #19",
      image: "images/ChefG.jpg", // Replace with actual path to image
      phone: "(905) 828-4440",
      website: "http://chefg.ca/",
      category: "Desi"
    },
    {
      id: 36,
      name: "Biryani Boss",
      address: "3960 Eglinton Ave W #20",
      image: "images/BiryaniBoss.jpg", // Replace with actual path to image
      phone: "(905) 536-6708",
      website: "http://www.biryaniboss.ca/",
      category: "Desi"
    },
    {
      id: 37,
      name: "GC Burger",
      address: "3920 Eglinton Ave W #28",
      image: "images/GC.jpg", // Replace with actual path to image
      phone: "(905) 569-1400",
      website: "https://thegcburger.com/menu/",
      category: "American"
    },
    {
      id: 38,
      name: "Baigs Grill",
      address: "3920 Eglinton Ave W #32",
      image: "images/Baigs.jpg", // Replace with actual path to image
      phone: "(905) 569-1600",
      website: "http://www.baigsgrill.com/",
      category: "Desi"
    },
    {
      id: 39,
      name: "Bakhtar Kabab",
      address: "3910 Eglinton Ave W #39",
      image: "images/Bakhtar.jpg", // Replace with actual path to image
      phone: "(905) 820-0222",
      website: "https://www.bakhtarkabab.ca/menu/",
      category: "Afghan"
    },
    {
      id: 40,
      name: "MyKolachi",
      address: "3900 Eglinton Ave W #126",
      image: "images/MyKolachi.jpg", // Replace with actual path to image
      phone: "(905) 569-3900",
      website: "https://www.mykolachi.ca/",
      category: "Desi"
    },
    {
      id: 41,
      name: "City South Pizza",
      address: "3900 Eglinton Ave W #46",
      image: "images/CitySouth.jpg", // Replace with actual path to image
      phone: "(905) 607-0607",
      website: "https://citysouthpizza.ca/",
      category: "American"
    },
    {
      id: 42,
      name: "Shawarma Avenue",
      address: "3900 Eglinton Ave W #45",
      image: "images/ShawarmaAvenue.jpeg", // Replace with actual path to image
      phone: "(905) 828-0400",
      website: "http://shawarmaavenue.ca/",
      category: "Middle Eastern"
    },
    {
      id: 43,
      name: "Food Fight BBQ",
      address: "3900 Eglinton Ave W",
      image: "images/FoodFight.jpg", // Replace with actual path to image
      phone: "(905) 820-0202",
      website: "https://www.foodfightbbq.com/",
      category: "American"
    },
    {
      id: 44,
      name: "Baskin Robbins",
      address: "3900 Eglinton Ave W #43",
      image: "images/Baskin.jpg", // Replace with actual path to image
      phone: "(905) 608-1600",
      website: "https://www.baskinrobbins.ca/",
      category: "Dessert"
    },
    {
      id: 45,
      name: "Pizza Toronto Burger n’ Wings",
      address: "3525 Platinum Dr #115",
      image: "images/pizzaToronto.jpg", // Replace with actual path to image
      phone: "(905) 569-1992",
      website: "https://pizzatoronto.ca/",
      category: "American"
    },
    {
      id: 46,
      name: "Potato Bar",
      address: "3525 Platinum Dr #119",
      image: "images/potatoBar.jpg", // Replace with actual path to image
      phone: "(905) 569-0400",
      website: "https://www.potatobar.ca/",
      category: "American"
    },
    {
      id: 47,
      name: "Mil Roast Sports & Bar",
      address: "3970 Eglinton Ave W #7",
      image: "images/mil.jpg", // Replace with actual path to image
      phone: "(647) 448-1512",
      website: "https://www.milroast.com/",
      category: "Peruvian"
    },
    {
      id: 48,
      name: "Chulla Express",
      address: "3525 Platinum Dr #122",
      image: "images/Chulla.jpg", // Replace with actual path to image
      phone: "(905) 828-0699",
      website: "http://chullaexpress.com/",
      category: "Desi"
    },
    {
      id: 49,
      name: "Matari Coffee Co.",
      address: "3465 Platinum Dr #97",
      image: "images/Matari.jpg", // Replace with actual path to image
      phone: "(905) 569-8111",
      website: "https://mataricoffee.com/",
      category: "Cafe"
    },
    {
      id: 50,
      name: "Dera Biryani",
      address: "3505 Odyssey Dr #70",
      image: "images/dera.jpg", // Replace with actual path to image
      phone: "(647) 803-5497",
      website: "https://www.facebook.com/DeraBiryani/",
      category: "Desi"
    },
    {
      id: 51,
      name: "Gong Cha",
      address: "3465 Platinum Dr #101",
      image: "images/GongCha.jpg", // Replace with actual path to image
      phone: "(905) 607-0330",
      website: "https://gong-cha.ca/",
      category: "Cafe"
    },
    {
      id: 52,
      name: "Saraya",
      address: "3465 Platinum Dr #100",
      image: "images/Saraya.jpg", // Replace with actual path to image
      phone: "(905) 608-0010",
      website: "https://www.saraya.ca/",
      category: "Middle Eastern"
    },
    {
      id: 53,
      name: "The Bloom Coffee",
      address: "3525 Platinum Dr",
      image: "images/BloomCoffee.jpg", // Replace with actual path to image
      phone: "(647) 819-5767",
      website: "https://thebloomcoffee.ca/",
      category: "Cafe"
    },
    {
      id: 54,
      name: "Karachi Food Court",
      address: "3450 Platinum Dr",
      image: "images/KarachiFoodCourt.jpg", // Replace with actual path to image
      phone: "(905) 606-2277",
      website: "https://www.instagram.com/kkababwala/",
      category: "Desi"
    },
    {
      id: 55,
      name: "Rahat Bakery",
      address: "3920 Eglinton Ave W #24",
      image: "images/rahat.jpg", // Replace with actual path to image
      phone: "(905) 820-1500",
      website: "https://rahatbaker.ca/",
      category: "Cafe"
    },
    {
      id: 56,
      name: "Aladdin's Shawarma Fusion",
      address: "3960 Eglinton Ave W #21",
      image: "images/aladdin.jpg", // Replace with actual path to image
      phone: "(905) 820-0050",
      website: "http://www.aladdinsshawarma.com/",
      category: "Middle Eastern"
    },
    {
      id: 57,
      name: "Rolly Polly Cow",
      address: "3450 Platinum Dr",
      image: "images/RollyPollyCow.jpg", // Replace with actual path to image
      phone: "(905) 827-9702",
      website: "http://www.rollypollycow.com/",
      category: "Dessert"
    },
    {
      id: 58,
      name: "Alforat",
      address: "3460 Platinum Dr #20",
      image: "images/Alforat.jpg", // Replace with actual path to image
      phone: "(905) 606-2600",
      website: "https://www.alforat.ca/",
      category: "Middle Eastern"
    },
    {
      id: 59,
      name: "Morocco's Kitchen",
      address: "3460 Platinum Dr #24",
      image: "images/MKitchen.jpg", // Replace with actual path to image
      phone: "(905) 607-0046",
      website: "http://moroccoskitchen.ca/",
      category: "Middle Eastern"
    },
    {
      id: 60,
      name: "Pizza Hut",
      address: "3470 Platinum Dr #41",
      image: "images/PizzaHut.jpg", // Replace with actual path to image
      phone: "(905) 569-0005",
      website: "https://www.pizzahut.ca/huts/ca-1/R59901?utm_source=google&utm_medium=listings&utm_campaign=YEXT&y_source=1_NjUxMDE0MTEtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
      category: "American"
    },
    {
      id: 61,
      name: "Subway",
      address: "3470 Platinum Dr #40",
      image: "images/Subway.jpg", // Replace with actual path to image
      phone: "(905) 607-0032",
      website: "http://www.subway.com/",
      category: "American"
    },
    {
      id: 62,
      name: "3 Drinks Cafe",
      address: "3525 Odyssey Dr #47",
      image: "images/3Drinks.jpg", // Replace with actual path to image
      phone: "(905) 820-9900",
      website: "https://www.instagram.com/3drinkscafe/",
      category: "Cafe"
    },
    {
      id: 63,
      name: "Znoud Al-Hamdani",
      address: "3525 Odyssey Dr #50",
      image: "images/Znoud.jpg", // Replace with actual path to image
      phone: "(905) 607-3300",
      website: "https://znoudal-hamdani.com/",
      category: "Dessert"
    },
    {
      id: 64,
      name: "Fire Spot",
      address: "3515 Odyssey Dr #61",
      image: "images/FireSpot.jpg", // Replace with actual path to image
      phone: "(905) 607-6800",
      website: "https://firespotdessert.ca/",
      category: "Dessert"
    },
    {
      id: 65,
      name: "Lahore Chaat & Desi Burger",
      address: "3515 Odyssey Dr #58",
      image: "images/DesiBurger.jpg", // Replace with actual path to image
      phone: "(905) 569-9005",
      website: "https://www.lahorechaatdesiburger.com/",
      category: "Desi"
    },
    {
      id: 66,
      name: "K-Sweets Tea",
      address: "3515 Odyssey Dr #53",
      image: "images/KSweetTea.jpg", // Replace with actual path to image
      phone: "(905) 607-0202",
      website: "http://ksweetstea-mississauga.square.site/",
      category: "Cafe"
    },
    {
      id: 66,
      name: "Paan Casa",
      address: "3505 Odyssey Dr #68",
      image: "images/PaanCasa.png", // Replace with actual path to image
      phone: "(905) 569-2666",
      website: "https://www.paancasa.ca/",
      category: "Desi"
    },
    {
      id: 67,
      name: "The Dough Story",
      address: "3535 Odyssey Dr #90",
      image: "images/DoughStory.jpg", // Replace with actual path to image
      phone: "(437) 980-2700",
      website: "https://www.thedoughstory.ca/",
      category: "Cafe"
    },
    {
      id: 68,
      name: "Cha Sha",
      address: "3535 Odyssey Dr",
      image: "images/ChaSha.jpg", // Replace with actual path to image
      phone: "(905) 569-6007",
      website: "https://www.chashaa.com/",
      category: "Desi"
    },
    {
      id: 69,
      name: "Sun Chinese Cuisine",
      address: "3480 Platinum Dr #110",
      image: "images/SunChinese2.jpg", // Replace with actual path to image
      phone: "(905) 828-9090",
      website: "http://www.sunchinesecuisine.com/",
      category: "Chinese"
    },
    {
      id: 70,
      name: "Mutabak Karak",
      address: "3480 Platinum Dr #98",
      image: "images/Mutabak.jpg", // Replace with actual path to image
      phone: "(905) 606-2226",
      website: "https://www.mutabakkarak.com/",
      category: "Middle Eastern"
    },
    {
      id: 71,
      name: "Mr. Loop",
      address: "4700 Ridgeway Dr #70",
      image: "images/loop.jpg", // Replace with actual path to image
      website: "https://www.instagram.com/mrloop.ca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      category: "Dessert"
    },

    // ... Add more restaurants as needed
  ];
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
