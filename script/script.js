let currentQuestion = 0;

function render() {
  const actualQuestion = document.getElementById('counter-actual');
  actualQuestion.innerHTML = currentQuestion + 1;

  const questionCounterGoal = document.getElementById('counter-goal');
  questionCounterGoal.innerHTML = quizHtml.length;

  showQuestion();
}

function showQuestion() {
  let question = document.getElementById('question');
  question.innerHTML = quizHtml[currentQuestion]['question'];

  let answer_1 = document.getElementById('answer-1');
  answer_1.innerHTML = quizHtml[currentQuestion]['answer_1'];
}

function nextQuestion() {
  // if (answer == correctAnswer) {
  //   currentQuestion++;
  //   saveLocalStorage();
  //   render();
  // }
  currentQuestion++;
  render();
}
