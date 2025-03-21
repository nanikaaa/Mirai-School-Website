document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("mobile-menu");
    const hamburger = document.querySelector(".hamburger");
    const closeBtn = document.querySelector(".close-btn");
    const overlay = document.getElementById("overlay");

    if (!menu) {
        console.error("Element with ID 'mobile-menu' not found.");
        return;
    }

    // Make toggleMenu globally accessible
    window.toggleMenu = function () {
        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {
            overlay.style.display = "block";  // Show the dim effect
        } else {
            overlay.style.display = "none";   // Hide the dim effect
        }
    }

    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", toggleMenu);
    }

    if (overlay) {
        overlay.addEventListener("click", toggleMenu);
    }
});
