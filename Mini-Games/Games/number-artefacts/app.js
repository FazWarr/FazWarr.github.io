function generateRandNum() {
    min = Math.ceil(0);
    max = Math.floor(9);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function display() {
    document.write(generateRandNum());   
}

const buttonNum = document.querySelector("input");
const paragraphNum = document.querySelector("p");

buttonNum.addEventListener("click", updateButtonColour);

function updateButtonColour() {
  if (buttonNum.value === "Guess the number!!") {
    buttonNum.value = "Guess the number again!";
    paragraphNum.textContent = generateRandNum();
  } else {
    buttonNum.value = "Guess the number!";
    paragraphNum.textContent = generateRandNum();
  }
}