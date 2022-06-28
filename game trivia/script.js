
const random = (max) =>{ return Math.floor(Math.random() * (max - 1)) + 1; }

question = document.getElementById('questions');

function pickRandom(){

    axios({
        method: 'GET',
        url: 'https://trivia-questions.p.rapidapi.com/trivia',
        headers: {
            'X-RapidAPI-Key': 'e4ee98feebmshfc58a78f99420e1p112687jsnee798134c226',
            'X-RapidAPI-Host': 'trivia-questions.p.rapidapi.com'
        }
    }).then(response => {
        console.log(response)
        num = random(100)
        
        question.innerText = `${response.data[num].Question}`
        answer = document.createElement("input")
        answer.type = "text"
        answer.id = "answer"

    }).catch(function (error) {
        console.error(error);
    });
}

