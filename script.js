const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Small rotating role label; the page remains fully usable without this effect.
const roles = ["Software Developer", "Problem Solver", "Technology Enthusiast"];
const typedWord = document.getElementById("typed-word");
let roleIndex = 0;
setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  typedWord.classList.add("role-change");
  setTimeout(() => {
    typedWord.textContent = roles[roleIndex];
    typedWord.classList.remove("role-change");
  }, 180);
}, 2600);
