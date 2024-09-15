const loginPage = document.getElementById('login-page');
const subjectPage = document.getElementById('subject-page');
const quizPage = document.getElementById('quiz-page');
const quizContainer = document.getElementById('quiz-container');
const subjectTitle = document.getElementById('subject-title');
const scoreSpan = document.getElementById('score');

let score = 0;

const questions = {
    Maths: [
        { question: "2 + 2", options: ["3", "4", "5", "6"], answer: "4" },
        { question: "5 x 3", options: ["15", "20", "10", "30"], answer: "15" },
        // Add 13 more questions
    ],
    Science: [
        { question: "What is H2O?", options: ["Water", "Oxygen", "Hydrogen", "Carbon Dioxide"], answer: "Water" },
        { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
        // Add 13 more questions
    ]
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        loginPage.classList.add('hidden');
        subjectPage.classList.remove('hidden');
    } else {
        alert('Please enter both username and password');
    }
}

function startQuiz(subject) {
    subjectTitle.textContent = subject;
    quizContainer.innerHTML = '';

    questions[subject].forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);

        q.options.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.onclick = () => checkAnswer(optionButton, option, q.answer);
            questionDiv.appendChild(optionButton);
        });

        quizContainer.appendChild(questionDiv);
    });

    subjectPage.classList.add('hidden');
    quizPage.classList.remove('hidden');
    score = 0;
    scoreSpan.textContent = score;
}

function checkAnswer(button, selected, correct) {
    if (selected === correct) {
        score++;
        scoreSpan.textContent = score;
    }
    disableOptions(button.parentNode);
}

function disableOptions(questionDiv) {
    const buttons = questionDiv.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function goBack() {
    quizPage.classList.add('hidden');
    subjectPage.classList.remove('hidden');
}
