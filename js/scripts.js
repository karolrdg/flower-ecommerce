let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "30px",
  duration: 1700,
  reset: true,
});

sr.reveal(".home-text", { delay: 100, origin: "left" });

sr.reveal(".banner,.nw-products,.row, .news, .box-contact", {
  delay: 200,
  origin: "top",
});
