// Project Title: Interactive Quiz App
// Overview
// Build a Quiz Web App featuring multiple questions, dynamic score tracking,
//     progress indicators, and feedback for correct or incorrect answers.
// The project will use HTML for structure, CSS for layout and styling, and
// JavaScript for core functionality and interactivity.

// Core Objectives
// 1 Display a list of quiz questions one at a time.
// 2 Track user answers and keep score.
// 3 Give immediate feedback (correct/incorrect) and a final score summary at the end.
// 4 Use an external JavaScript file for functionality and external CSS for styling.

// Store quiz questions in a JavaScript array(or an external JSON file for
//     advanced usage).Each question object should at least contain:
// js

// {
//   question: "String",
//   choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
//   correctAnswerIndex: 1  // numeric index of the correct choice
// }
// Alternatively, fetch these questions from a local questions.json or an API
//     (e.g., Open Trivia Database) if you want to practice AJAX / fetch.

// HTML Structure

// Header / Navbar
// A simple title, e.g., “JavaScript Quiz.”
// Main Container
// A section to display one question at a time and the possible multiple-choice answers.
// A Next button to move to the next question.
// A Score or Progress Indicator (“Question 3 of 10” or a progress bar).
// Footer
// Might hold your name, the date, or some additional links.

// CSS Styling

// Use an external styles.css file to style the quiz.
// Ensure the quiz is responsive: it should be legible on both desktop and mobile.
// Use consistent colors, fonts, and spacing.
// Add hover effects or animations on buttons (optional but nice for polish).
// JavaScript Logic (this is the biggest part!)

// Question Rendering

// Dynamically insert the question text and the multiple-choice answers into the DOM.
// When the user selects an answer and clicks “Submit” or “Next,” your script should
// check correctness and update the score.
// Score Tracking
// Maintain a variable to keep track of how many questions the user has answered
// correctly.

// Feedback

// Immediately or after pressing “Submit,” highlight the chosen answer in green if
// correct, or red if incorrect.
// Update the scoreboard or a progress bar.
// Progression
// Move to the next question automatically or on a button click.
// If it’s the last question, show a “Finish” or “View Results” button instead.
// Results / Restart
// When the quiz ends, display a summary: “You got 7 out of 10 correct!”
// Optionally, let the user restart the quiz from the beginning.


document.getElementById('pradzia').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('vardas').classList.remove('hidden');
    document.getElementById('pradzia').classList.add('hidden');
    document.getElementById('hyderis').classList.add('hidden');
});

document.getElementById('vardas').addEventListener('submit', function(event) {
    event.preventDefault();
    const vardas = document.getElementById('name').value;
    alert('Vardas pateiktas: ' + vardas);
})
