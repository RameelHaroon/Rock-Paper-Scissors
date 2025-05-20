let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection){
    humanSelection = humanSelection.toLowerCase();
}

function getComputerChoice(){

    let result = Math.floor(Math.random() * (4 - 1) + 1);
    let compChoice;
    switch (result){
        case 1:
            compChoice = "rock";
            break;
        case 2:
            compChoice = "paper";
            break;
        case 3:
            compChoice = "scissors";
            break;
    }
    return compChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice");
    return humanChoice;
}

playRound(humanSelection, computerSelection);