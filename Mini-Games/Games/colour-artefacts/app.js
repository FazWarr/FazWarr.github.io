function generateRandColour() {
  //var things = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
  var things = [
    "Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Pink", 
    "Cyan", "Magenta", "Lime", "Teal", "Lavender", "Peach", "Maroon", 
    "Turquoise", "Olive", "Beige", "Coral", "Gold", "Silver", "Crimson", 
    "Aquamarine", "Amber", "Mint", "Chocolate", "Plum", "Salmon", "Ivory", 
    "Fuchsia", "Navy", "Emerald", "Sapphire", "Periwinkle", "Charcoal", 
    "Ebony", "Chestnut", "Rust", "Slate", "Cerulean", "Almond", "Blush", 
    "Mauve", "Mustard", "Ochre", "Apricot", "Bronze", "Lilac", "Azure", 
    "Rose", "Scarlet", "Cobalt", "Sand", "Ecru", "Pewter", "Mahogany", 
    "Jade", "Tan", "Burgundy", "Claret", "Denim", "Honeydew", "Pistachio", 
    "Snow", "Garnet", "Lemon", "Terracotta", "Wisteria", "Flame", "Coffee", 
    "Topaz", "Umber", "Mulberry", "Copper", "Persimmon", "Watermelon", 
    "Pearl", "Mint", "Electric", "Midnight"
]


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