const random = (max) => {
  return Math.floor(Math.random() * (max - 1)) + 1;
};

const questions = [];
let failed = 0
let correct = 0
const numbers = []

function searchQuestions() {
  return axios({
    method: "GET",
    url: "https://trivia-questions.p.rapidapi.com/trivia",
    headers: {
      "X-RapidAPI-Key": "e4ee98feebmshfc58a78f99420e1p112687jsnee798134c226",
      "X-RapidAPI-Host": "trivia-questions.p.rapidapi.com",
    },
  })
    .then((response) => {
      questions.push(...response.data);
      if (questions.length > 0) {
        return questions;
      }
      console.log(questions);
      return questions;
    })
    .catch(function (error) {
      console.error(error);
    });
}

searchQuestions();

function pickRandom() {
  let question = document.getElementById("question");
  num = random(100);
  question.innerText = `${questions[num].Question}`;
  numbers.push(num)
  return num;
}

function checkAnswer() {
  n = pickRandom();
  let answer = document.getElementById("answer").value;
  let text = document.getElementById('bool')
  let correctText = document.getElementById("correct")
  let failedText = document.getElementById("failed")
  if ((answer === questions[n-1].Answer)) {
    text.innerText = "Congrats!";
    correct = correct + 1 
  } else if (answer == "") {
    text.innerText = "";
  }
  else{
    text.innerText = "Keep on working"
    
    failed = failed + 1
    alert(`It was ${questions[n].Answer}`)
  }
  correctText.innerText = `${correct}`
  failedText.innerText = `${failed}`

}
