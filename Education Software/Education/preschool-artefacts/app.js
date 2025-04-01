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

{/* <h2>Measurement:</h2> */}
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
      }, 1000);
    }
  }
  

{/* <h2>Spatial Awareness:</h2> */}
document.addEventListener("DOMContentLoaded", () => {
    const positions = [
      { id: "above", text: "Drag the object ABOVE the target!", top: "50px", left: "150px" },
      { id: "below", text: "Drag the object BELOW the target!", top: "250px", left: "150px" },
      { id: "beside", text: "Drag the object BESIDE the target!", top: "150px", left: "250px" },
      { id: "inside", text: "Drag the object INSIDE the target!", top: "150px", left: "150px" }
    ];
  
    let currentIndex = 0;
  
    const instruction = document.getElementById("instruction");
    const gameArea = document.getElementById("game-area");
    const feedbackArea = document.getElementById("feedback-area");
    const startButton = document.getElementById("start-buttonSpatial");
  
    startButton.addEventListener("click", startGame);
  
    function startGame() {
      currentIndex = 0;
      feedbackArea.textContent = ""; // Clear previous feedback
      displayInstruction();
      renderGameElements();
    }
  
    function displayInstruction() {
      instruction.textContent = positions[currentIndex].text;
    }
  
    function renderGameElements() {
      gameArea.innerHTML = ""; // Clear the game area
  
      // Create the target
      const target = document.createElement("div");
      target.id = "targetSpatial";
      target.textContent = "T";
      gameArea.appendChild(target);
  
      // Create the draggable object
      const object = document.createElement("div");
      object.classList.add("objectSpatial");
      object.textContent = "O";
      object.style.top = "150px";
      object.style.left = "50px";
      object.setAttribute("draggable", true);
  
      // Drag events
      object.ondragstart = (e) => {
        e.dataTransfer.setData("text/plain", null);
      };
  
      target.ondragover = (e) => {
        e.preventDefault();
      };
  
      target.ondrop = () => {
        const correctPosition = positions[currentIndex].id;
  
        // Position the object based on the current instruction
        if (correctPosition === "inside") {
          object.style.top = "150px";
          object.style.left = "150px";
          feedbackArea.textContent = "The object is INSIDE the target. Restarting the game!";
          setTimeout(startGame, 5000); // Restart the game after a brief pause
        } else {
          object.style.top = positions[currentIndex].top;
          object.style.left = positions[currentIndex].left;
          displayFeedback(correctPosition);
          currentIndex++;
          if (currentIndex < positions.length) {
            displayInstruction();
          } else {
            instruction.textContent = "Great job! You've mastered positional concepts!";
            gameArea.innerHTML = ""; // Clear the game area
          }
        }
      };
  
      gameArea.appendChild(object);
    }
  
    function displayFeedback(correctPosition) {
      let feedbackMessage = `The object is ${correctPosition.toUpperCase()} the target!`;
      feedbackArea.textContent = feedbackMessage;
    }
  });


{/* <h2>Sorting and Categorizing:</h2> */}
document.addEventListener("DOMContentLoaded", () => {
  const bins = {
    "size-bin": "Size",
    "color-bin": "Color",
    "shape-bin": "Shape",
    "purpose-bin": "Purpose"
  };

  const objects = [
    { id: "obj1", src: "preschool-artefacts/images/small-ball.png", category: "Size", alt: "Small Ball" },
    { id: "obj2", src: "preschool-artefacts/images/big-box.png", category: "Size", alt: "Big Box" },
    { id: "obj3", src: "preschool-artefacts/images/tiny-star.png", category: "Size", alt: "Tiny Star" },
    { id: "obj4", src: "preschool-artefacts/images/large-cylinder.png", category: "Size", alt: "Large Cylinder" },
    { id: "obj5", src: "preschool-artefacts/images/red-cube.png", category: "Color", alt: "Red Cube" },
    { id: "obj6", src: "preschool-artefacts/images/blue-circle.png", category: "Color", alt: "Blue Circle" },
    { id: "obj7", src: "preschool-artefacts/images/yellow-triangle.png", category: "Color", alt: "Yellow Triangle" },
    { id: "obj8", src: "preschool-artefacts/images/green-rectangle.png", category: "Color", alt: "Green Rectangle" },
    { id: "obj9", src: "preschool-artefacts/images/circle.png", category: "Shape", alt: "Circle" },
    { id: "obj10", src: "preschool-artefacts/images/square.png", category: "Shape", alt: "Square" },
    { id: "obj11", src: "preschool-artefacts/images/triangle.png", category: "Shape", alt: "Triangle" },
    { id: "obj12", src: "preschool-artefacts/images/rectangle.png", category: "Shape", alt: "Rectangle" },
    { id: "obj13", src: "preschool-artefacts/images/traffic-light.png", category: "Purpose", alt: "Traffic Light" },
    { id: "obj14", src: "preschool-artefacts/images/stop-sign.png", category: "Purpose", alt: "Stop Sign" },
    { id: "obj15", src: "preschool-artefacts/images/speed-limit.png", category: "Purpose", alt: "Speed Limit" },
    { id: "obj16", src: "preschool-artefacts/images/yield-sign.png", category: "Purpose", alt: "Yield Sign" }
  ];

  let draggedItem = null; // Reference to the currently dragged item
  let objectsPlaced = 0;

  function startGame() {
    objectsPlaced = 0;
    document.getElementById("message").textContent = "";
    renderBins();
    renderObjects();
  }

  function renderBins() {
    const binsContainer = document.getElementById("binsSort");
    binsContainer.innerHTML = "";
    for (const bin in bins) {
      const binElement = document.createElement("div");
      binElement.classList.add("binSort");
      binElement.id = bin;
      binElement.textContent = bins[bin];

      // Desktop drag-and-drop events
      binElement.ondragover = (e) => e.preventDefault();
      binElement.ondrop = (e) => handleDrop(e, bin);

      // Mobile touch events
      binElement.addEventListener("touchmove", (e) => e.preventDefault());
      binElement.addEventListener("touchend", () => handleTouchDrop(bin));

      binsContainer.appendChild(binElement);
    }
  }

  function renderObjects() {
    const objectsContainer = document.getElementById("objectsSort");
    objectsContainer.innerHTML = "";
    shuffleArray(objects).forEach((obj) => {
      const objectElement = document.createElement("div");
      objectElement.classList.add("objectSort");
      objectElement.id = obj.id;

      // Add image element inside the object div
      const imageElement = document.createElement("img");
      imageElement.src = obj.src;
      imageElement.alt = obj.alt;
      imageElement.draggable = false; // Prevent dragging image separately

      objectElement.appendChild(imageElement);

      // Desktop drag-and-drop events
      objectElement.setAttribute("draggable", true);
      objectElement.ondragstart = (e) => {
        draggedItem = obj.id;
        e.dataTransfer.setData("text/plain", obj.id);
      };

      // Mobile touch events
      objectElement.addEventListener("touchstart", (e) => {
        draggedItem = obj.id;
        e.target.style.opacity = "0.5"; // Visual feedback for dragging
      });

      objectElement.addEventListener("touchmove", (e) => {
        const touchLocation = e.targetTouches[0];
        objectElement.style.position = "absolute";
        objectElement.style.left = `${touchLocation.pageX - 40}px`; // Adjust for object size
        objectElement.style.top = `${touchLocation.pageY - 40}px`; // Adjust for object size
      });

      objectElement.addEventListener("touchend", (e) => {
        e.target.style.opacity = "1"; // Reset visual feedback
        draggedItem = obj.id;
      });

      objectsContainer.appendChild(objectElement);
    });
  }

  function handleDrop(e, bin) {
    const objectId = e.dataTransfer.getData("text/plain");
    processDrop(objectId, bin);
  }

  function handleTouchDrop(bin) {
    if (draggedItem) {
      processDrop(draggedItem, bin);
      draggedItem = null; // Clear the dragged item after dropping
    }
  }

  function processDrop(objectId, bin) {
    const object = objects.find((obj) => obj.id === objectId);

    if (object.category === bins[bin]) {
      document.getElementById(objectId).remove();
      objectsPlaced++;

      if (objectsPlaced === objects.length) {
        document.getElementById("message").textContent =
          "Congratulations! You've sorted all the objects! Click 'Restart Game' to play again.";
      }
    } else {
      document.getElementById("message").textContent = "Wrong bin! Try again.";
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  document.getElementById("restart-buttonSort").addEventListener("click", startGame);

  startGame();
});

  
  
  
  
  






