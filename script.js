document.addEventListener("DOMContentLoaded", function () {
    const enterButton = document.getElementById("enter-btn");
    const loadingScreen = document.getElementById("loading-screen");

    enterButton.addEventListener("click", function () {
        loadingScreen.style.display = "none"; // Hilangkan loading screen
        window.scrollTo(0, 0); // Kembalikan scroll ke atas
    });

    // Pastikan setiap kali halaman reload, scroll ke atas
    window.onload = function () {
        window.scrollTo(0, 0);
    };
});
