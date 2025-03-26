document.addEventListener('DOMContentLoaded', () => {
  const rollButton = document.getElementById('rollDice');
  const userRollSpan = document.getElementById('userRoll');
  const computerRollSpan = document.getElementById('computerRoll');
  const winnerSpan = document.getElementById('winner');

  let userCountries = [];
  let computerCountries = [];

  rollButton.addEventListener('click', () => {
      // Roll dice for both players
      const userRoll = rollDice();
      const computerRoll = rollDice();

      // Update UI with dice rolls
      userRollSpan.textContent = userRoll;
      computerRollSpan.textContent = computerRoll;

      // Determine winner
      let winner;
      if (userRoll > computerRoll) {
          winner = 'User';
      } else if (computerRoll > userRoll) {
          winner = 'Computer';
      } else {
          winner = 'Tie';
      }

      winnerSpan.textContent = winner;

      // Allow country selection if there's a winner
      if (winner !== 'Tie') {
          const svgMap = document.getElementById('worldMap').contentDocument;
          const countries = svgMap.querySelectorAll('path');

          if (winner === 'User') {
              svgMap.addEventListener('click', function selectCountry(event) {
                  if (event.target.tagName === 'path' && !event.target.classList.contains('user-owned') && !event.target.classList.contains('computer-owned')) {
                      event.target.classList.add('user-owned');
                      userCountries.push(event.target.id);
                      svgMap.removeEventListener('click', selectCountry);
                      checkWinner();
                  }
              });
          } else {
              // Computer selects a random country
              const availableCountries = Array.from(countries).filter(
                  c => !c.classList.contains('user-owned') && !c.classList.contains('computer-owned')
              );

              if (availableCountries.length > 0) {
                  const randomCountry = availableCountries[Math.floor(Math.random() * availableCountries.length)];
                  randomCountry.classList.add('computer-owned');
                  computerCountries.push(randomCountry.id);
                  checkWinner();
              }
          }
      }
  });

  function rollDice() {
      return Math.floor(Math.random() * 6) + 1;
  }

  function checkWinner() {
      const totalCountries = document.getElementById('worldMap').contentDocument.querySelectorAll('path').length;

      if (userCountries.length / totalCountries >= 0.75) {
          alert('User wins the game!');
      } else if (computerCountries.length / totalCountries >= 0.75) {
          alert('Computer wins the game!');
      }
  }
});
