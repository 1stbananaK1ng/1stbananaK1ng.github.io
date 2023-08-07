// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to various elements
    const zoomButton = document.querySelector(".zoom-button");
    const title = document.querySelector(".ascii-art");
    const icons = document.querySelector(".icons-container");
    const mail = document.querySelector(".icons-container2");
    const fullPageImage = document.querySelector(".full-page-image");
    const transitionLayer = document.querySelector(".transition-layer");

    // Add a click event listener to the zoom button
    zoomButton.addEventListener("click", function (event) {
        event.preventDefault();
        
        // Hide the zoom button, icons, and mail icons
        zoomButton.style.opacity = 0;
        icons.style.opacity = 0;
        mail.style.opacity = 0;

        // Hide the title by adding the "hidden" class
        title.classList.add("hidden");

        // Apply the zoomed effect to the full-page image
        fullPageImage.classList.add("zoomed");

        // Set a delay before showing the transition layer
        setTimeout(function () {
            // Show the transition layer
            transitionLayer.classList.add("show");

            // Set a delay before redirecting to "page2.html"
            setTimeout(function () {
                window.location.href = "page2.html";
            }, 3000); // Adjust the delay as needed for the dissolve effect
        }, 2000); // Adjust the delay as needed before showing the transition layer
    });
});
