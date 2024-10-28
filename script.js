const quizQuestions = [
    {
        question: "Which zodiac sign is symbolized by a ram?",
        options: ["Aries", "Leo", "Sagittarius", "Cancer"],
        answer: 0
    },
    {
        question: "Which zodiac sign is represented by two fish?",
        options: ["Gemini", "Pisces", "Aquarius", "Libra"],
        answer: 1
    },
    {
        question: "Which zodiac sign is associated with the element of earth?",
        options: ["Aries", "Scorpio", "Taurus", "Gemini"],
        answer: 2
    },
    {
        question: "Which zodiac sign is symbolized by a bull?",
        options: ["Capricorn", "Taurus", "Virgo", "Sagittarius"],
        answer: 1
    },
    {
        question: "Which zodiac sign is represented by a lion?",
        options: ["Leo", "Aries", "Cancer", "Pisces"],
        answer: 0
    },
    {
        question: "Which zodiac sign is associated with scales?",
        options: ["Capricorn", "Gemini", "Virgo", "Libra"],
        answer: 3
    },
    {
        question: "Which zodiac sign is symbolized by a scorpion?",
        options: ["Sagittarius", "Scorpio", "Leo", "Aries"],
        answer: 1
    },
    {
        question: "Which zodiac sign is known as the water bearer?",
        options: ["Pisces", "Aquarius", "Scorpio", "Cancer"],
        answer: 1
    },
    {
        question: "Which zodiac sign is represented by twins?",
        options: ["Gemini", "Libra", "Pisces", "Cancer"],
        answer: 0
    },
    {
        question: "Which zodiac sign is known for being ambitious and represented by a goat?",
        options: ["Capricorn", "Aries", "Virgo", "Leo"],
        answer: 0
    }
];


let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];

document.querySelector("#start").addEventListener("click", startQuiz);
document.getElementById("retake").addEventListener("click", retakeQuiz);

function startQuiz() {
    document.querySelector("#start").style.display = "none"; 
    document.getElementById("question").style.display = "block";
    document.getElementById("options").style.display = "block";
    displayQuestion();
}

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    
    questionElement.textContent = quizQuestions[currentQuestion].question;
    optionsElement.innerHTML = quizQuestions[currentQuestion].options
        .map((option, index) => 
            `<li>
                <button onclick="selectAnswer(${index})">${option}</button>
            </li>`
        ).join('');
}

function selectAnswer(selectedIndex) {
    selectedAnswers[currentQuestion] = selectedIndex;

    if (selectedIndex === quizQuestions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    } else {
        displayScore();
    }

}
function displayScore() {
    document.getElementById("question").style.display = "none"; 
    document.getElementById("options").style.display = "none"; 
    document.getElementById("retake").style.display = "block";
    document.getElementById("quiz").style.display =  "none";

    document.getElementById("score").innerHTML = `
        <p>Your score is ${score} out of ${quizQuestions.length}</p>
        <p>Your answers:</p>
        <ol>
            ${quizQuestions.map((q, i) => {
                const isCorrect = selectedAnswers[i] === q.answer;
                const color = isCorrect ? 'green' : 'red';
                return `
                    <li>
                        ${q.question} - 
                        <b style="color: ${color};">${q.options[selectedAnswers[i]]}</b>
                    </li>
                `;
            }).join('')}
        </ol>
    `;
}


function retakeQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswers = []; 
    document.getElementById("score").textContent = ''; 
    document.getElementById("retake").style.display = "none";
    document.querySelector("#start").style.display = "block";
    document.getElementById("quiz").style.display =  "block";
}
