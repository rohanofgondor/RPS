function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    // To get player's choice
    function getPlayerChoice(rpsPlayer) {  // TODO - Could add RPS as parameters + Add cases for esc/cancel button
        rpsPlayer = prompt('What are you gonna pick?')
        // rpsPlayer = 'papEr';
        let rpsPlayerH0 = rpsPlayer.at(0).toUpperCase();
        let rpsPlayerH1 = rpsPlayer.slice(1).toLowerCase();
        rpsPlayer = rpsPlayerH0 + rpsPlayerH1;
        return rpsPlayer;
    }

    // To get computer's choice
    function getComputerChoice(computerMath) {
        computerMath = Math.floor(Math.random() * 3) + 1;
        if (computerMath === 1) {
            return 'Rock';
        } else if (computerMath === 2) {
            return 'Paper';
        } else if (computerMath === 3) {
            return 'Scissors';
        }
    }

    // Compare P and C's choices and decide on a winner, announce the winner of the round, track the score
    function playRound(player, computer) {
        console.log(`You picked: ${player}`);
        console.log(`Computer picked: ${computer}`);

        if (computer === 'Rock' && player === 'Paper' || computer === 'Paper' && player === 'Scissors' || computer === 'Scissors' && player === 'Rock') {
            console.log('Round Winner: Player');
            alert(`You won! ${player} beats ${computer}!`)
            playerScore++;
        } else if (computer === 'Rock' && player === 'Scissors' || computer === 'Paper' && player === 'Rock' || computer === 'Scissors' && player === 'Paper') {
            console.log('Round Winner: Computer');
            alert(`Computer won! ${computer} beats ${player}!`)
            computerScore++;
        } else if (computer === 'Rock' && player === 'Rock' || computer === 'Paper' && player === 'Paper' || computer === 'Scissors' && player === 'Scissors') {
            console.log('It\'s a Draw'); //
            alert('It\'s a Draw!');
        }
    }

    // Runs 5 rounds of RPS
    function fiveRounds () {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)

        console.log(`Your Score: ${playerScore}`);
        console.log(`Computer's Score: ${computerScore}`);
        console.log('---------------------------------')
    }
        fiveRounds()
        fiveRounds()
        fiveRounds()
        fiveRounds()
        fiveRounds()
}
playGame()