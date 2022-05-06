const userChoice = userInput => {
    userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        console.log("insert a valid choice");
    }
}


const computerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "rock"
            break;
        case 1: 
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
    }
}


const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "it's a tie!"
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "you won!";
        } else {
            return "computer won";
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "you won!";
        } else {
            return "computer won";
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            return "you won!";            
        } else {
            return "computer won";
        }
    }
}

const playGame = () => {
    let userThrew = userChoice("rock");
    console.log(`You chose ${userThrew}`);

    let computerThrew = computerChoice();
    console.log(`Computer chose ${computerThrew}`);

    console.log(determineWinner(userThrew, computerThrew));
}

playGame();