const userRollElement = document.getElementById("user-roll");
const computerRollElement = document.getElementById("computer-roll");
const resultElement = document.getElementById("result");
const acquiredList = document.getElementById("acquired-list");
const countries = document.querySelectorAll("svg path");

let userTurn = false;


document.getElementById("roll-dice").addEventListener("click", () => {
  const userRoll = Math.floor(Math.random() * 6) + 1; // User rolls the dice (1-6)
  const computerRoll = Math.floor(Math.random() * 6) + 1; // Computer rolls the dice (1-6)

  userRollElement.textContent = `Your Roll: ${userRoll}`;
  computerRollElement.textContent = `Computer's Roll: ${computerRoll}`;

  if (userRoll > computerRoll) {
    resultElement.textContent = "You win! Click on a country.";
    userTurn = true;
    enableCountrySelection();
  } else if (userRoll < computerRoll) {
    resultElement.textContent = "Computer wins! Computer acquires a country.";
    userTurn = false;
    acquireRandomCountry("Computer");
  } else {
    resultElement.textContent = "It's a tie! Roll again.";
    userTurn = false;
    disableCountrySelection();
  }
});

function enableCountrySelection() {
  countries.forEach(country => {
    country.style.cursor = "pointer";
    country.addEventListener("click", () => {
      if (userTurn) {
        acquiredList.innerHTML += `<li>${country.id} (You)</li>`;
        country.style.fill = "#4caf50"; // Change color to indicate acquisition
        userTurn = false;
        resultElement.textContent = "Roll the dice to play again!";
      }
    });
  });
}

function disableCountrySelection() {
  countries.forEach(country => {
    country.style.cursor = "default";
  });
}

function acquireRandomCountry(player) {
  const availableCountries = Array.from(countries).filter(country => country.style.fill !== "#4caf50");
  if (availableCountries.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableCountries.length);
    const randomCountry = availableCountries[randomIndex];
    acquiredList.innerHTML += `<li>${randomCountry.id} (${player})</li>`;
    randomCountry.style.fill = "#f44336"; // Change color to indicate computer acquisition
    resultElement.textContent = "Roll the dice to play again!";
  } else {
    resultElement.textContent = "All countries have been acquired!";
  }
}

disableCountrySelection(); // Disable country selection initially
