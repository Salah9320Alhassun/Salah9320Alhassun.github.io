function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");

  // Check if the menu is open
  if (menu.classList.contains("open")) {
    document.body.style.backgroundColor = ""; // Reset body background color
  }

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to change the background color when button1 is clicked
function changeBackgroundColor1() {
  document.body.style.backgroundColor = "blue"; // Change background color
  button1.classList.add("active"); // Apply active class to button1
  button2.classList.remove("active"); // Remove active class from button2
}

// Function to change the background color when button2 is clicked
function changeBackgroundColor2() {
  document.body.style.backgroundColor = "yellow"; // Change background color
  button2.classList.add("active"); // Apply active class to button2
  button1.classList.remove("active"); // Remove active class from button1
}
