const getUserChoice = userInput => {
   var user = userInput.; // created a variable to use the toLowerCase()
    if (user === 'rock') {
        return user
    } else if (user === 'paper') {
    return user
    } else if (user === 'scissors') {
        return user
    } else { console.log (`error`);
    }
} 
// console.log(getUserChoice("Scissors"))

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber === 1) {
        return 'paper'
    } else if (randomNumber === 2) {
        return 'scissors'
    }
}

// console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
    
    if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'you lost'
    } else if (userChoice === 'paper' && computerChoice === 'paper') {
        return "tie"
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return "you won"
    } else if (userChoice === 'rock' && computerChoice === 'rock') {
        return 'tie'
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return "you won"
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return "you lost"
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'you won'
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return "you lost"
    } else if (userChoice === 'scissors' && computerChoice === 'scissors') {
        return "tie"
    }
}

// console.log(determineWinner('rock', 'paper'));


function playGame() {
    userChoice = getUserChoice("Paper");

    console.log(userChoice);

    computerChoice = getComputerChoice();

    console.log(computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
    }


playGame();
