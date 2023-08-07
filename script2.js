// Get the DOM element for the typing demo and the transition overlay
const typingDemo = document.getElementById('typingDemo');
const transitionOverlay = document.getElementById('transitionOverlay');

// Listen for a keydown event on the entire document
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Fade in the overlay when Enter key is pressed
        transitionOverlay.style.opacity = '1';
        transitionOverlay.style.pointerEvents = 'auto';

        // Wait for the animation to complete and then navigate to the new page
        setTimeout(function() {
            window.location.href = 'CRT.html'; // Change this URL to the desired site
        }, 1000); // Adjust the timing based on your transition duration
    }
});
