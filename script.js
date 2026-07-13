// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to Rossy Events!");

    // =========================
    // Login Button
    // =========================
    const loginBtn = document.querySelector(".login-btn");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            alert("Redirecting to Login Page...");
        });
    }

    const logoutBtn = document.querySelector(".logout-btn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            alert("Redirecting to Login Page...");
        });
    }

    // =========================
    // Smooth Scrolling
    // =========================
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            // Smooth scroll only for page sections
            if (href.startsWith("#") && href.length > 1) {

                e.preventDefault();

                const target = document.querySelector(href);

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }

        });
    });

    // =========================
    // Hamburger Menu
    // =========================
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navLinks");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", function () {

            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");

        });

        // Close menu after clicking a navigation link
        links.forEach(link => {
            link.addEventListener("click", function () {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });

    }

});

// =========================
// Sticky Header
// =========================
window.addEventListener("scroll", function () {

    const header = document.querySelector(".main-header");

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});