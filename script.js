//Button selectors
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

//Score
const score = document.querySelector(".score");
const uScore = document.createElement("div");
const cScore = document.createElement("div");

//FinalScore
const endWinners = document.createElement("div");
const endScore = document.querySelector(".endScore");

//Winner declarations
const roundWinner = document.createElement("div");
const finalWinner = document.createElement("div");

//Refresh
const refreshContainer = document.createElement("div");
const refresh = document.createElement("button");

//Get random computer choice
function getComputerChoice() {
	const values = [rock, paper, scissor];
	const item = Math.floor(Math.random() * values.length);
	return values[item];
}

//Score counters
let userScore = 0;
let computerScore = 0;

//Update Scores
uScore.innerText = " The user score is : " + userScore;
cScore.innerText = " The computer score is : " + computerScore;
score.appendChild(uScore);
score.appendChild(cScore);
let flag = false;

endScore.appendChild(endWinners);

//Check if game is done
checkScore = () => {
	if (userScore >= 5 && computerScore < userScore) {
		flag = true;
		finalWinner.innerText = " The final winner is user!";
		endWinners.appendChild(finalWinner);

		return;
	} else if (computerScore >= 5 && userScore < computerScore) {
		flag = true;
		finalWinner.innerText = "The final winner is computer!";
		endWinners.appendChild(finalWinner);

		return;
	} else {
		return;
	}
};

//Actual function for play
playRound = (playerSelection, ComputerSelection) => {
	//Inital check for game-end conditions
	checkScore();
	//If game end -- add reset button
	if (flag === true) {
		document.body.appendChild(refreshContainer);
		refreshContainer.style.cssText += "display:flex; justify-content:center";
		refresh.innerText = "Click me to reload";
		refresh.addEventListener("click", () => location.reload());
		refreshContainer.appendChild(refresh);
		return;
	}
	//Player and Computer rounds
	if (playerSelection === scissor) {
		if (ComputerSelection === paper) {
			userScore++;
			roundWinner.innerText = "The round winner is user!";
			endWinners.appendChild(roundWinner);
			uScore.innerText = " The user score is : " + userScore;
		} else if (ComputerSelection === rock) {
			computerScore++;
			roundWinner.innerText = "The round winner is computer!";
			endWinners.appendChild(roundWinner);
			cScore.innerText = " The computer score is : " + computerScore;
		} else {
			endWinners.appendChild(roundWinner);
			roundWinner.innerText = "This round is a draw!";
		}
	} else if (playerSelection === rock) {
		if (ComputerSelection === scissor) {
			userScore++;
			roundWinner.innerText = "The round winner is user!";
			endWinners.appendChild(roundWinner);
			uScore.innerText = " The user score is : " + userScore;
		} else if (ComputerSelection == paper) {
			computerScore++;
			roundWinner.innerText = "The round winner is computer!";
			endWinners.appendChild(roundWinner);
			cScore.innerText = " The computer score is : " + computerScore;
		} else {
			endWinners.appendChild(roundWinner);
			roundWinner.innerText = "This round is a draw!";
		}
	} else if (playerSelection === paper) {
		if (ComputerSelection === rock) {
			userScore++;
			roundWinner.innerText = "The round winner is user!";
			endWinners.appendChild(roundWinner);
			uScore.innerText = " The user score is : " + userScore;
		} else if (ComputerSelection === scissor) {
			computerScore++;
			roundWinner.innerText = "The round winner is computer!";
			endWinners.appendChild(roundWinner);
			cScore.innerText = " The computer score is : " + computerScore;
		} else {
			endWinners.appendChild(roundWinner);
			roundWinner.innerText = "This round is a draw!";
		}
	}
};

//Eventlisteners for button to perform a move
rock.addEventListener("click", () => playRound(rock, getComputerChoice()));
scissor.addEventListener("click", () => playRound(scissor, getComputerChoice()));
paper.addEventListener("click", () => playRound(paper, getComputerChoice()));
