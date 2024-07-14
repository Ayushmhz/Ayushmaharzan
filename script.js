// Function to update background position based on window width
function updateBackgroundPosition() {
    const homeSection = document.querySelector('.home');
    const windowWidth = window.innerWidth;

    // Adjust background position based on window width
    if (windowWidth >= 1024) {
        homeSection.style.backgroundPosition = 'left 200px top';
    } else if (windowWidth >= 768) {
        homeSection.style.backgroundPosition = 'left 120px top';
    } else if (windowWidth >= 480) {
        homeSection.style.backgroundPosition = 'left 80px top';
    } else {
        homeSection.style.backgroundPosition = 'left 50px top'; // Fallback for smaller screens
    }
}

// Initial call to set background position on page load
updateBackgroundPosition();

// Event listener for window resize to update background position
window.addEventListener('resize', updateBackgroundPosition);
