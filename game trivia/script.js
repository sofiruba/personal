const random = (max) => {
  return Math.floor(Math.random() * (max - 1)) + 1;
};

const questions = [];

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
  return num;
}

function checkAnswer() {
  n = pickRandom();
  let answer = document.getElementById("answer").value;
  let text = document.getElementById('bool')
  if ((answer = questions[n].Answer)) {
    text.innerText = "Correcto";
  } else {
    text.innerText = "Incorrecto";
  }

}
