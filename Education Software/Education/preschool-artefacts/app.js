{/* <h1>Mathematics</h1>
<h2>Counting and Number Recognition:</h2> */}

document.addEventListener("DOMContentLoaded", () => {
    const objects = ["toys", "blocks", "snacks", "stones", "leaves", "flowers"];
    const emojis = {
        toys: "🧸",
        blocks: "🟦",
        snacks: "🍎",
        stones: "🪨",
        leaves: "🍃",
        flowers: "🌸"
    };
    
    const objectNameElement = document.getElementById("objectName");
    const objectDisplay = document.getElementById("objectDisplay");
    const answerButtons = document.getElementById("answerButtons");
    const resultMessage = document.getElementById("resultMessage");
    const nextButton = document.getElementById("nextButton");

    let correctAnswer = 0;

    // Generate a new question
    function generateQuestion() {
        // Clear previous data
        objectDisplay.innerHTML = "";
        answerButtons.innerHTML = "";
        resultMessage.textContent = "";
        nextButton.style.display = "none";

        // Randomly select an object and quantity
        const objectName = objects[Math.floor(Math.random() * objects.length)];
        const quantity = Math.floor(Math.random() * 6) + 1; // 1 to 6

        correctAnswer = quantity;
        objectNameElement.textContent = objectName;

        // Display the objects
        for (let i = 0; i < quantity; i++) {
            const objectElement = document.createElement("div");
            objectElement.classList.add("object");
            objectElement.textContent = emojis[objectName];
            objectDisplay.appendChild(objectElement);
        }

        // Generate answer buttons
        const options = [quantity, quantity + 1, quantity - 1].sort(() => Math.random() - 0.5);
        options.forEach(option => {
            if (option > 0) { // Avoid negative answers
                const button = document.createElement("button");
                button.textContent = option;
                button.addEventListener("click", () => checkAnswer(option));
                answerButtons.appendChild(button);
            }
        });
    }

    // Check the selected answer
    function checkAnswer(selected) {
        if (selected === correctAnswer) {
            resultMessage.textContent = "Correct! 🎉";
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = "Try Again! ❌";
            resultMessage.style.color = "red";
        }
        nextButton.style.display = "block";
    }

    // Move to the next question
    nextButton.addEventListener("click", generateQuestion);

    // Start the first question
    generateQuestion();
});

document.addEventListener("DOMContentLoaded", () => {
    const shapes = ["circle", "square", "triangle"];
    const shapeDisplay = document.getElementById("shapeDisplay");
    const answerButtons = document.getElementById("answerButtonsShape");
    const resultMessage = document.getElementById("resultMessageShape");
    const nextButton = document.getElementById("nextButtonShape");

    let correctShape = "";

    // Generate a new question
    function generateQuestion() {
        // Clear previous data
        shapeDisplay.innerHTML = "";
        answerButtons.innerHTML = "";
        resultMessage.textContent = "";
        nextButton.style.display = "none";

        // Randomly select a shape
        correctShape = shapes[Math.floor(Math.random() * shapes.length)];

        // Display the shape
        const shapeElement = document.createElement("div");
        shapeElement.classList.add("shape", correctShape);
        shapeDisplay.appendChild(shapeElement);

        // Generate answer buttons
        const options = [...shapes].sort(() => Math.random() - 0.5); // Shuffle options
        options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option.charAt(0).toUpperCase() + option.slice(1); // Capitalize first letter
            button.addEventListener("click", () => checkAnswer(option));
            answerButtons.appendChild(button);
        });
    }

    // Check the selected answer
    function checkAnswer(selected) {
        if (selected === correctShape) {
            resultMessage.textContent = "Correct! 🎉";
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = "Try Again! ❌";
            resultMessage.style.color = "red";
        }
        nextButton.style.display = "block";
    }

    // Move to the next question
    nextButton.addEventListener("click", generateQuestion);

    // Start the first question
    generateQuestion();
});
