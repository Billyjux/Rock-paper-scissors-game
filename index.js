const computerChoiceDisplay = document.querySelectorAll('img')[0];
const userChoiceDisplay = document.querySelectorAll('img')[1];
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    if (userChoice === 'rock') {
        userChoiceDisplay.setAttribute('src' , './image/img1.PNG');
    }   
    if (userChoice === 'paper') {
        userChoiceDisplay.setAttribute('src' , './image/img2.PNG');
    }
    if (userChoice === 'scissors') {
        userChoiceDisplay.setAttribute('src' , './image/img3.PNG');
    }
    generateComputerChoice();
    getResult();
    document.querySelector('.title').innerHTML = 'Result : '
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*(possibleChoices.length - 1)) + 1;

    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.setAttribute('src' , './image/img'+randomNumber+'.PNG');
}
     
function getResult(){
    if (computerChoice === userChoice) {
        result = " It's a draw!";
        var snd = new Audio('./sound/mixkit-fairy-spell-swish-1497.wav') 
        snd.play()
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win!';
        var snd = new Audio('./sound/mixkit-males-yes-victory-2012.wav') 
        snd.play()
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You Lose!';
        var snd = new Audio('./sound/mixkit-retro-arcade-lose-2027.wav') 
        snd.play()
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Win!';
        var snd = new Audio('./sound/mixkit-males-yes-victory-2012.wav') 
        snd.play()
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lose!';
        var snd = new Audio('./sound/mixkit-retro-arcade-lose-2027.wav') 
        snd.play()
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Win!';
        var snd = new Audio('./sound/mixkit-males-yes-victory-2012.wav') 
        snd.play()
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Lose!';
        var snd = new Audio('./sound/mixkit-retro-arcade-lose-2027.wav') 
        snd.play()
    }
    resultDisplay.innerHTML = result;
}
