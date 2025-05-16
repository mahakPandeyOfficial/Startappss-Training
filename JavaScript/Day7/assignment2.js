const quizData = [
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A function having access to its own scope only",
        "A function having access to parent scopes even after parent function has closed",
        "A function that closes over its arguments only",
        "A function that only works inside loops"
      ],
      answer: 1
    },
    {
      question: "In JavaScript, what does 'this' refer to inside a regular function?",
      options: [
        "It refers to the function itself",
        "It refers to the global object (or undefined in strict mode)",
        "It always refers to the nearest object",
        "It is a reserved keyword with no value"
      ],
      answer: 1
    },
    {
      question: "How can you preserve 'this' inside a callback function?",
      options: [
        "By using bind(this)",
        "By using call(this)",
        "By using apply(this)",
        "By declaring a new this variable"
      ],
      answer: 0
    },
    {
      question: "Which of the following creates a closure?",
      options: [
        "Returning a function from another function",
        "Calling a function immediately",
        "Declaring variables inside a function",
        "Using var keyword inside a block"
      ],
      answer: 0
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const resultEl = document.getElementById('result');
  
    resultEl.textContent = '';
    questionEl.textContent = quizData[currentQuestion].question;
    optionsEl.innerHTML = '';
  
    quizData[currentQuestion].options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.onclick = () => checkAnswer(index);
      optionsEl.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const resultEl = document.getElementById('result');
    if (selected === quizData[currentQuestion].answer) {
      resultEl.textContent = "Correct!";
      score++;
    } else {
      resultEl.textContent = "Wrong!";
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showFinalScore();
    }
  }
  
  function showFinalScore() {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `
      <h2>Quiz Finished!</h2>
      <p>Your Score: ${score} / ${quizData.length}</p>
      <button onclick="restartQuiz()">Restart Quiz</button>
    `;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
  }
  
  // Start the quiz
  loadQuestion();
  