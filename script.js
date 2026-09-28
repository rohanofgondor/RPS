// let scoreDraw;
let playerScore = 0;
let computerScore = 0;
function getPlayerChoice(rpsPlayer) {  // TODO - Could add RPS as parameters + Add cases for esc/cancel button
        rpsPlayer = prompt('What are you gonna pick?');
        return rpsPlayer;
}

function getComputerChoice(computerMath) {   // This function displays/logs AIs choice in words (string)
        computerMath = Math.floor(Math.random() * 3) + 1;
        if (computerMath === 1) {
            return 'Rock';
        } else if (computerMath === 2) {
            return 'Paper';
        } else if (computerMath === 3) {
            return 'Scissors';
        }
    }

function playRound (player, computer) {
        console.log(`You picked: ${player}`);
        console.log(`Computer picked: ${computer}`);
        if (computer === 'Rock' && player === 'Paper' || computer === 'Paper' && player === 'Scissors' || computer === 'Scissors' && player === 'Rock') {
            console.log('Round Winner: Player');
                playerScore++;
        }
        else if (computer === 'Rock' && player === 'Scissors' || computer === 'Paper' && player === 'Rock' || computer === 'Scissors' && player === 'Paper') {
            console.log('Round Winner: AI');
                computerScore++;
        }
        else if (computer === 'Rock' && player === 'Rock' || computer === 'Paper' && player === 'Paper' || computer === 'Scissors' && player === 'Scissors') {
            console.log('Draw, Nobody won.'); //
        }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection)

console.log(`Your Score: ${playerScore}`);
console.log(`Computer's Score: ${computerScore}`);
