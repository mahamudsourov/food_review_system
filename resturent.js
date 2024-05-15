const restaurantList = document.getElementById('restaurant-list');
const nextButton = document.getElementById('next-button');
const sortButton = document.getElementById('sort-button');
const menuContainer = document.getElementById('menu-section');
const menuItemsList = document.getElementById('menu-items');
const reviewContainer = document.getElementById('review-section');
const reviewForm = document.getElementById('review-form');
const userReviews = document.getElementById('user-reviews-section');
const userReviewsList = document.getElementById('user-reviews-list');

const restaurants = [
    // Replace with your actual restaurant data, including image paths, menu items, and initial rating (0)
    {
        name: "Food Court",
        image: "images/bachler.jpg",
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
    // ... add more restaurants
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

        // Handle menu display
        listItem.addEventListener('click', () => {
            showMenu(restaurant);
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

        // Handle menu item selection
        menuItemElement.addEventListener('click', () => {
            openReviewForm(menuItem); // Open review form for this menu item
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

// Event listener for "Next" button
nextButton.addEventListener('click', () => {
    menuContainer.classList.add('hidden'); // Hide menu
    reviewContainer.classList.remove('hidden'); // Show review form
    // Implement logic to potentially pass the selected restaurant data to the review form
    console.log('Navigate to review page for selected restaurant');
});

//   fixed

function openReviewForm(menuItem) {
    // Create a modal element with styling (adjust in CSS)
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
    submitButton.addEventListener('click', () => submitReview(menuItem, reviewText.value)); // Call the missing function
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

// Function to handle review submission and sort restaurants (Needs implementation)
reviewForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Implement the logic for handling review submission here:
    // - Get review data from the form
    const reviewData = {
        question1: document.getElementById('question1').value,
        question2: document.getElementById('question2').value,
        comment: document.getElementById('comment').value,
        rating: parseInt(document.getElementById('rating').value),
    };
    // - Access the selected restaurant using `selectedRestaurantIndex` (replace with your logic)
    // Get the selected restaurant index (logic based on your implementation)
    const selectedRestaurantIndex = /* Get index of selected restaurant */

        // Add review data to the selected restaurant (replace with your data storage logic)
        restaurants[selectedRestaurantIndex].reviews.push(reviewData);

    // - Add the review data to the selected restaurant
    // - Calculate average rating for restaurants (optional)

    // Calculate average rating for each restaurant
    restaurants.forEach((restaurant) => {
        const totalRating = restaurant.reviews.reduce((acc, review) => acc + review.rating, 0);
        restaurant.averageRating = totalRating / restaurant.reviews.length || 0; // Handle cases with no reviews
    });
    // - Call `submitReview` function if needed (for additional actions)

    // Example placeholder for calling submitReview (replace with your implementation)
    submitReview(/* review data */ /* selected restaurant index */);
});

// fixed part 1
function submitReview(menuItem, reviewText) {
    const existingReviews = getReviewsFromLocalStorage(); // Get existing reviews (explained later)
  
    // Create a new review object
    const newReview = {
      menuItem: menuItem.name,
      rating: parseInt(getSelectedRating()), // Get selected rating from form
      review: reviewText,
      date: new Date().toLocaleDateString(), // Review submission date
    };
  
    // Add the new review to the selected restaurant's reviews and local storage
    const selectedRestaurantIndex = /* Get index of selected restaurant */
    restaurants[selectedRestaurantIndex].reviews.push(newReview);
    existingReviews.push(newReview);
    storeReviewsInLocalStorage(existingReviews); // Store updated reviews
  
    // Update average rating for the selected restaurant
    const totalRating = restaurants[selectedRestaurantIndex].reviews.reduce((acc, review) => acc + review.rating, 0);
    restaurants[selectedRestaurantIndex].averageRating = totalRating / restaurants[selectedRestaurantIndex].reviews.length || 0;
  
    // Display a success message and clear the form
    alert('Review submitted successfully!');
    reviewForm.reset();
    modal.remove(); // Close the review modal
  
    // Optional: Update displayed restaurant list with sorting (explained later)
    displayRestaurantsWithSorting();
  }
  
  // Function to get selected rating from the review form
  function getSelectedRating() {
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    for (const input of ratingInputs) {
      if (input.checked) {
        return input.value;
      }
    }
    return 0; // Default to 0 if no rating selected
  }
  
  // Function to sort restaurants based on average rating (optional)
  function sortRestaurantsByRating() {
    restaurants.sort((a, b) => b.averageRating - a.averageRating);
  }
  
  // Function to display restaurants with optional sorting based on average rating
  function displayRestaurantsWithSorting() {
    sortRestaurantsByRating(); // Call sort function if you want to sort by rating
    displayRestaurants(); // Display the updated list
  }
  
  // Local storage functions for storing and retrieving reviews (optional)
  function getReviewsFromLocalStorage() {
    const storedReviews = localStorage.getItem('restaurantReviews');
    return storedReviews ? JSON.parse(storedReviews) : [];
  }
  
  function storeReviewsInLocalStorage(reviews) {
    localStorage.setItem('restaurantReviews', JSON.stringify(reviews));
  }
  
  // Event listener for "Sort Restaurants" button (optional)
  sortButton.addEventListener('click', () => {
    displayRestaurantsWithSorting();
  });
  
  // Display user reviews section (optional)
  function displayUserReviews() {
    const reviewsList = document.getElementById('user-reviews-list');
    reviewsList.innerHTML = ''; // Clear previous reviews
  
    const reviews = getReviewsFromLocalStorage();
    reviews.forEach((review) => {
      const reviewItem = document.createElement('li');
      reviewItem.classList.add('p-2', 'border-b');
      reviewItem.innerHTML = `
        <b>${review.menuItem}</b> - Rating: ${review.rating} ⭐<br>
        ${review.review}<br>
        <i>Submitted on: ${review.date}</i>
      `;
      reviewsList.appendChild(reviewItem);
    });
  
    userReviews.classList.remove('hidden'); // Unhide user reviews section
  }
  
  // Call initial functions
  displayRestaurants();
  // Call displayUserReviews() if you want to display user reviews initially
  
  // Additional notes:
  // - You'll need to implement the logic for getting the selected restaurant index based on your user interaction (e.g., clicking on a restaurant item).
  // - The sorting and local storage functionalities are optional and can be customized based on your preferences.
