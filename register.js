const registerForm = document.getElementById('register-form');
const errorMessage = document.getElementById('error-message');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Perform validation (replace with your actual validation logic)
  if (name === '' || email === '' || password === '' || confirmPassword === '') {
    errorMessage.textContent = 'Please fill in all required fields.';
    errorMessage.classList.remove('hidden');
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match.';
    errorMessage.classList.remove('hidden');
    return;
  }

  // Replace with your actual registration logic (e.g., sending data to a server)
  console.log('Registration successful:', { name, email }); // Simulate backend interaction
  alert('Registration successful!'); // Replace with appropriate feedback

  // Redirect to login page after successful registration
  window.location.href = 'home.html';
});