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
    image: "images/bachler.jpg", // Replace with actual image path
    description: "Delicious pizzas made with fresh ingredients.",
    menu: [
      { name: "Margherita Pizza", image: "images/margherita.jpg", price: 12.99 },
      { name: "Pepperoni Pizza", image: "images/pepperoni.jpg", price: 14.99 },
      { name: "Margherita Pizza", image: "images/margherita.jpg", price: 12.99 },
      { name: "Pepperoni Pizza", image: "images/pepperoni.jpg", price: 14.99 },
      // Add more menu items with name, image, and price
      // Add more menu items with name, image, and price
    ],
    rating: 0,
    reviews: [],
  },
  {
    name: "KFC",
    image: "images/cassino.jpg", // Replace with actual image path
    description: "Delicious pizzas made with fresh ingredients.",
    menu: [
      { name: "Margherita Pizza", image: "images/margherita.jpg", price: 12.99 },
      { name: "Pepperoni Pizza", image: "images/pepperoni.jpg", price: 14.99 },
      { name: "Margherita Pizza", image: "images/margherita.jpg", price: 12.99 },
      { name: "Pepperoni Pizza", image: "images/pepperoni.jpg", price: 14.99 },
      // Add more menu items with name, image, and price
    ],
    rating: 0,
    reviews: [],
  },
  {
    name: "Green Garden",
    image: "images/goodvibes.jpg", // Replace with actual image path
    description: "Delicious pizzas made with fresh ingredients.",
    menu: [
      { name: "Margherita Pizza", image: "images/margherita.jpg", price: 12.99 },
      { name: "Pepperoni Pizza", image: "images/pepperoni.jpg", price: 14.99 },
      // Add more menu items with name, image, and price
    ],
    rating: 0,
    reviews: [],
  },
  {
    name: "Tasty Treats",
    image: "images/hungers.jpg", // Replace with actual image path
    description: "Delicious pizzas made with fresh ingredients.",
    menu: [
      { name: "Margherita Pizza", image: "images/about.jpg", price: 12.99 },
      { name: "Pepperoni Pizza", image: "images/about.jpg", price: 14.99 },
      { name: "Margherita Pizza", image: "images/about.jpg", price: 12.99 },
      { name: "Pepperoni Pizza", image: "images/about.jpg", price: 14.99 },
      { name: "Margherita Pizza", image: "images/about.jpg", price: 12.99 },
      { name: "Pepperoni Pizza", image: "images/about.jpg", price: 14.99 },

      // Add more menu items with name, image, and price
    ],
    rating: 0,
    reviews: [],
  },
  {
    name: "Amer Food",
    image: "images/jourcs.jpg", // Replace with actual image path
    description: "Delicious pizzas made with fresh ingredients.",
    menu: [
      { name: "Margherita Pizza", image: "images/about.jpg", price: 12.99 },
      { name: "Pepperoni Pizza", image: "images/about.jpg", price: 14.99 },
      // Add more menu items with name, image, and price
    ],
    rating: 0,
    reviews: [],
  },
  {
    name: "Safus Pizza",
    image: "images/peribites.jpg", // Replace with actual image path
    description: "Delicious pizzas made with fresh ingredients.",
    menu: [
      { name: "Margherita Pizza", image: "images/about.jpg", price: 12.99 },
      { name: "Pepperoni Pizza", image: "images/about.jpg", price: 14.99 },
      { name: "Pepperoni Pizza", image: "images/pepperoni.jpg", price: 14.99 },
      // Add more menu items with name, image, and price
    ],
    rating: 0,
    reviews: [],
  },
  {
    name: "Safus Pizza",
    image: "images/tastytreat.jpg", // Replace with actual image path
    description: "Delicious pizzas made with fresh ingredients.",
    menu: [
      { name: "Margherita Pizza", image: "images/about.jpg", price: 12.99 },
      { name: "Pepperoni Pizza", image: "images/about.jpg", price: 14.99 },
      { name: "Pepperoni Pizza", image: "images/pepperoni.jpg", price: 14.99 },
      // Add more menu items with name, image, and price
    ],
    rating: 0,
    reviews: [],
  },
  {
    name: "Safus Pizza",
    image: "images/vugbari.jpg", 
    description: "Delicious pizzas made with fresh ingredients.",
    menu: [
      { name: "Margherita Pizza", image: "images/about.jpg", price: 12.99 },
      { name: "Pepperoni Pizza", image: "images/about.jpg", price: 14.99 },
      { name: "Pepperoni Pizza", image: "images/pepperoni.jpg", price: 14.99 },
      // Add more menu items with name, image, and price
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
  menuContainer.classList.remove('hidden'); // Unhide menu container
  const menuItems = document.getElementById('menu-items');
  menuItems.innerHTML = ''; // Clear previous menu items

  restaurant.menu.forEach((menuItem) => {
    const menuItemElement = document.createElement('li');
    menuItemElement.classList.add('menu-item', 'flex', 'p-4', 'rounded', 'shadow', 'border'); // Style for menu card

    // Handle menu item selection (replace with your logic)
    menuItemElement.addEventListener('click', () => {
      // Open review form for this menu item
      const selectedMenuItem = menuItem; // Store selected item data
      openReviewForm(selectedMenuItem);
    });

    // Menu item container
    const menuItemContent = document.createElement('div');
    menuItemContent.classList.add('flex', 'w-full');

    // Image container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('w-16', 'h-16', 'overflow-hidden'); // Set image height
    const menuItemImage = document.createElement('img');
    menuItemImage.src = menuItem.image;
    menuItemImage.alt = menuItem.name;
    imageContainer.appendChild(menuItemImage);
    menuItemContent.appendChild(imageContainer);

    // Information container
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('flex', 'flex-grow', 'p-2');

    // Menu item name
    const menuItemName = document.createElement('h3');
    menuItemName.classList.add('text-lg', 'font-medium', 'mb-1'); // Style for name
    menuItemName.textContent = menuItem.name;
    infoContainer.appendChild(menuItemName);

    // Menu item price (optional)
    if (menuItem.price) {
      const menuItemPrice = document.createElement('p');
      menuItemPrice.classList.add('text-red-600'); // Style for price
      menuItemPrice.textContent = `$${menuItem.price.toFixed(2)}`;
      infoContainer.appendChild(menuItemPrice);
    }

    menuItemContent.appendChild(infoContainer);
    menuItemElement.appendChild(menuItemContent);

    menuItems.appendChild(menuItemElement);
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
function openReviewForm(menuItem) {
  // Create a modal element (adjust styling in CSS)
  const modal = document.createElement('div');
  modal.classList.add('modal', 'fixed', 'inset-0', 'bg-gray-500/50', 'flex', 'justify-center', 'items-center', 'z-50');

  // Form container
  const formContainer = document.createElement('div');
  formContainer.classList.add('bg-white', 'p-4', 'rounded');

  // Form title
  const formTitle = document.createElement('h2');
  formTitle.textContent = `Review for ${menuItem.name}`;
  formContainer.appendChild(formTitle);

  // Rating selection
  const ratingContainer = document.createElement('div');
  ratingContainer.classList.add('mb-4');
  for (let i = 5; i >= 1; i--) {
    const ratingStar = document.createElement('span');
    ratingStar.classList.add('text-xl', 'cursor-pointer');
    ratingStar.dataset.rating = i;
    ratingStar.textContent = i === 5 ? '⭐⭐⭐⭐⭐' : '⭐';
    ratingStar.addEventListener('click', () => selectRating(ratingStar));
    ratingContainer.appendChild(ratingStar);
  }
  formContainer.appendChild(ratingContainer);

  // Review text area
  const reviewText = document.createElement('textarea');
  reviewText.placeholder = 'Write your review here...';
  reviewText.classList.add('w-full', 'border', 'rounded', 'p-2');
  formContainer.appendChild(reviewText);

  // Submit button
  const submitButton = document.createElement('button');
  submitButton.type = 'button';
  submitButton.classList.add('bg-blue-500', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'disabled');
  submitButton.textContent = 'Submit Review';
  submitButton.addEventListener('click', () => submitReview(menuItem, reviewText.value));
  formContainer.appendChild(submitButton);

  // Close button for modal
  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.classList.add('absolute', 'top-0', 'right-0', 'p-2', 'text-gray-600', 'cursor-pointer');
  closeButton.addEventListener('click', () => modal.remove());
  formContainer.appendChild(closeButton);

  modal.appendChild(formContainer);
  document.body.appendChild(modal);

  // Function to handle rating selection (update submit button state)
  function selectRating(starElement) {
    const selectedRating = starElement.dataset.rating;
    submitButton.classList.remove('disabled'); // Enable submit after rating
  }
}

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

  function submitReview(menuItem, reviewText) {
    const existingReviews = getReviewsFromLocalStorage(); // Get existing reviews (explained later)
  
    // Create a new review object
    const newReview = {
      menuItem: menuItem.name,
      rating: parseInt(getSelectedRating()), // Get selected rating from form
      review: reviewText,
      date: new Date().toLocaleDateString(), // Review submission date
    };
  
    existingReviews.push(newReview); // Add new review to existing ones
    storeReviewsInLocalStorage(existingReviews); // Store updated reviews
  
    // Close the review form modal
    document.querySelector('.modal').remove();
  
    // Display success message (optional)
    alert('Your review has been submitted!');
  }
  
  // Helper function to get selected rating from form (assuming logic from openReviewForm)
  function getSelectedRating() {
    const stars = document.querySelectorAll('.text-xl[data-rating]');
    for (const star of stars) {
      if (star.classList.contains('text-yellow-500')) { // Adjust color class for selected rating
        return star.dataset.rating;
      }
    }
    return null; // Return null if no rating is selected
  }
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
