
let optionsAvail = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return optionsAvail[Math.floor(Math.random() * optionsAvail.length)];
}

playerSelection = "";

function playGame(playerSelection, computerSelection) {

    playerSelection = prompt("Type your Option: ");
    computerSelection = getComputerChoice();

    if (!optionsAvail.includes(playerSelection)) {
        return alert("Invalid Option");
    } else if (playerSelection === computerSelection) {
        return alert("You tied");
    } else if (
        playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "scissors" && computerSelection === "paper"
    ) {
        return alert("You Win!!");
    } else {
        return alert(`You Lose, ${computerSelection} beats ${playerSelection}`);
    }
}

console.log(getComputerChoice());

playGame();