// Selectors
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");
const themeSwitcher = document.createElement("button");
const scrollTopBtn = document.createElement("button");

// Add Theme Switcher
themeSwitcher.textContent = "Switch Theme";
themeSwitcher.style.position = "fixed";
themeSwitcher.style.top = "20px";
themeSwitcher.style.right = "20px";
themeSwitcher.style.padding = "10px 15px";
themeSwitcher.style.background = "#f06";
themeSwitcher.style.color = "#fff";
themeSwitcher.style.border = "none";
themeSwitcher.style.cursor = "pointer";
document.body.appendChild(themeSwitcher);

let isDarkTheme = true;

// Add Scroll-to-Top Button
scrollTopBtn.textContent = "Top";
scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "20px";
scrollTopBtn.style.right = "20px";
scrollTopBtn.style.padding = "10px 15px";
scrollTopBtn.style.background = "#f06";
scrollTopBtn.style.color = "#fff";
scrollTopBtn.style.border = "none";
scrollTopBtn.style.cursor = "pointer";
scrollTopBtn.style.display = "none";
document.body.appendChild(scrollTopBtn);

// Scroll Event for Scroll-to-Top Button
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dynamic Greeting Based on Time
const greeting = document.createElement("p");
greeting.style.fontSize = "1.5em";
greeting.style.marginTop = "20px";
greeting.style.color = "#ffeb3b";
const hour = new Date().getHours();
let greetingText = "";
if (hour < 12) {
  greetingText = "Good Morning, Aditya!";
} else if (hour < 18) {
  greetingText = "Good Afternoon, Aditya!";
} else {
  greetingText = "Good Evening, Aditya!";
}
greeting.textContent = greetingText;
document.querySelector("header").appendChild(greeting);

// Smooth Scroll for Navigation Links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Theme Switcher Functionality
themeSwitcher.addEventListener("click", () => {
  isDarkTheme = !isDarkTheme;
  document.body.style.background = isDarkTheme ? "#222" : "#f7f7f7";
  document.body.style.color = isDarkTheme ? "#fff" : "#222";
  themeSwitcher.style.background = isDarkTheme ? "#f06" : "#4a90e2";
});
