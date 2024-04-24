const restaurantList = document.getElementById('restaurant-list');
const nextButton = document.getElementById('next-button');
const menuContainer = document.getElementById('menu-container');
const menuItemsList = document.getElementById('menu-items');

const restaurants = [
  {
    name: "Restaurant A",
    menu: [
      { name: "Dish 1", price: 10.99 },
      { name: "Dish 2", price: 12.50 },
      { name: "Dish 3", price: 8.75 },
    ],
    rating: 0, 
    reviews: [], 
  },
  {
    name: "Restaurant A",
    menu: [
      { name: "Dish 1", price: 10.99 },
      { name: "Dish 2", price: 12.50 },
      { name: "Dish 3", price: 8.75 },
    ],
    rating: 0, 
    reviews: [], 
  },
  {
    name: "Restaurant A",
    menu: [
      { name: "Dish 1", price: 10.99 },
      { name: "Dish 2", price: 12.50 },
      { name: "Dish 3", price: 8.75 },
    ],
    rating: 0, 
    reviews: [], 
  },
  {
    name: "Restaurant A",
    menu: [
      { name: "Dish 1", price: 10.99 },
      { name: "Dish 2", price: 12.50 },
      { name: "Dish 3", price: 8.75 },
    ],
    rating: 0, 
    reviews: [], 
  },
  {
    name: "Restaurant A",
    menu: [
      { name: "Dish 1", price: 10.99 },
      { name: "Dish 2", price: 12.50 },
      { name: "Dish 3", price: 8.75 },
    ],
    rating: 0, 
    reviews: [], 
  },
  {
    name: "Restaurant A",
    menu: [
      { name: "Dish 1", price: 10.99 },
      { name: "Dish 2", price: 12.50 },
      { name: "Dish 3", price: 8.75 },
    ],
    rating: 0, 
    reviews: [], 
  },
];


function displayRestaurants() {
  restaurantList.innerHTML = ''; 
  restaurants.forEach((restaurant) => {
    const listItem = document.createElement('li');
    listItem.classList.add('p-2', 'border-b', 'hover:bg-gray-200');
    listItem.textContent = restaurant.name;
    listItem.addEventListener('click', () => {
      showMenu(restaurant); 
    });
    restaurantList.appendChild(listItem);
  });
}


// Function to display menu of selected restaurant
function showMenu(restaurant) {
  menuContainer.classList.remove('hidden'); // Make menu container visible
  menuItemsList.innerHTML = ''; // Clear previous menu items

  restaurant.menu.forEach((item) => {
    const menuItem = document.createElement('li');
    menuItem.classList.add('p-2', 'border-b', 'hover:bg-gray-200');
    menuItem.textContent = `${item.name} ($${item.price})`;
    menuItemsList.appendChild(menuItem);
  });

  // Enable "Next" button after selecting a restaurant
  nextButton.classList.remove('disabled');
}

// Event listener for "Next" button (fix included)
nextButton.addEventListener('click', () => {
  // Implement your logic to navigate to the review page, possibly passing the selected restaurant
  console.log('Navigate to review page for selected restaurant');
});

displayRestaurants(); 
