const quizData = [
  {
    question: "Which London football club has won the UCL?",
    Option: ["Westham", "Arsenal", "Tottenham", "Chelsea"],
    answer: "Chelsea",
  },
  {
    question: "Which English team has won the most UCL titles?",
    Option: ["Manchester United", "Liverpool", "Arsenal", "Chelsea"],
    answer: "Liverpool",
  },
  {
    question: "Which team has won the most UCL titles?",
    Option: ["Real Madrid", "Barcelona", "Bayern Munich", "AC Milan"],
    answer: "Real Madrid",
  },
  {
    question: "Who is the all-time top scorer in the UCL?",
    Option: [
      "Cristiano Ronaldo",
      "Lionel Messi",
      "Robert Lewandowski",
      "Karim Benzema",
    ],
    answer: "Cristiano Ronaldo",
  },
  {
    question: "Who is the all-time top assist provider in the UCL?",
    Option: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Karim Benzema"],
    answer: "Cristiano Ronaldo",
  },
  {
    question: "Which of this teams has not won the UCL titles?",
    Option: ["Real Madrid", "Barcelona", "Bayern Munich", "Arsenal"],
    answer: "Arsenal",
  },
  {
    question: "Which team won the UCL in 2021 after defeating Man City?",
    Option: ["Chelsea", "Manchester United", "Liverpool", "Real Madrid"],
    answer: "Chelsea",
  },
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const restartBtn = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];

  // UI Setup
  restartBtn.style.display = "none";
  progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";

  currentQuestion.Option.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");

    button.onclick = () => {
      const allButtons = optionsEl.querySelectorAll("button");
      allButtons.forEach((btn) => (btn.disabled = true));

      if (option === currentQuestion.answer) {
        score++;
        button.style.backgroundColor = "#4CAF50"; // Green for correct
        button.style.color = "#fff";
        button.style.borderColor = "#4CAF50";
      } else {
        button.style.backgroundColor = "#f44336"; // Red for wrong
        button.style.color = "#fff";
        button.style.borderColor = "#f44336";
      }

      allButtons.forEach((btn) => {
        if (btn.textContent === currentQuestion.answer) {
          btn.style.backgroundColor = "#4CAF50"; // Highlight
          btn.style.color = "#fff";
          btn.style.borderColor = "#4CAF50";
        }
      });
      // set a delay before loading the next question to show feedback
      setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
          loadQuestion();
        } else {
          showResult();
        }
      }, 800); // Delay to show feedback
    };

    optionsEl.appendChild(button);
  });
}

function showResult() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  progressEl.textContent = `Your Final Score: ${score} / ${quizData.length}`;
  restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
});

// Start the app
loadQuestion();
