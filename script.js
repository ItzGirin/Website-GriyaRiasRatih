document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const enterButton = document.getElementById("enter-btn");
    const backToTopButton = document.getElementById("back-to-top");
    const mainContent = document.getElementById("main-content");
    const spinner = document.getElementById("spinner");

    // Check if user has already entered the site in this tab session
    const hasEntered = sessionStorage.getItem("hasEntered");

    if (hasEntered) {
        // Skip loading screen and show main content immediately
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
    } else {
        // Show the enter button after 1 second, spinner animates during this time
        setTimeout(() => {
            spinner.style.display = "none";
            enterButton.style.display = "inline-block";
        }, 1000);

        enterButton.addEventListener("click", function () {
            // Set flag in sessionStorage to remember user has entered in this tab session
            sessionStorage.setItem("hasEntered", "true");

            // Add fade-out class for smooth transition
            loadingScreen.classList.add("fade-out");

            // Listen for transition end to hide loading screen and show main content
            loadingScreen.addEventListener("transitionend", () => {
                loadingScreen.style.display = "none";
                mainContent.style.display = "block";
                window.scrollTo(0, 0); // Scroll to top
            }, { once: true });
        });
    }

    // Show or hide back to top button based on scroll position
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll smoothly to top when back to top button is clicked
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Ensure scroll to top on page reload
    window.onload = function () {
        window.scrollTo(0, 0);
    };
});
