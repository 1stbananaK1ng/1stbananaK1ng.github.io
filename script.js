document.addEventListener("DOMContentLoaded", function () {
    const zoomButton = document.querySelector(".zoom-button");
    const title = document.querySelector(".ascii-art");
    const icons = document.querySelector(".icons-container");
    const mail = document.querySelector(".icons-container2");
    const fullPageImage = document.querySelector(".full-page-image");
    const transitionLayer = document.querySelector(".transition-layer");

    zoomButton.addEventListener("click", function (event) {
        event.preventDefault();
        zoomButton.style.opacity = 0; // Hide the button
        icons.style.opacity = 0;
        mail.style.opacity = 0;
        title.classList.add("hidden"); // Add the "hidden" class to hide the title
        fullPageImage.classList.add("zoomed");

        setTimeout(function () {
            transitionLayer.classList.add("show");
            setTimeout(function () {
                window.location.href = "page2.html";
            }, 3000); // Delay for the dissolve effect
        }, 2000); // Adjust the delay as needed
    });
});
