document.addEventListener('DOMContentLoaded', () => {
  const rollButton = document.getElementById('rollDice');
  const userRollSpan = document.getElementById('userRoll');
  const computerRollSpan = document.getElementById('computerRoll');
  const winnerSpan = document.getElementById('winner');
  const userProgress = document.getElementById('userProgress');
  const computerProgress = document.getElementById('computerProgress');
  const userCountriesList = document.querySelector('#userCountriesList ul');
  const computerCountriesList = document.querySelector('#computerCountriesList ul');

  const svgMap = document.getElementById('worldMap');
  const countries = Array.from(svgMap.querySelectorAll('path'));

  let userCountries = [];
  let computerCountries = [];
  const maxSelections = 100; // Limit for total acquisitions
  let totalSelections = 0;

  rollButton.addEventListener('click', () => {
      if (totalSelections >= maxSelections) {
          checkWinner();
          return;
      }

      const userRoll = rollDice();
      const computerRoll = rollDice();

      userRollSpan.textContent = userRoll;
      computerRollSpan.textContent = computerRoll;

      let winner;
      if (userRoll > computerRoll) {
          winner = 'User';
      } else if (computerRoll > userRoll) {
          winner = 'Computer';
      } else {
          winner = 'Tie';
      }

      winnerSpan.textContent = winner;

      if (winner !== 'Tie') {
          if (winner === 'User') {
              enableCountrySelection('User');
          } else {
              computerSelectCountry();
          }
      }
  });

  function rollDice() {
      return Math.floor(Math.random() * 6) + 1; // Simulate dice roll (1–6)
  }

  function enableCountrySelection(player) {
      countries.forEach(country => {
          country.addEventListener('click', function selectCountry() {
              if (totalSelections >= maxSelections) {
                  checkWinner();
                  return;
              }

              if (!country.classList.contains('user-owned') && !country.classList.contains('computer-owned')) {
                  totalSelections++;
                  const countryName = getCountryName(country); // Retrieve country name dynamically

                  country.classList.add(player === 'User' ? 'user-owned' : 'computer-owned');
                  if (player === 'User') {
                      userCountries.push(countryName);
                      addCountryToList(userCountriesList, countryName);
                      userProgress.value = (userCountries.length / maxSelections) * 100;
                  }

                  countries.forEach(c => c.removeEventListener('click', selectCountry));
                  checkWinner();
              }
          });
      });
  }

  function computerSelectCountry() {
      const unclaimedCountries = countries.filter(country => {
          return !country.classList.contains('user-owned') && !country.classList.contains('computer-owned');
      });

      if (unclaimedCountries.length > 0) {
          totalSelections++;
          const randomCountry = unclaimedCountries[Math.floor(Math.random() * unclaimedCountries.length)];
          const countryName = getCountryName(randomCountry); // Retrieve country name dynamically

          randomCountry.classList.add('computer-owned');
          computerCountries.push(countryName);
          addCountryToList(computerCountriesList, countryName);
          computerProgress.value = (computerCountries.length / maxSelections) * 100;

          checkWinner();
      }
  }

  function addCountryToList(listElement, countryName) {
      const countryItem = document.createElement('li');
      countryItem.textContent = countryName;
      listElement.appendChild(countryItem);
  }

  // Function to get country name based on `class` or `name` attribute
  function getCountryName(countryElement) {
      // Check for 'name' attribute first, then fall back to 'class'
      const nameAttribute = countryElement.getAttribute('name');
      if (nameAttribute) {
          return nameAttribute;
      }

      const classAttribute = countryElement.getAttribute('class');
      if (classAttribute) {
          return classAttribute;
      }

      console.error(`No country name found for element with ID: ${countryElement.id}`);
      return "Unknown Country";
  }

  function checkWinner() {
      const totalCountries = countries.length;

      if (userCountries.length / totalCountries >= 0.75) {
          alert('User wins the game by acquiring 75% of the map!');
          rollButton.disabled = true;
      } else if (computerCountries.length / totalCountries >= 0.75) {
          alert('Computer wins the game by acquiring 75% of the map!');
          rollButton.disabled = true;
      } else if (totalSelections >= maxSelections) {
          if (userCountries.length > computerCountries.length) {
              alert('User wins the game by acquiring more countries!');
          } else if (computerCountries.length > userCountries.length) {
              alert('Computer wins the game by acquiring more countries!');
          } else {
              alert('The game is a tie!');
          }
          rollButton.disabled = true;
      }
  }
});




