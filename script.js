// document.addEventListener("DOMContentLoaded", () => {
//   // Questions and data input
//   const inputData = [
//     {
//       question: "Who won the Album of the Year at the 2025 Grammy Awards?",
//       options: [
//         "A) Taylor Swift",
//         "B) André 3000",
//         "C) Beyoncé",
//         "D) Sabrina Carpenter",
//       ],
//       answer: "C) Beyoncé",
//     },
//     {
//       question:
//         "Which song earned Kendrick Lamar both Record of the Year and Song of the Year in 2025?",
//       options: ["A) HUMBLE", "B) Not Like Us", "C) DNA", "D) Alright"],
//       answer: "B) Not Like Us",
//     },
//     {
//       question: "Who was awarded Best New Artist at the 2025 Grammy Awards?",
//       options: [
//         "A) Doechii",
//         "B) Sabrina Carpenter",
//         "C) Chappell Roan",
//         "D) Raye",
//       ],
//       answer: "C) Chappell Roan",
//     },
//     {
//       question:
//         "Which artist hilariously photobombed another celeb’s red carpet interview at the Grammys?",
//       options: [
//         "A) Harry Styles",
//         "B) Lizzo",
//         "C) Jack Black",
//         "D) Billie Eilish",
//       ],
//       answer: "C) Jack Black",
//     },
//     {
//       question:
//         "Which artist made history as the first Black woman to win a Grammy in a country music category in 2025?",
//       options: ["A) SZA", "B) Beyoncé", "C) Rihanna", "D) H.E.R"],
//       answer: "B) Beyoncé",
//     },
//   ];

//   const questionText = document.getElementById(".question-text");
//   const progressIndicator = document.getElementById("progress-indicator");
//   const optionsElement = document.querySelector(".options");
//   const nextButton = document.getElementById("next-button");
//   const result = document.getElementById("result");
//   const scoreElement = document.getElementById("score");
//   const totalElement = document.getElementById("total");
//   const restartButton = document.getElementById("restart");

//   let currentQuestionIndex = 0;
//   let score = 0;
//   let selectedAnswer = null;

//   function loadQuestion() {
//     const currentQuestion = inputData[currentQuestionIndex];

//     // Set question text
//     questionText.textContent = currentQuestion.question;
//     optionsElement.innerHTML = "";
//     selectedAnswer = null;

//     // Disable next button until user selects an answer
//     nextButton.disabled = true;

//     currentQuestion.options.forEach((option) => {
//       const button = document.createElement("button");
//       button.textContent = option;
//       button.classList.add("option");
//       button.addEventListener("click", () => chooseCorrectAnswer(button, option));
//       optionsElement.appendChild(button);
//     });

//     progressIndicator.textContent = `Question ${currentQuestionIndex + 1} of ${
//       inputData.length
//     }`;
//   }

//   // Choose answer
//   function chooseCorrectAnswer(button, chosenOption) {
//     const currentQuestion = inputData[currentQuestionIndex];

//     // Remove previous selection styling
//     document.querySelectorAll("option").forEach((btn) => {
//       btn.classList.remove("selected", "correct", "wrong");
//     });

//     selectedAnswer = chosenOption;
//     button.classList("selected");

//     //Enable next button after selection
//     nextButton.disabled = false;
//   }

//   function goToNextQuestion() {
//     if(!selectedAnswer) return;
//   }

//     if (chosenOption === currentQuestion.answer) {
//       score++;
//     }
//     currentQuestionIndex++;
//     if (currentQuestionIndex < inputData.length) {
//       loadQuestion();
//     } else {
//       showResult();
//     }
//   }

//   function showResult() {
//     questionsAsked.textContent = "";
//     optionsElement.innerHTML = "";
//     next.classList.add("hidden");
//     result.style.display = "block";
//     scoreElement.textContent = score;
//     total.textContent = inputData.length;
//   }

//   // Next button
//   next.addEventListener("click", () => {
//     console.log(currentQuestionIndex < inputData.length);

//     if (currentQuestionIndex < inputData.length) {
//       loadQuestion();
//     } else {
//       showResult();
//     }
//   });

//   // Restart game
//   restartButton.addEventListener("click", () => {
//     currentQuestionIndex = 0;
//     score = 0;
//     result.style.display = "none";
//     next.classList.remove("hidden");
//     loadQuestion();
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  // Questions and data input
  const inputData = [
    {
      question: "Who won the Album of the Year at the 2025 Grammy Awards?",
      options: [
        "A) Taylor Swift",
        "B) André 3000",
        "C) Beyoncé",
        "D) Sabrina Carpenter",
      ],
      answer: "C) Beyoncé",
    },
    {
      question:
        "Which song earned Kendrick Lamar both Record of the Year and Song of the Year in 2025?",
      options: ["A) HUMBLE", "B) Not Like Us", "C) DNA", "D) Alright"],
      answer: "B) Not Like Us",
    },
    {
      question: "Who was awarded Best New Artist at the 2025 Grammy Awards?",
      options: [
        "A) Doechii",
        "B) Sabrina Carpenter",
        "C) Chappell Roan",
        "D) Raye",
      ],
      answer: "C) Chappell Roan",
    },
    {
      question:
        "Which artist hilariously photobombed another celeb’s red carpet interview at the Grammys?",
      options: [
        "A) Harry Styles",
        "B) Lizzo",
        "C) Jack Black",
        "D) Billie Eilish",
      ],
      answer: "C) Jack Black",
    },
    {
      question:
        "Which artist made history as the first Black woman to win a Grammy in a country music category in 2025?",
      options: ["A) SZA", "B) Beyoncé", "C) Rihanna", "D) H.E.R"],
      answer: "B) Beyoncé",
    },
  ];

  // DOM Elements (Fixed Selectors)
  const questionText = document.querySelector(".question-text");
  const optionsElement = document.querySelector(".options");
  const progressIndicator = document.getElementById("progress-indicator");
  const nextButton = document.getElementById("next-button");
  const result = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const totalElement = document.getElementById("total");
  const restartButton = document.getElementById("restart");

  let currentQuestionIndex = 0;
  let score = 0;
  let selectedAnswer = null;

  function loadQuestion() {
    const currentQuestion = inputData[currentQuestionIndex];

    // Set question text
    questionText.textContent = currentQuestion.question;
    optionsElement.innerHTML = ""; // Clear previous options
    selectedAnswer = null;

    // Disable Next button until user selects an answer
    nextButton.disabled = true;

    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option");
      button.addEventListener("click", () => selectAnswer(button, option));
      optionsElement.appendChild(button);
    });

    progressIndicator.textContent = `Question ${currentQuestionIndex + 1} of ${
      inputData.length
    }`;
  }

  function selectAnswer(button, chosenOption) {
    // const currentQuestion = inputData[currentQuestionIndex];

    // Remove previous selection styling
    document.querySelectorAll(".option").forEach((btn) => {
      btn.classList.remove("selected", "correct", "wrong");
    });

    selectedAnswer = chosenOption;
    button.classList.add("selected");

    // Enable Next button after selection
    nextButton.disabled = false;
  }

  function goToNextQuestion() {
    // Ensure user selects an answer before proceeding
    if (!selectedAnswer) return;

    const currentQuestion = inputData[currentQuestionIndex];

    // Check if the answer is correct
    if (selectedAnswer === currentQuestion.answer) {
      score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < inputData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    questionText.textContent = "Quiz Completed!";
    optionsElement.innerHTML = ""; // Clear options
    result.style.display = "block"; // Show result
    nextButton.style.display = "none"; // Hide next button
    scoreElement.textContent = score;
    totalElement.textContent = inputData.length;
  }

  // Restart Quiz
  restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    result.style.display = "none";
    nextButton.style.display = "block";
    loadQuestion();
  });

  nextButton.addEventListener("click", goToNextQuestion);

  // Initialize first question
  loadQuestion();
});
