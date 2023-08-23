// initializing
const quotesbox = document.querySelector(".quotesBox");
const main = document.querySelector("main");
const btn = document.querySelector("#btn");

// quotes array of home page
let quotes = [
  `"The harder you work the better you get"`,
  `"Focus is a superpower"`,
  `"Whatever you are be a good one"`,
  `"Know your worth"`,
  `"Your mind is the most intelligent"`,
  `"Die with memories not dreams"`,
  `"Nothing is permenant , not even pain"`,
  `"Stay happy every moment"`,
  `"Peace of mind matters"`
];



// Function to update the quotes box with a random quote
function updateQuotesBox() {
  const random = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[random];
  
  quotesbox.textContent = '';
  typewriter(randomQuote); 
}
function refreshQuotes() {
  updateQuotesBox();
}
window.addEventListener('load', updateQuotesBox);
btn.addEventListener('click', refreshQuotes);
const typewriter = (text) => {
  const characters = text.split("");
  let i = 0;

  const interval = setInterval(() => {
    if (i < characters.length) {
      quotesbox.textContent += characters[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 60);
};


// animation for menu items butn
const checkbox = document.getElementById("checkbox");
const dropdown = document.querySelector(".dropdown");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= quotesBox.offsetTop) {
    main.classList.add("active");
  } else {
    main.classList.remove("active");
  }
});
