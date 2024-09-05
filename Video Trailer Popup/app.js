// Play Button
const btn = document.querySelector(".btn");
// Close Icon
const closeIcon = document.querySelector(".close-icon");
// Trailer Container
const trailerContainer = document.querySelector(".trailer-container");
// Video
const video = document.querySelector("video");

btn.addEventListener("click", () => {
    trailerContainer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
    trailerContainer.classList.add("active");
    video.pause();
    video.currentTime = 0;
});
