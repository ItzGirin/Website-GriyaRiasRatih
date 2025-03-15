document.addEventListener("DOMContentLoaded", function () {
    const enterButton = document.getElementById("enter-btn");
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.querySelector(".content"); 

    // Efek setelah tombol diklik
    enterButton.addEventListener("click", function () {
        loadingScreen.classList.add("fade-out"); // Tambahkan animasi fade-out
        setTimeout(() => {
            loadingScreen.style.display = "none";
            window.scrollTo(0, 0); // Pastikan halaman mulai dari atas
            content.classList.add("content-show"); // Tambahkan efek masuk ke konten utama
        }, 1500);
    });
    
});
