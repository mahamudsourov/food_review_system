const restaurantList = document.getElementById('restaurant-list');
const nextButton = document.getElementById('next-button');
const sortButton = document.getElementById('sort-button');
const menuContainer = document.getElementById('menu-container');
const menuItemsList = document.getElementById('menu-items');
const reviewContainer = document.getElementById('review-container');
const reviewForm = document.getElementById('review-form');
const userReviews = document.getElementById('user-reviews');
const userReviewsList = document.getElementById('user-reviews-list');

const restaurants = [
  {
    name: "Food Court",
    image: "images/about.jpg", // Replace with actual image path
    description: "Delicious pizzas made with fresh ingredients.",
    menu: [
      { name: "Dish 1", price: 10.99 },
      { name: "Dish 2", price: 12.50 },
      { name: "Dish 3", price: 8.75 },
    ],
    rating: 0,
    reviews: [],
  },
  {
    name: "KFC",
    image: "images/about.jpg", // Replace with actual image path
    description: "Delicious pizzas made with fresh ingredients.",
    menu: [
      { name: "Dish 1", price: 10.99 },
      { name: "Dish 2", price: 12.50 },
      { name: "Dish 3", price: 8.75 },
    ],
    rating: 0,
    reviews: [],
  },
  {
    name: "Green Garden",
    image: "images/about.jpg", // Replace with actual image path
    description: "Delicious pizzas made with fresh ingredients.",
    menu: [
      { name: "Dish 1", price: 10.99 },
      { name: "Dish 2", price: 12.50 },
      { name: "Dish 3", price: 8.75 },
    ],
    rating: 0,
    reviews: [],
  },
  {
    name: "Tasty Treats",
    image: "images/about.jpg", // Replace with actual image path
    description: "Delicious pizzas made with fresh ingredients.",
    menu: [
      { name: "Dish 1", price: 10.99 },
      { name: "Dish 2", price: 12.50 },
      { name: "Dish 3", price: 8.75 },
    ],
    rating: 0,
    reviews: [],
  },
  {
    name: "Amer Food",
    image: "images/about.jpg", // Replace with actual image path
    description: "Delicious pizzas made with fresh ingredients.",
    menu: [
      { name: "Dish 1", price: 10.99 },
      { name: "Dish 2", price: 12.50 },
      { name: "Dish 3", price: 8.75 },
    ],
    rating: 0,
    reviews: [],
  },
  {
    name: "Safus Pizza",
    image: "images/about.jpg", // Replace with actual image path
    description: "Delicious pizzas made with fresh ingredients.",
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
  restaurantList.innerHTML = ''; // Clear previous list items

  restaurants.forEach((restaurant) => {
    const listItem = document.createElement('li');
    listItem.classList.add('restaurant-item', 'flex', 'items-center', 'p-2', 'border-b', 'hover:bg-gray-200');

    // Image container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('mr-4', 'w-16', 'h-16');
    const image = document.createElement('img');
    image.src = restaurant.image;
    image.alt = restaurant.name;
    imageContainer.appendChild(image);
    listItem.appendChild(imageContainer);

    // Restaurant name and description container
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('flex-grow');
    const name = document.createElement('h3');
    name.classList.add('text-lg', 'font-medium', 'mb-1');
    name.textContent = restaurant.name;
    const description = document.createElement('p');
    description.textContent = restaurant.description;
    contentContainer.appendChild(name);
    contentContainer.appendChild(description);
    listItem.appendChild(contentContainer);

    // Handle menu display (assuming a separate function for menu logic)
    listItem.addEventListener('click', () => {
      showMenu(restaurant); // Call function to display menu (implement in a separate function)
      // Update next button state based on menu logic (implement logic)
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
  menuContainer.classList.add('hidden'); // Hide menu
  reviewContainer.classList.remove('hidden');
  // Implement your logic to navigate to the review page, possibly passing the selected restaurant
  console.log('Navigate to review page for selected restaurant');
});
// Function to handle review submission and sort restaurants
reviewForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get review data from the form
  const reviewData = {
    question1: document.getElementById('question1').value,
    question2: document.getElementById('question2').value,
    comment: document.getElementById('comment').value,
    rating: parseInt(document.getElementById('rating').value),
  };
  // Add review data to the selected restaurant (replace with your data storage logic)
  const selectedRestaurantIndex = /* Get index of selected restaurant */ // Implement logic to get the selected restaurant
    restaurants[selectedRestaurantIndex].reviews.push(reviewData);

  // Calculate average rating for each restaurant
  restaurants.forEach((restaurant) => {
    const totalRating = restaurant.reviews.reduce((acc, review) => acc + review.rating, 0);
    restaurant.averageRating = totalRating / restaurant.reviews.length || 0; // Handle cases with no reviews
  });

  // Sort restaurants by average rating (descending order)
  restaurants.sort((a, b) => b.averageRating - a.averageRating);

  // Clear the review form
  reviewForm.reset();

  // Hide review form and show "Sort Restaurants" button
  reviewContainer.classList.add('hidden');
  sortButton.classList.remove('hidden');

  // Hide review form and show user reviews
  // reviewContainer.classList.add('hidden');
  userReviews.classList.remove('hidden');

  // Display submitted review in user reviews card
  const reviewItem = document.createElement('li');
  reviewItem.classList.add('p-2', 'border-b', 'hover:bg-gray-200');
  // Customize content based on your review data structure
  reviewItem.textContent = `Restaurant: ${restaurants[selectedRestaurantIndex].name}, Rating: ${reviewData.rating}, Comment: ${reviewData.comment}`;
  userReviewsList.appendChild(reviewItem);

  // Display updated restaurant list (consider calling displayRestaurants again)
  console.log('Restaurants sorted based on average rating');
});

displayRestaurants(); 
