

function generateRandNum() {
    min = Math.ceil(0);
    max = Math.floor(9);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function display() {
    document.write(generateRandNum());   
}

const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Guess the number!!") {
    button.value = "Guess the number again!";
    paragraph.textContent = generateRandNum();
  } else {
    button.value = "Guess the number!";
    paragraph.textContent = generateRandNum();
  }
}