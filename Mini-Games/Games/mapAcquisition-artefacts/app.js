document.addEventListener('DOMContentLoaded', () => {
  const rollButton = document.getElementById('rollDice');
  const userRollSpan = document.getElementById('userRoll');
  const computerRollSpan = document.getElementById('computerRoll');
  const winnerSpan = document.getElementById('winner');
  const userProgress = document.getElementById('userProgress');
  const computerProgress = document.getElementById('computerProgress');
  const flagDisplay = document.getElementById('flagDisplay');

  const svgMap = document.getElementById('worldMap');
  const countries = Array.from(svgMap.querySelectorAll('path'));

  let userCountries = [];
  let computerCountries = [];

  rollButton.addEventListener('click', () => {
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
      return Math.floor(Math.random() * 6) + 1;
  }

  function enableCountrySelection(player) {
      countries.forEach(country => {
          country.addEventListener('click', function selectCountry(event) {
              if (!country.classList.contains('user-owned') && !country.classList.contains('computer-owned')) {
                  country.classList.add(player === 'User' ? 'user-owned' : 'computer-owned');
                  if (player === 'User') {
                      userCountries.push(country.id);
                      userProgress.value = (userCountries.length / countries.length) * 100;
                      updateFlagDisplay(country.id);
                  }
                  checkWinner();
                  countries.forEach(c => c.removeEventListener('click', selectCountry));
              }
          });
      });
  }

  function computerSelectCountry() {
      const unclaimedCountries = countries.filter(country => {
          return !country.classList.contains('user-owned') && !country.classList.contains('computer-owned');
      });

      if (unclaimedCountries.length > 0) {
          const randomCountry = unclaimedCountries[Math.floor(Math.random() * unclaimedCountries.length)];
          randomCountry.classList.add('computer-owned');
          computerCountries.push(randomCountry.id);
          computerProgress.value = (computerCountries.length / countries.length) * 100;
          updateFlagDisplay(randomCountry.id);
          checkWinner();
      }
  }

  function updateFlagDisplay(countryId) {
      flagDisplay.style.backgroundImage = `url('flags/${countryId}.png')`;
  }

  function checkWinner() {
      const totalCountries = countries.length;

      if (userCountries.length / totalCountries >= 0.75) {
          alert('User wins the game!');
      } else if (computerCountries.length / totalCountries >= 0.75) {
          alert('Computer wins the game!');
      }
  }
});
