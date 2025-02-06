document.addEventListener("DOMContentLoaded", function () {
    const movieList = document.querySelector(".movie-list");
    let scrollAmount = 0;
    const scrollStep = 2; // Adjust scrolling speed (higher = faster)
    const scrollDelay = 30; // Milliseconds between each scroll step

    function autoScroll() {
        scrollAmount += scrollStep;
        movieList.scrollLeft += scrollStep;

        // If we reach the end, reset to the start (infinite loop effect)
        if (scrollAmount >= movieList.scrollWidth - movieList.clientWidth) {
            scrollAmount = 0;
            movieList.scrollLeft = 0;
        }
    }

    // Run autoScroll function every `scrollDelay` milliseconds
    setInterval(autoScroll, scrollDelay);
});