const navOverlay = document.querySelector(".navOverlay");
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const closeIcon = document.querySelector(".closeIcon");
hamburgerIcon.addEventListener("click", () => {
navOverlay.style.display = "flex";
setTimeout(() => {
navOverlay.style.transform = " translateX(0rem)";
}, 1);
});

closeIcon.addEventListener("click", () => {
navOverlay.style.transform = " translateX(22rem)";
setTimeout(() => {
navOverlay.style.display = "none";
}, 400);
});