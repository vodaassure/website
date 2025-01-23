// Create a Welcome Modal
const welcomeModal = document.createElement("div");
welcomeModal.style.position = "fixed";
welcomeModal.style.top = "0";
welcomeModal.style.left = "0";
welcomeModal.style.width = "100%";
welcomeModal.style.height = "100%";
welcomeModal.style.background = "rgba(0, 0, 0, 0.8)";
welcomeModal.style.display = "flex";
welcomeModal.style.justifyContent = "center";
welcomeModal.style.alignItems = "center";
welcomeModal.style.zIndex = "1000";

const modalContent = document.createElement("div");
modalContent.style.padding = "20px";
modalContent.style.background = "#fff";
modalContent.style.color = "#333";
modalContent.style.textAlign = "center";
modalContent.style.borderRadius = "10px";
modalContent.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";

// Add Dynamic Greeting
const modalGreeting = document.createElement("h2");
const currentHour = new Date().getHours();
let greetingText = "";
if (currentHour < 12) {
  greetingText = "Good Morning!";
} else if (currentHour < 18) {
  greetingText = "Good Afternoon!";
} else {
  greetingText = "Good Evening!";
}
modalGreeting.textContent = greetingText;

const modalMessage = document.createElement("p");
modalMessage.textContent = "Welcome to Aditya's Funky Website!";

const closeModalBtn = document.createElement("button");
closeModalBtn.textContent = "Close";
closeModalBtn.style.marginTop = "20px";
closeModalBtn.style.padding = "10px 15px";
closeModalBtn.style.background = "#f06";
closeModalBtn.style.color = "#fff";
closeModalBtn.style.border = "none";
closeModalBtn.style.borderRadius = "5px";
closeModalBtn.style.cursor = "pointer";

// Close Modal on Button Click
closeModalBtn.addEventListener("click", () => {
  document.body.removeChild(welcomeModal);
});

// Append Content to Modal
modalContent.appendChild(modalGreeting);
modalContent.appendChild(modalMessage);
modalContent.appendChild(closeModalBtn);
welcomeModal.appendChild(modalContent);

// Show Modal on Page Load
window.addEventListener("load", () => {
  document.body.appendChild(welcomeModal);
});

setTimeout(() => {
  document.body.removeChild(welcomeModal);
}, 5000); // 5 seconds

