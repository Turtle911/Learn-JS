function getComputerChoice() {
	const values = ["Rock", "Paper", "Scissors"];
	const item = Math.floor(Math.random() * values.length);
	return values[item];
}

let flag = "Computer wins";
let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, ComputerSelection) {
	if (playerSelection === "scissors") {
		if (ComputerSelection === "paper") {
			flag = "User wins";
		} else if (ComputerSelection === "rock") {
			flag = "Computer wins";
		} else {
			flag = "draw";
		}
	} else if (playerSelection === "rock") {
		if (ComputerSelection === "scissors") {
			flag = "User wins";
		} else if (ComputerSelection == "paper") {
			flag = "Computer wins";
		} else {
			flag = "draw";
		}
	} else if (playerSelection === "paper") {
		if (ComputerSelection === "rock") {
			flag = "User wins";
		} else if (ComputerSelection === "scissors") {
			flag = "Computer wins";
		} else {
			flag = "draw";
		}
	}

	console.log(flag);
	if (flag === "User wins") {
		userScore++;
		return "Congrats,You  beat the computer!";
	} else if (flag === "draw") {
		return "Its a tie!";
	} else {
		computerScore++;
		return "You Lose!";
	}
}

function game() {
	if (userScore > computerScore) {
		return "User wins the game with score of " + userScore + "! The computer scored only " + computerScore;
	} else if (computerScore > userScore) {
		return "Computer wins the game with score of " + computerScore + "! The user scored only " + userScore;
	} else {
		return "Match ended with a draw!";
	}
}
console.log(game());
