function generateRandCountry() {
  //var things = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
  var things = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua", "Argentina", "Armenia", "Australia", 
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", 
    "Benin", "Bhutan", "Bolivia", "Bosnia", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina", "Burundi", 
    "Cabo", "Cambodia", "Cameroon", "Canada", "CAR", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", 
    "Costa", "Croatia", "Cuba", "Cyprus", "Czechia", "DRC", "Denmark", "Djibouti", "Dominica", "Dominican", 
    "Ecuador", "Egypt", "ElSalvador", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", 
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "GBissau", 
    "Guyana", "Haiti", "HolySee", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", 
    "Ireland", "Israel", "Italy", "Ivory", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
    "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", 
    "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall", 
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", 
    "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "NZ", "Nicaragua", "Niger", "Nigeria", 
    "NMacedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua", "Paraguay", "Peru", 
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "SKitts", "SLucia", "SVGrenadines", 
    "Samoa", "SanMarino", "STome", "Saudi", "Senegal", "Serbia", "Seychelles", "Sierra", "Singapore", "Slovakia", 
    "Slovenia", "Solomon", "Somalia", "SAfrica", "SSudan", "Spain", "SriLanka", "Sudan", "Suriname", "Sweden", 
    "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad", "Tunisia", "Turkey", 
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "UAE", "UK", "USA", "Uruguay", "Uzbekistan", "Vanuatu", 
    "Vatican", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
]




  var thing = things[Math.floor(Math.random()*things.length)];  
  return thing;

}

function display() {
  document.write(generateRandCountry());   
}

const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButtonColour);

function updateButtonColour() {
  if (button.value === "Guess the country!!") {
    button.value = "Guess the pet country!";
    paragraph.textContent = generateRandCountry();
  } else {
    button.value = "Guess the country!";
    paragraph.textContent = generateRandCountry();
  }
}
