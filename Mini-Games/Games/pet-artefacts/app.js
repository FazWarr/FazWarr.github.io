function generateRandPet() {
  //var things = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
  var things = [
    "Lion", "Tiger", "Elephant", "Kangaroo", "Panda", "Giraffe", "Zebra", "Bear", "Fox", "Dolphin",
    "Whale", "Monkey", "Wolf", "Leopard", "Deer", "Cheetah", "Moose", "Otter", "Skunk", "Raccoon",
    "Eagle", "Parrot", "Penguin", "Owl", "Flamingo", "Peacock", "Sparrow", "Crow", "Hawk",
    "Toucan", "Pigeon", "Rooster", "Vulture", "Stork", "Heron", "Swallow", "Seagull", "Albatross", "Crane",
    "Crocodile", "Alligator", "Iguana", "Chameleon", "Turtle", "Snake", "Gecko", "Lizard", "Monitor",
    "Frog", "Toad", "Salamander", "Axolotl", "Newt", "Clownfish", "Shark", "Salmon", "Tuna", "Swordfish",
    "Pufferfish", "Goldfish", "Eel", "Catfish", "Butterfly", "Bee", "Ant", "Grasshopper", "Dragonfly",
    "Beetle", "Ladybug", "Wasp", "Cricket", "Moth", "Spider", "Scorpion", "Tarantula", "Tick", "Octopus",
    "Squid", "Jellyfish", "Crab", "Lobster", "Starfish", "Shrimp", "Cow", "Rabbit", "Sheep", "Goat", 
    "Chicken", "Horse", "Duck", "Goose", "Donkey", "Turkey"
]



  var thing = things[Math.floor(Math.random()*things.length)];  
  return thing;

}

function display() {
  document.write(generateRandPet());   
}

const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButtonColour);

function updateButtonColour() {
  if (button.value === "Guess the pet!!") {
    button.value = "Guess the pet again!";
    paragraph.textContent = generateRandPet();
  } else {
    button.value = "Guess the pet!";
    paragraph.textContent = generateRandPet();
  }
}