let humanScore = 0;
let computerScore = 0;

playGame();

function playGame(){

    let humanSelection;
    let computerSelection;

    for(let i = 0; i < 5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Human Score:" + humanScore);
    console.log("Computer Score:" + computerScore);

    if(humanScore > computerScore){
        console.log("Human WON!");
    }else if(humanScore < computerScore){
        console.log("Computer WON!");
    }else{
        console.log("Game Drawn");
    }
}

function playRound(humanSelection, computerSelection){
    humanSelection = humanSelection.toLowerCase();
    let hasPlayerWon = false;

    if(humanSelection === computerSelection){
        console.log("Draw");
        return;
    }

    if((humanSelection === "rock" && computerSelection === "scissors") 
        || (humanSelection === "paper" && computerSelection === "rock") 
        || (humanSelection === "scissors" && computerSelection === "paper")){
        hasPlayerWon = true;
    }

    if(hasPlayerWon){
        humanScore += 10;
        console.log("Player has won the round");
    }else{
        computerScore += 10;
        console.log("Computer has won the round");
    }
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

