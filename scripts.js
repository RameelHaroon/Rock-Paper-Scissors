let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const resetbtn = document.querySelector("#reset-btn");

rockBtn.addEventListener("click", () => {
    const playerSelection = rockBtn.getAttribute('data-choice');
    playRound(playerSelection, getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    const playerSelection = paperBtn.getAttribute('data-choice');
    playRound(playerSelection, getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    const playerSelection = scissorsBtn.getAttribute('data-choice');
    playRound(playerSelection, getComputerChoice());
});


// Reset game
resetbtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    document.querySelector(".human-score").textContent = humanScore;
    document.querySelector(".computer-score").textContent = computerScore;
    document.querySelector("#result-bar").textContent = "NEW GAME STARTED!";
    resetbtn.style.display = "none";

    // Unhide game buttons
    rockBtn.style.display = "inline-block";
    paperBtn.style.display = "inline-block";
    scissorsBtn.style.display = "inline-block";
});

function playRound(humanSelection, computerSelection){
    humanSelection = humanSelection.toLowerCase();
    const resultBar = document.querySelector("#result-bar");
    let hasPlayerWon = false;

    if(humanSelection === computerSelection){
        resultBar.textContent = "DRAW";
        return;
    }

    // Check if human won the round or not
    if((humanSelection === "rock" && computerSelection === "scissors") 
        || (humanSelection === "paper" && computerSelection === "rock") 
        || (humanSelection === "scissors" && computerSelection === "paper")){
        hasPlayerWon = true;
    }

    if(hasPlayerWon){
        humanScore += 10;
        document.querySelector(".human-score").textContent = humanScore;
        resultBar.textContent = "PLAYER WON THE ROUND";
    }else{
        computerScore += 10;
        document.querySelector(".computer-score").textContent = computerScore;
        resultBar.textContent = "COMPUTER WON THE ROUND";
    }

    let hideBtns = 0;

    // Check for game end
    if(humanScore === 50){
        resultBar.textContent = "🎉 CONGRATULATIONS! YOU WON!";
        document.querySelector("#reset-btn").style.display = "inline-block";
        hideBtns = 1;
    }

    if(computerScore === 50){
        resultBar.textContent = "😢 YOU LOST! TRY AGAIN.";
        document.querySelector("#reset-btn").style.display = "inline-block";
        hideBtns = 1;
    }

    if(hideBtns){
        rockBtn.style.display = "none";
        paperBtn.style.display = "none";
        scissorsBtn.style.display = "none";
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

