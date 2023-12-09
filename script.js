
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

// Function to play a single round.
function playRound(playerSelection) {
    
    const computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        console.log("You Tied");
        addPlayDetails(playerScore, computerScore, computerSelection, playerSelection);
    } else if (
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper"
        ) {
            playerScore += 1;
            console.log("You Win!!");
            addPlayDetails(playerScore, computerScore, computerSelection, playerSelection);
        } else {
            computerScore += 1;
            console.log(`You Lose, ${computerSelection} beats ${playerSelection}`);
            addPlayDetails(playerScore, computerScore, computerSelection, playerSelection);
        }
    }
    
// Handle button click events
function handleButtonClick(event) {
    const playerSelection = event.target.textContent.toLowerCase();
    playRound(playerSelection);
 }
    
// Add Event Listeners to Buttons
optionsBtn.forEach((btn) => {
    btn.addEventListener("click", handleButtonClick);
})

    
// ===================================================
    
    


// Add Scores to the Score Container
function addScores(playerScore, computerScore) {
        
    const scoreSection = document.querySelector("#score");
        
    const playerP = document.createElement("p");
    const computerP = document.createElement("p");
        
    playerP.textContent = `Player: ${playerScore} points`;
    computerP.textContent = `Computer: ${computerScore} points`;
        
    scoreSection.appendChild(playerP);
    scoreSection.appendChild(computerP);
}
    
    
// Add Oponent's Choice to the Oponent's Choice Container
function addOponentChoice(computerSelection) {
    
    const oponentChoiceSection = document.querySelector("#oponent_choice");

    const oponentChoiceP = document.createElement("p");
    oponentChoiceP.textContent = computerSelection;

    oponentChoiceSection.appendChild(oponentChoiceP);
}


// Add Match Result to the History Section
function addMatchHistory(playerSelection, computerSelection) {

    const historySection = document.querySelector("#history");

    const historyP = document.createElement("p");
    historyP.textContent = `Player: ${playerSelection} Computer: ${computerSelection}`;

    historySection.appendChild(historyP);
}

// Function to play all the functions
function addPlayDetails(playerScore, computerScore, computerSelection, playerSelection) {
        addScores(playerScore, computerScore);
        addOponentChoice(computerSelection);
        addMatchHistory(playerSelection, computerSelection);
}


// // Function to change the border color of the choices
// function changeBorderChoice() {

//     const gameOptionsSection = document.querySelectorAll(".game_options");

//     gameOptionsSection.forEach((optSect) => {

//         const borderOptionChange = optSect.target.id;
    

//         // Modify the border color depending in each participant's choice 

//         borderOptionChange.style.borderStyle = "3px solid red";
//         borderOptionChange.style.borderStyle = "3px solid green";


//     })
// }