const random = (max) => { return Math.floor(Math.random() * (max - 1)) + 1; }

let questions = []


function searchQuestions(){ 

    axios({
        method: 'GET',
        url: 'https://trivia-questions.p.rapidapi.com/trivia',
        headers: {
            'X-RapidAPI-Key': 'e4ee98feebmshfc58a78f99420e1p112687jsnee798134c226',
            'X-RapidAPI-Host': 'trivia-questions.p.rapidapi.com'
        }
    }).then(response => {
        questions.push(response.data)

    }).catch(function (error) {
        console.error(error)
    })

}

function pickRandom() {
    searchQuestions()
    console.log(questions)
    let question = document.getElementById('question')
    num = random(100)
    question.innerText = `${questions[num]}`
   

}
/*
function checkAnswer() {
    question = document.getElementById('question');
    answer = document.getElementById('answer')
    let i = questions.indexOf(Question = question)
    if (answer = questions[i].Answer) {
        alert('correcto!')
    }
    else {
        alert('incorrecto')
    }

}*/
