let total = 0;
class Question  {
    constructor(question, answersArray, correctAnswer){
        this.question = question;
        this.answersArray = answersArray;
        this.correctAnswer = correctAnswer;
    }

    askQuestion() {
        alert(this.question);
        var answer = prompt(this.answersArray);
        if (answer === this.correctAnswer) {
            total += 1;
        }
    }

    totalScore() {
        alert(`Your score was a ${total}/5`);
    }
}


let earthColors = ['Green', 'Blue', 'Orange', 'Yellow', 'Purple']
let earth = new Question('What color is the Earths sky?', earthColors, 'Blue');

let sunColors = ['Purple', 'Lavendar', 'Black', 'Yellow', 'Grey'];
let sun = new Question('What color is the sun?', sunColors, 'Yellow');

let oceanColors = ['Blue', 'Fuscia', 'Orange', 'White', 'Red'];
let ocean = new Question('What color is the Ocean?', oceanColors, 'Blue');

let grassColors = ['Blue', 'Green', 'Orange', 'White', 'Red'];
let grass = new Question('What color is the grass?', grassColors, 'Green');

let woodColors = ['Blue', 'Fuscia', 'Orange', 'Brown', 'Red'];
let wood = new Question('What color is the wood?', woodColors, 'Brown');

function testSequence() {
    earth.askQuestion();
    ocean.askQuestion();
    grass.askQuestion();
    wood.askQuestion();
    sun.askQuestion();
    sun.totalScore();
}

testSequence();