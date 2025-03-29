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

{/* <h2>Shapes</h2>  */}
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

{/* <h2>Patterns:</h2> */}
document.addEventListener("DOMContentLoaded", () => {
    const shapes = ["circle", "square", "triangle"]; // Available shapes
    const patternDisplay = document.getElementById("patternDisplay");
    const choicesDisplay = document.getElementById("choicesDisplay");
    const resultMessage = document.getElementById("resultMessagePattern");
    const nextButton = document.getElementById("nextButtonPattern");

    let correctAnswer = ""; // Store the correct shape for the missing pattern piece

    // Function to generate a new pattern
    function generatePattern() {
        // Reset previous round data
        patternDisplay.innerHTML = "";
        choicesDisplay.innerHTML = "";
        resultMessage.textContent = "";
        nextButton.style.display = "none";

        // Randomly generate a repeating pattern sequence
        const patternLength = Math.floor(Math.random() * 3) + 4; // Random length between 4 and 6
        const pattern = [];
        for (let i = 0; i < patternLength; i++) {
            pattern.push(shapes[i % shapes.length]); // Create alternating sequence (e.g., Circle, Square, Triangle)
        }

        // Determine the correct answer (last shape in the sequence)
        correctAnswer = pattern[pattern.length % shapes.length];

        // Display the pattern with a missing piece at the end
        for (let i = 0; i < patternLength - 1; i++) {
            const shapeElement = document.createElement("div");
            shapeElement.classList.add("shape", pattern[i]);
            patternDisplay.appendChild(shapeElement);
        }

        // Add placeholder for missing piece
        const missingPiece = document.createElement("div");
        missingPiece.classList.add("shape");
        missingPiece.style.border = "2px dashed gray"; // Placeholder for the missing shape
        patternDisplay.appendChild(missingPiece);

        // Generate random answer choices
        const choices = [correctAnswer];
        while (choices.length < 3) {
            const randomChoice = shapes[Math.floor(Math.random() * shapes.length)];
            if (!choices.includes(randomChoice)) {
                choices.push(randomChoice); // Ensure no duplicate choices
            }
        }

        // Shuffle answer choices and display as buttons
        choices.sort(() => Math.random() - 0.5); // Randomize order
        choices.forEach((choice) => {
            const button = document.createElement("button");
            button.textContent = choice.charAt(0).toUpperCase() + choice.slice(1); // Capitalize the choice
            button.addEventListener("click", () => checkAnswer(choice));
            choicesDisplay.appendChild(button);
        });
    }

    // Function to check the selected answer
    function checkAnswer(selected) {
        if (selected === correctAnswer) {
            resultMessage.textContent = "Correct! 🎉";
            resultMessage.style.color = "green";
            nextButton.style.display = "block"; // Show the "Next" button
        } else {
            resultMessage.textContent = "Try Again! ❌";
            resultMessage.style.color = "red";
        }
    }

    // Function to move to the next pattern
    nextButton.addEventListener("click", generatePattern);

    // Initialize the first pattern
    generatePattern();
});

{/* <h2>Sorting and Categorizing:</h2> */}
// script.js
const questions = [
    {
      question: "Which is longer?",
      images: [
        { src: "preschool-artefacts/pencil.png", alt: "Pencil", answer: "A" },
        { src: "preschool-artefacts/car.png", alt: "Car", answer: "B" }
      ],
      correctAnswer: "B",
      feedback: "A car is longer than a pencil!"
    },
    {
      question: "Which is heavier?",
      images: [
        { src: "preschool-artefacts/feather.png", alt: "Feather", answer: "A" },
        { src: "preschool-artefacts/bag-of-sugar.png", alt: "Bag of Sugar", answer: "B" }
      ],
      correctAnswer: "B",
      feedback: "A bag of sugar is heavier than a feather!"
    },
    {
      question: "Which can hold more?",
      images: [
        { src: "preschool-artefacts/cup.png", alt: "Cup", answer: "A" },
        { src: "preschool-artefacts/bathtub.png", alt: "Bathtub", answer: "B" }
      ],
      correctAnswer: "B",
      feedback: "A bathtub can hold more than a cup!"
    }
  ];
  
  let currentQuestionIndex = 0;
  
  function startGame() {
    currentQuestionIndex = 0;
    displayQuestion();
  }
  
  function displayQuestion() {
    const questionArea = document.getElementById('question');
    const optionsArea = document.getElementById('options');
    const question = questions[currentQuestionIndex];
  
    questionArea.textContent = question.question;
    optionsArea.innerHTML = ""; // Clear previous images
  
    question.images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.src;
      imgElement.alt = image.alt;
      imgElement.onclick = () => checkAnswer(image.answer);
      optionsArea.appendChild(imgElement);
    });
  }
  
  function checkAnswer(option) {
    const question = questions[currentQuestionIndex];
    const questionArea = document.getElementById('question');
    
    if (option === question.correctAnswer) {
      questionArea.textContent = "Correct! " + question.feedback;
    } else {
      questionArea.textContent = "Oops! " + question.feedback;
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setTimeout(displayQuestion, 2000);
    } else {
      setTimeout(() => {
        questionArea.textContent = "Great job! You've completed the game!";
        document.getElementById('options').innerHTML = ""; // Clear options
      }, 2000);
    }
  }
  







