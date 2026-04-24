# UCL Football Quiz Application

A dynamic, web-based quiz application focused on the UEFA Champions League. Built with JavaScript, HTML5, and CSS3, this project demonstrates core front-end development concepts like DOM manipulation, state management, and event handling.

## Built With

**HTML5:** For the document structure.
**CSS3:** For modern, professional styling and transitions.
**JavaScript (ES6):** For the application logic, scoring, and interactivity.

## Project Structure

- `index.html`: Contains the structural elements and the quiz container.
- `styles.css`: Handles the layout, typography, and button states.
- `script.js`: Contains the quiz data, scoring logic, and DOM update functions.

## How It Works

**The Data:** Questions and answers are stored in an array of objects called `quizData`.

**State Management:** The variables `currentQuestionIndex` and `score` track the user's progress.
**The Logic:**
`loadQuestion()`: Clears the previous options and creates new buttons for the current question.
`button.onclick`: Listens for a user choice, checks it against the correct answer, and advances the index.
`showResult()`: Triggers once the end of the array is reached to display the final score.
