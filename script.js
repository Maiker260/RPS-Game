
const optionsAvail = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const rounds = 3;


// Select all the Elements
let optionsBtn = document.querySelectorAll(".options_btn");


// Function to randomly select computer's choice from the Options Available in the Game.
function getComputerChoice() {
    return optionsAvail[Math.floor(Math.random() * optionsAvail.length)];
}


// Function to reset the game

let historyCounter = 0;

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    historyCounter = 0;

    document.querySelector("#score").textContent = "";
    document.querySelector("#oponent_choice").textContent = "";
    document.querySelector("#history").textContent = "";
};


// Add eventListener to the Reset Button

let resetBtn = document.querySelector("#resetBtn");

resetBtn.addEventListener("click", resetGame);


// Function to play a single round.
function playRound(playerSelection) {
    
    const computerSelection = getComputerChoice();
    
    if (historyCounter < 3) {
        if (playerSelection === computerSelection) {
            addPlayDetails(playerScore, computerScore, computerSelection, playerSelection);
        } else if (
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "paper"
        ) {
            playerScore += 1;
            addPlayDetails(playerScore, computerScore, computerSelection, playerSelection);
        } else {
            computerScore += 1;
            addPlayDetails(playerScore, computerScore, computerSelection, playerSelection);
        }
        historyCounter++;
    } else {
        determineWinner();
    }
 }
    
// Function to determine the Game Winner

function determineWinner() {
    if (playerScore > computerScore) { 
        alert("Player Wins!!");
    } else if (playerScore === computerScore) {
        alert("You Tied!");
    } else {
        alert("Computer Wins!");
    }
}

// Handle Game button click events
function handleButtonClick(event) {
    const playerSelection = event.target.dataset.choice;
    playRound(playerSelection);

 }
    
// Add Event Listeners to Game Buttons
optionsBtn.forEach((btn) => {
    btn.addEventListener("click", handleButtonClick);
})

    
// ===================================================
    
    


// Add Scores to the Score Container
function displayScores(playerScore, computerScore) {
    const scoreSection = document.querySelector("#score");
    scoreSection.textContent = "";

    const playerP = document.createElement("p");
    const computerP = document.createElement("p");

    playerP.textContent = `Player: ${playerScore} points`;
    computerP.textContent = `Computer: ${computerScore} points`;

    scoreSection.appendChild(playerP);
    scoreSection.appendChild(computerP);
}

    
    
// Add Computer's Choice to the Computer's Choice Container
function displayComputerChoice(computerSelection) {

    const computerChoiceSection = document.querySelector("#oponent_choice");
    computerChoiceSection.textContent = "";

    const computerChoiceP = document.createElement("p");
    computerChoiceP.textContent = computerSelection;

    computerChoiceSection.appendChild(computerChoiceP);
}


// Add Match Result to the History Section
function displayMatchHistory(playerSelection, computerSelection) {

    const historySection = document.querySelector("#history");

    const historyP = document.createElement("p");
    historyP.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}`;

    historySection.appendChild(historyP);
}

// Function to play all the functions
function addPlayDetails(playerScore, computerScore, computerSelection, playerSelection) {
    const playDetails = {
        playerScore: parseInt(playerScore),
        computerScore: parseInt(computerScore),
        computerSelection,
        playerSelection,
    };

    displayScores(playDetails.playerScore, playDetails.computerScore);
    displayComputerChoice(playDetails.computerSelection);
    displayMatchHistory(playDetails.playerSelection, playDetails.computerSelection);

}



