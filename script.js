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

  const questionsAsked = document.getElementById("question-body");
  const progress = document.getElementById("progress-indicator");
  const optionsElement = document.getElementById("options");
  const next = document.getElementById("next-button");
  const result = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const total = document.getElementById("total");
  const restartButton = document.getElementById("restart");

  let currentQuestionIndex = 0;
  let score = 0;

  function loadQuestion() {
    const currentQuestion = inputData[currentQuestionIndex];
    questionsAsked.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option");
      button.addEventListener("click", () => chooseCorrectAnswer(option));
      optionsElement.appendChild(button);
    });
    progress.textContent = `Question ${currentQuestionIndex + 1} of ${
      inputData.length
    }`;
  }

  // Choose answer
  function chooseCorrectAnswer(selectedOption) {
    const currentQuestion = inputData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
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
    questionsAsked.textContent = "";
    optionsElement.innerHTML = "";
    next.classList.add("hidden");
    result.style.display = "block";
    scoreElement.textContent = score;
    total.textContent = inputData.length;
  }

  // Next button
  next.addEventListener("click", () => {
    console.log(currentQuestionIndex < inputData.length);

    if (currentQuestionIndex < inputData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });

  // Restart game
  restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    result.style.display = "none";
    next.classList.remove("hidden");
    loadQuestion();
  });
});
