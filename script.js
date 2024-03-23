const loginPopup = document.querySelector('.login-popup');
const closeBtn = document.querySelector('.close-btn');

// Show the popup on page load
window.onload = function() {
  loginPopup.style.display = 'flex';
};

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});
