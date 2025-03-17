function generateRandColour() {
  var things = ['Red', 'Blue', 'Green', 'Magenta', 'Yellow', 'Purple', 'Orange', 'Pink', 'White', 'Coral', 'Bronze', 
    'Silver', 'Gold', 'Violet'];
  var thing = things[Math.floor(Math.random()*things.length)];  
  return thing;

}

function display() {
  document.write(generateRandColour());   
}

const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButtonColour);

function updateButtonColour() {
  if (button.value === "Guess the colour!!") {
    button.value = "Guess the colour again!";
    paragraph.textContent = generateRandColour();
  } else {
    button.value = "Guess the colour!";
    paragraph.textContent = generateRandColour();
  }
}