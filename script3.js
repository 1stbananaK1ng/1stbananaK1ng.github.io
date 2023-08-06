window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    const backgroundImg = new Image();
    backgroundImg.src = 'images/Blue-wall.jpg';
    backgroundImg.onload = function() {
        // Background image has loaded, start the flicker sequence
        startFlickerSequence();
    };

    const gif = document.querySelector('.gif');
    const desktopIcons = document.querySelector('.desktop-icons');

    // Flicker sequence
    function startFlickerSequence() {
        gif.src = "images/tv-static.gif";
        setTimeout(() => {
            gif.src = "images/rick-roll.gif";
            setTimeout(() => {
                gif.src = "images/tv-static.gif";
                setTimeout(() => {
                    gif.src = "images/scifi.gif";
                }, 1000); // Show content after the last flicker
            }, 2000);
        }, 2000);
    }

    // Show desktop icons after 5 seconds
    setTimeout(() => {
        desktopIcons.style.opacity = 1;
        desktopIcons.style.pointerEvents = 'auto';
    }, 5000);
});

// Function to open pop-up window
function openWindow(page, title) {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupWindow = document.getElementById('popup-window');
    const popupContent = document.getElementById('popup-content');

    // Show overlay and window
    popupOverlay.style.display = 'block';
    popupWindow.style.display = 'block';

    // Load content based on page parameter
    popupContent.innerHTML = getContent(page);
    
    // Set the window title
    const popupTitle = document.querySelector('.popup-title');
    popupTitle.textContent = title;
}

// Function to close pop-up window
function closeWindow() {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupWindow = document.getElementById('popup-window');

    // Hide overlay and window
    popupOverlay.style.display = 'none';
    popupWindow.style.display = 'none';

    // Clear the content
    const popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = '';
}

// Function to get content based on page parameter
function getContent(page) {
    switch (page) {
        case 'page1':
            return `
            <p>My name is [REDACTED], and I'm a security guard at Five Nights at Freddy's. In the realm of eerie animatronic enchantment, where the line between reality and nightmare blurs, I stand as a sentinel, a lone figure woven into the tapestry of a hauntingly mesmerizing world.</p>
            <p>Behind the scenes, beyond the realm of flashing cameras and jump scares, my story unfolds in the shadows, a tale of vigilance and quiet courage.</p>
            <p>As the sun retreats beyond the horizon, casting long shadows over the vacant pizzeria, I step into a realm that thrives after hours. The surveillance monitors flicker to life, casting an otherworldly glow upon my resolute expression. With unwavering determination, I watch, I wait, and I confront the animatronic phantoms that stir in the inky darkness.</p>
            <p>Navigating the labyrinthine corridors, I am an intruder in their domain, a human presence amidst a mechanical symphony. Each shift carries with it a sense of anticipation, a dance of cautious exploration as I keep tabs on the enigmatic figures that lurk in the corners of my vision.</p>
            <p>But beyond my nightly routine lies a deeper connection, a past that entwines with the very essence of this place. My motivations are not merely confined to a paycheck or a job title; they are rooted in a history that intertwines with these animatronic entities. Each creaking floorboard and flickering light is a reminder of the battles I've fought, both within and beyond the pizzeria's walls.</p>
            <p>As the hours wane and the animatronics' mechanical theatrics reach their crescendo, I stand firm, a bulwark against the encroaching darkness. And as dawn approaches, the animatronics retreat to their dormant state, their eerie visages replaced by an air of tranquility.</p>
            <p>My journey as a security guard at Five Nights at Freddy's is a testament to the resilience of the human spirit, a journey marked by quiet heroism and a willingness to confront the unknown. So, the next time you dare to delve into the realm of animatronic horrors, remember that beyond the jump scares and the shrieks, there's a guardian – [REDACTED] – standing watch, a silent sentinel in a world that thrives under the cover of night.</p>
            `;
        case 'page2':
            return '<img src="images/feliznavidad.jpg" alt="amogus" style="max-width: 100%; height: auto;">';
        case 'page3':
            return `
                <div class="centered-image">
                    <img src="images/roblox game.gif" alt="gaming" style="max-width: 100%; height: auto;">
                </div>
            `;
        // Add more cases as needed
        default:
            return '';
    }
}


