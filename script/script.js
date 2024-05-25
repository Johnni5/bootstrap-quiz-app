let currentQuestion = 19;
let countCorrectAnswers = 0;

let AUDIO_SUCCESS = new Audio();
AUDIO_SUCCESS.src = "./audio/correct.mp3";

let AUDIO_FAIL = new Audio();
AUDIO_FAIL.src = "./audio/wrong.mp3";

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


function answer(answer) {
  let editedAnswer = answer.replace('answer_', '');
  let rightNumber = quizHtml[currentQuestion]['correctAnswer'];
  let rightAnswer = 'answer_' + rightNumber;

  if (editedAnswer == quizHtml[currentQuestion]['correctAnswer']) {
    AUDIO_SUCCESS.play();
    countCorrectAnswers++;
    const answerCard = document.getElementById(answer);
    answerCard.parentNode.classList.add('bg-success');
  } else {
    AUDIO_FAIL.play();
    const answerCard = document.getElementById(answer);
    answerCard.parentNode.classList.add('bg-danger');
    document.getElementById(rightAnswer).parentNode.classList.add('bg-success');
  }
  document.getElementById('btn-next-question').disabled = false;
}

function nextQuestion() {
  document.getElementById('btn-next-question').disabled = true;

  delChoices();

  currentQuestion++; 

  if (currentQuestion >= quizHtml.length) {
    document.getElementById('quiz-ende').classList.remove('d-none');
    document.getElementById('quiz-start').classList.add('d-none');
    document.getElementById('logo').classList.add('d-none');
    document.getElementById('score').innerHTML = countCorrectAnswers;
    document.getElementById('q-length').innerHTML = quizHtml.length;
    //document.getElementById('progress-bar').style = '100%;';
    //document.getElementById('progress-bar').innerHTML = '100%';
  } else {
    let percentQuestion = (currentQuestion+1) / quizHtml.length;
    percentQuestion = Math.round(percentQuestion*100);  
    document.getElementById('progress-bar').style.width=percentQuestion + '%';
    document.getElementById('progress-bar').innerHTML = percentQuestion + '%';
    render();
    showQuestion();
  }
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

function restartGame() {
  document.getElementById('quiz-ende').classList.add('d-none');
  document.getElementById('quiz-start').classList.remove('d-none');
  document.getElementById('logo').classList.remove('d-none');
  
  resetGame();
  render();

}

function resetGame() {
  currentQuestion = 0;
  countCorrectAnswers = 0;
  document.getElementById('progress-bar').style = '0%;';
  document.getElementById('progress-bar').innerHTML = '0%';
}