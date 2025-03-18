function generateRandLetter() {
  //var things = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
  var things = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]





  var thing = things[Math.floor(Math.random()*things.length)];  
  return thing;

}

function display() {
  document.write(generateRandLetter());   
}

const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButtonColour);

function updateButtonColour() {
  if (button.value === "Guess the letter!!") {
    button.value = "Guess the pet letter!";
    paragraph.textContent = generateRandLetter();
  } else {
    button.value = "Guess the letter!";
    paragraph.textContent = generateRandLetter();
  }
}