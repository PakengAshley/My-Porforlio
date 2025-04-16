// Swiper Setup
const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: false,
  allowTouchMove: true,
  effect: "slide",
  speed: 500,
});

// Sidebar Navigation Function
function Navigate(index) {
  swiper.slideTo(index);
  updateActiveLink(index);
}

function updateActiveLink(activeIndex) {
  const links = document.querySelectorAll(".Links li");
  links.forEach((link, i) => {
    link.classList.toggle("activeLink", i === activeIndex);
  });
}

// Update nav on slide change
swiper.on('slideChange', () => {
  updateActiveLink(swiper.activeIndex);
});

// Navigate to Contact Slide (e.g. from Home Button)
function NavigateToContact() {
  swiper.slideTo(4);
}

// Dark Mode Toggle
function toggleMode() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark);
}

// Load theme preference
window.addEventListener("DOMContentLoaded", () => {
  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) document.body.classList.add("dark-mode");
});
