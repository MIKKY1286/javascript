
const correctAnswers = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: "b",
    q5: "a"
  };

  function submitQuiz() {
    const form = document.getElementById('quizForm');
    const result = document.getElementById('result');
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    for (let q in correctAnswers) {
      const userAnswer = form[q]?.value;
      if (userAnswer === correctAnswers[q]) {
        score++;
      }
    }

    const percentage = (score / totalQuestions) * 100;
    result.innerHTML = `Your Score: ${score}/${totalQuestions} (${percentage}%)<br>`;

    if (percentage >= 60) {
      result.innerHTML += "<span style='color: green;'>You Passed!</span>";
    } else {
      result.innerHTML += "<span style='color: red;'>You are not serious. GO and read!</span>";
    }
  }
