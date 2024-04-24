const restaurantList = document.getElementById('restaurant-list');
const nextButton = document.getElementById('next-button');

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


function showMenu(restaurant) {
  // Implement your menu display logic using HTML, TailwindCSS, and JavaScript
  // This example assumes you have a separate element for the menu
  const menuElement = document.getElementById('menu-container'); // Replace with your element ID
  menuElement.innerHTML = ''; // Clear previous menu content
  restaurant.menu.forEach((item) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('p-2', 'border-b');
    menuItem.textContent = `${item.name} ($${item.price})`;
    menuElement.appendChild(menuItem);
  });

  // Enable "Next" button after selecting a restaurant
  nextButton.classList.remove('disabled');
}

// Function to handle "Next" button click, leading to review page
nextButton.addEventListener('click', () => {
  // Implement your logic to navigate to the review page, possibly passing the selected restaurant
  console.log('Navigate to review page for selected restaurant');
});

displayRestaurants(); // Call function to display initial restaurant list
