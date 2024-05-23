let currentQuestion = 19;

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

  let answerA = document.getElementById('answer_1');
  answerA.innerHTML = quizHtml[currentQuestion]['answer_1'];

  let answerB = document.getElementById('answer_2');
  answerB.innerHTML = quizHtml[currentQuestion]['answer_2'];

  let answerC = document.getElementById('answer_3');
  answerC.innerHTML = quizHtml[currentQuestion]['answer_3'];

  let answerD = document.getElementById('answer_4');
  answerD.innerHTML = quizHtml[currentQuestion]['answer_4'];
}

function nextQuestion() {
  document.getElementById('btn-next-question').disabled = true;

  delChoices();

  currentQuestion++;

  render();

  // if (currentQuestion == quizHtml.length) {
  //   TODO show end-screen
  //   alert('You did it!');
  // }
}

function delChoices() {
  document
    .getElementById('answer_1')
    .parentNode.classList.remove('bg-success', 'bg-danger');
  document
    .getElementById('answer_2')
    .parentNode.classList.remove('bg-success', 'bg-danger');
  document
    .getElementById('answer_3')
    .parentNode.classList.remove('bg-success', 'bg-danger');
  document
    .getElementById('answer_4')
    .parentNode.classList.remove('bg-success', 'bg-danger');
}

let countCorrectAnswers = 0;

function answer(answer) {
  let editedAnswer = answer.replace('answer_', '');
  let rightNumber = quizHtml[currentQuestion]['correctAnswer'];
  let rightAnswer = 'answer_' + rightNumber;

  if (editedAnswer == quizHtml[currentQuestion]['correctAnswer']) {
    countCorrectAnswers++;
    const answerCard = document.getElementById(answer);
    answerCard.parentNode.classList.add('bg-success');
  } else {
    const answerCard = document.getElementById(answer);
    answerCard.parentNode.classList.add('bg-danger');
    document.getElementById(rightAnswer).parentNode.classList.add('bg-success');
  }
  document.getElementById('btn-next-question').disabled = false;
}
