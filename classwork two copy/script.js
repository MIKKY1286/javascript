function loadQuiz() {
  const quizContainer = document.getElementById("quiz");

  questions.forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = `${index + 1}. ${item.question}`;
    questionDiv.appendChild(questionTitle);

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "options";

    for (let key in item.options) {
      const optionLabel = document.createElement("label");
      optionLabel.innerHTML = `
        <input type="radio" name="q${index}" value="${key}">
        ${item.options[key]}
      `;
      optionsDiv.appendChild(optionLabel);
    }

    questionDiv.appendChild(optionsDiv);
    quizContainer.appendChild(questionDiv);
  });
}

function submitQuiz() {
  const resultDiv = document.getElementById("result");
  let score = 0;

  questions.forEach((item, index) => {
    const userAnswer = document.querySelector(`input[name="q${index}"]:checked`);
    if (userAnswer && userAnswer.value === item.correct) {
      score++;
    }
  });

  const percentage = (score / questions.length) * 100;
  resultDiv.innerHTML = `Your Score: ${score}/${questions.length} (${percentage}%)<br>`;

  if (percentage >= 60) {
    resultDiv.innerHTML += "<span style='color: green;'>You Passed!</span>";
  } else {
    resultDiv.innerHTML += "<span style='color: red;'>You Failed. Try Again!</span>";
  }
}

// Load the quiz when the page loads
window.onload = loadQuiz;
