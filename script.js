// Part 2: Functions, Scope, Parameters, Return Values

// Global variable
let clickCount = 0;

// Function with parameters & return value
function multiplyNumbers(a, b) {
  return a * b;
}

// Function demonstrating local vs global scope
function incrementClicks() {
  let localMessage = "Local scope message";
  clickCount++; // modifies global variable
  console.log(localMessage, " | Total clicks:", clickCount);
}

// Part 3: Combining CSS & JS

// Animate box on button click
const animateBoxBtn = document.getElementById("animateBoxBtn");
const jsBox = document.getElementById("jsBox");

animateBoxBtn.addEventListener("click", () => {
  jsBox.classList.toggle("animate");
  incrementClicks();
  console.log("Box area:", multiplyNumbers(jsBox.offsetWidth, jsBox.offsetHeight));
});

// Modal open/close
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
