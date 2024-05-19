const restaurantList = document.getElementById('restaurant-list');
const menuCard = document.getElementById('menu-card');
const userReviews = document.getElementById('user-reviews');
const sortForm = document.getElementById('sort-restaurant-form');

// Sample restaurant data (replace with your actual data source)
const restaurants = [
    {
        name: "Safus",
        image: "images/peribites.jpg",
        description: "A warm and inviting cafe serving delicious coffee, pastries, and light meals.",
        menu: [
            { title: "Latte", image: "images/saile-ilyas-SiwrpBnxDww-unsplash.jpg", price: 4.50 },
            { title: "Croissant", image: "images/croissant.jpg", price: 3.00 },
            { title: "Quiche", image: "images/quiche.jpg", price: 6.00 },
        ],
    },
    {
        name: "Safus",
        image: "images/cassino.jpg",
        description: "A warm and inviting cafe serving delicious coffee, pastries, and light meals.",
        menu: [
            { title: "Latte", image: "images/latte.jpg", price: 4.50 },
            { title: "Croissant", image: "images/croissant.jpg", price: 3.00 },
            { title: "Quiche", image: "images/quiche.jpg", price: 6.00 },
        ],
    },
    {
        name: "Green Garden",
        image: "images/goodvibes.jpg",
        description: "A warm and inviting cafe serving delicious coffee, pastries, and light meals.",
        menu: [
            { title: "Latte", image: "images/latte.jpg", price: 4.50 },
            { title: "Croissant", image: "images/croissant.jpg", price: 3.00 },
            { title: "Quiche", image: "images/quiche.jpg", price: 6.00 },
        ],
    },
    {
        name: "Hungers",
        image: "images/hungers.jpg",
        description: "A warm and inviting cafe serving delicious coffee, pastries, and light meals.",
        menu: [
            { title: "Latte", image: "images/latte.jpg", price: 4.50 },
            { title: "Croissant", image: "images/croissant.jpg", price: 3.00 },
            { title: "Quiche", image: "images/quiche.jpg", price: 6.00 },
        ],
    },
    {
        name: "Amer Food",
        image: "images/jourcs.jpg",
        description: "A warm and inviting cafe serving delicious coffee, pastries, and light meals.",
        menu: [
            { title: "Latte", image: "images/latte.jpg", price: 4.50 },
            { title: "Croissant", image: "images/croissant.jpg", price: 3.00 },
            { title: "Quiche", image: "images/quiche.jpg", price: 6.00 },
        ],
    },
    {
        name: "Tasty Treat",
        image: "images/tastytreat.jpg",
        description: "A warm and inviting cafe serving delicious coffee, pastries, and light meals.",
        menu: [
            { title: "Latte", image: "images/latte.jpg", price: 4.50 },
            { title: "Croissant", image: "images/croissant.jpg", price: 3.00 },
            { title: "Quiche", image: "images/quiche.jpg", price: 6.00 },
        ],
    },
    {
        name: "Safus",
        image: "images/vugbari.jpg",
        description: "A warm and inviting cafe serving delicious coffee, pastries, and light meals.",
        menu: [
            { title: "Latte", image: "images/latte.jpg", price: 4.50 },
            { title: "Croissant", image: "images/croissant.jpg", price: 3.00 },
            { title: "Quiche", image: "images/quiche.jpg", price: 6.00 },
        ],
    },
    // ... add more restaurants
];

// Function to create and display individual restaurant cards
function createRestaurantCard(restaurant) {
    const card = document.createElement('div');
    card.classList.add('card', 'card-compact', 'bg-base-100', 'shadow-md', 'rounded-lg', 'hover:shadow-xl', 'cursor-pointer'); // Tailwind CSS classes

    const image = document.createElement('img');
    image.classList.add('w-full', 'h-48', 'object-cover', 'rounded-top');
    image.src = restaurant.image;
    card.appendChild(image);

    const content = document.createElement('div');
    content.classList.add('card-body');

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = restaurant.name;
    content.appendChild(title);

    const description = document.createElement('p');
    description.classList.add('text-sm');
    description.textContent = restaurant.description;
    content.appendChild(description);

    card.appendChild(content);

    card.addEventListener('click', () => {
        showMenuCard(restaurant);
    });

    return card;
}

// Function to display the selected restaurant's menu card
function showMenuCard(restaurant) {
    menuCard.classList.remove('hidden'); // Make menu card visible

    menuCard.innerHTML = `<h2>Menu for ${restaurant.name}</h2>`; // Set menu title

    const menuList = document.createElement('ul');
    menuList.classList.add('list-disc', 'pl-4');

    restaurant.menu.forEach(menuItem => {
        const menuItemEl = document.createElement('li');
        menuItemEl.classList.add('flex', 'items-center', 'cursor-default'); // Tailwind CSS classes

        const image = document.createElement('img');
        image.classList.add('w-10', 'h-10', 'mr-2', 'rounded-full');
        image.src = menuItem.image;
        menuItemEl.appendChild(image);

        const title = document.createElement('span');
        title.textContent = menuItem.title;
        menuItemEl.appendChild(title);

        const price = document.createElement('span');
        price.classList.add('ml-auto', 'font-bold');
        price.textContent = `$${menuItem.price.toFixed(2)}`; // Format price with two decimals
        menuItemEl.appendChild(price);

        menuItemEl.addEventListener('click', () => {
            showReviewModal(restaurant, menuItem);
        });

        menuList.appendChild(menuItemEl);
    });

    menuCard.appendChild(menuList);
}

// Function to display the review modal for a selected menu item
function showReviewModal(restaurant, menuItem) {
    const modal = document.getElementById('review-modal');
    modal.classList.remove('hidden'); // Create a DaisyUI modal instance
    // Implement modal functionality using a library like DaisyUI or a custom modal solution
    const modalContent = `
    <h2>Leave a Review for ${menuItem.title} at ${restaurant.name}</h2>
    <form id="review-form">
      <div class="form-control mb-2">
        <label for="comment" class="label">Comment:</label>
        <textarea id="comment" name="comment" class="textarea textarea-bordered h-24 w-full" required></textarea>
      </div>
      <div class="form-control mb-2">
        <label for="rating" class="label">Rating:</label>
        <select id="rating" name="rating" class="select select-bordered w-full" required>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit Review</button>
    </form>
  `;

    modal.innerHTML = modalContent; // Set the modal content
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.classList.add('btn', 'btn-sm', 'btn-outline', 'absolute', 'top-right');
    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden'); // Close modal on click
    });
    modal.appendChild(closeButton); // Add close button to the modal


    // Code to display the modal using your chosen library or custom solution

    const reviewForm = document.getElementById('review-form');

    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const comment = document.getElementById('comment').value;
        const rating = document.getElementById('rating').value;

        // Trigger a custom event to signal review submission (replace 'submitReview' with your desired event name)
        const submitReviewEvent = new CustomEvent('submitReview', {
            detail: {
                restaurant: restaurant,
                menuItem: menuItem,
            },

        });
        document.dispatchEvent(submitReviewEvent);

        // Simulate review processing (replace with your actual logic)
        console.log(`Review submitted: Comment: ${comment}, Rating: ${rating}`);

        // Display a success message to the user
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Review submitted successfully!';
        successMessage.classList.add('text-green-500', 'mt-2');
        reviewForm.appendChild(successMessage);

        setTimeout(() => {
            successMessage.remove(); // Remove success message after a short delay
            modal.classList.add('hidden'); // Close modal after submission
          }, 2000); // Adjust delay as needed
    });
}

// Function to create and display a user review card
function addReviewCard(restaurantName, comment, rating) {
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('card', 'card-compact', 'bg-base-100', 'shadow-md'); // Tailwind CSS classes

    const content = document.createElement('div');
    content.classList.add('card-body');

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = `Review for ${restaurantName}`;
    content.appendChild(title);

    const review = document.createElement('p');
    review.textContent = comment;
    content.appendChild(review);

    const ratingEl = document.createElement('span');
    ratingEl.classList.add('badge', 'badge-primary');
    ratingEl.textContent = `${rating} Stars`;
    content.appendChild(ratingEl);

    reviewCard.appendChild(content);

    userReviews.appendChild(reviewCard);
}

// Function to sort restaurants based on user selection
sortForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const sortBy = document.getElementById('sort-by').value;

    // Sort the restaurants based on the selected criteria (e.g., name or rating)
    const sortedRestaurants = restaurants.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'rating') {
            // Calculate average rating for each restaurant (assuming you have a way to store ratings)
            const avgRatingA = calculateAverageRating(a);
            const avgRatingB = calculateAverageRating(b);
            return avgRatingB - avgRatingA; // Sort high to low
        }
        return 0;
    });
    // Clear the existing restaurant list and display the sorted restaurants
    restaurantList.innerHTML = '';
    sortedRestaurants.forEach(restaurant => {
        const card = createRestaurantCard(restaurant);
        restaurantList.appendChild(card);
    });
});

// Function to calculate average rating for a restaurant (replace with your implementation)
function calculateAverageRating(restaurant) {
    // Logic to calculate average rating based on your data structure for storing ratings
    // (This example assumes you have an array of ratings for each restaurant)
    const ratings = restaurant.ratings; // Replace with your actual data access
    let totalRating = 0;
    if (ratings && ratings.length > 0) {
        totalRating = ratings.reduce((acc, rating) => acc + rating, 0);
    }
    return totalRating / ratings.length || 0;
}

// Display initial restaurant list
restaurants.forEach(restaurant => {
    const card = createRestaurantCard(restaurant);
    restaurantList.appendChild(card);
});