document.addEventListener("DOMContentLoaded", () => {
  const celestialBodies = document.querySelectorAll(".celestial-body");
  const missionLog = document.getElementById("missionLog");
  const resetButton = document.getElementById("resetButton");

  // Mission descriptions for each celestial body
  const missions = {
      Sun: "Study solar flares and collect energy samples.",
      Mercury: "Collect rare minerals and survive extreme temperatures.",
      Venus: "Navigate thick clouds to study its greenhouse effect.",
      Earth: "Launch a satellite to monitor climate change.",
      Mars: "Deploy a rover to search for water and signs of life.",
      Jupiter: "Avoid radiation belts while exploring its moons.",
      Saturn: "Collect ice particles from the rings.",
      Uranus: "Analyze the tilted orbit and its atmosphere.",
      Neptune: "Study the strongest winds in the solar system.",
  };

  // Add click events to celestial bodies
  celestialBodies.forEach(body => {
      body.addEventListener("click", () => {
          const name = body.getAttribute("data-name");
          missionLog.textContent = `Mission: ${missions[name]}`;
          body.style.color = "yellow"; // Highlight the selected body
      });
  });

  // Reset game
  resetButton.addEventListener("click", () => {
      missionLog.textContent = "Mission Log: Click a planet to start your mission!";
      celestialBodies.forEach(body => {
          body.style.color = "white"; // Reset colors
      });
  });
});
