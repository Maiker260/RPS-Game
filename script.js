
const optionsAvail = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const rounds = 5;

// Function to randomly select computer's choice from the Options Available in the Game.
function getComputerChoice() {
    return optionsAvail[Math.floor(Math.random() * optionsAvail.length)];
}

// Function to play a single round.
function playRound() {

    const playerSelect = prompt("Type your option:");

    // Check if the user clicked Cancel or entered an empty value before converting the input to lowerCase.
    if (playerSelect === null || playerSelect === "") {
        console.log("No option provided or it was canceled");
        return; // Exit the function if canceled.
    };

    const playerSelection = playerSelect.toLowerCase().trim();
    const computerSelection = getComputerChoice();

    if (!optionsAvail.includes(playerSelection)) {
        console.log("Invalid Option");
    } else if (playerSelection === computerSelection) {
        console.log("You tied");
    
    } else if (
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
        playerScore += 1;
        console.log("You Win!!");
    } else {
        computerScore += 1;
        console.log(`You Lose, ${computerSelection} beats ${playerSelection}`);
    }
}

// Function to print the final game results
function printGameResults() {
    if (playerScore > computerScore) {
        console.log(`Player Wins with ${playerScore} points!!!`);
    } else {
        console.log(`Computer Wins with ${computerScore} points!!!`);
    }
}

// Loop to play the specified number of rounds.
for (let i = 0; i < rounds; i++) {
    playRound();
}
// Print the final game results.
printGameResults();