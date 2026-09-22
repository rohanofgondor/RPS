let rpsComputer;
let rpsPlayer =  'Rock'; // Global Scope
let scoreDraw;
let scoreAI = 0;
let scorePlayer = 0;
    // Step 2 (as per TOP)
    // This function displays/logs AIs choice
function playRound () {
    function getComputerChoice() {   // function scope
                            // Math.random() returns a number from 0 (inclusive) up to but not including 1.
                            // Multiplying by 3 gives a number from 0 up to but not including 3.
                            // Adding 1 shifts that range to 1 up to but not including 11.
                            // Math.floor() then rounds down, so you get an integer between 1 and 3.
        rpsComputer = Math.floor(Math.random() * 3) + 1; // AI's choice) // Global Scope
        if (rpsComputer === 1) {
            return console.log('Computer Choice: Rock'); // 1 wins over 3 // 1 loses to 2
        } else if (rpsComputer === 2) {
            return console.log('Computer Choice: Paper'); // 2 wins over 1 // 2 loses to 3
        } else if (rpsComputer === 3) {
            return console.log('Computer Choice: Scissors'); // 3 wins over 2 // loses to 1
        }
    }
    getComputerChoice();

// This function converts the string data type derived from rpsPlayer to a number. It helps decide the winner.
    function getPlayerChoice() { // function scope - // TODO - Could add RPS as parameters + Add cases for esc/cancel button
        if (rpsPlayer === 'Rock') {
            return (1);
        } else if (rpsPlayer === 'Paper') {
            return (2);
        } else if (rpsPlayer === 'Scissors' || rpsPlayer === 'scissors') {
            return (3);
        }
    }
    getPlayerChoice()
    console.log('Player Choice:', `${rpsPlayer}`) // prompt('Pick one', 'Rock, Paper, Scissors') - Turned off temporarily //'Rock'; //
// This code decides and shows who wins/loses/draws // 4 = AI won 5 = Player 6 = Draw//
// TODO - could convert to switch/cases to lower down code. Plan is to write it as it is in if else statements, make it work, optimize it later
    function roundWinner() {
        if (rpsComputer === 1 && getPlayerChoice() === 3 || rpsComputer === 2 && getPlayerChoice() === 1 || rpsComputer === 3 && getPlayerChoice() === 2) {
            console.log('Winner: AI')
            scoreAI++;
        } else if (rpsComputer === 1 && getPlayerChoice() === 2 || rpsComputer === 2 && getPlayerChoice() === 3 || rpsComputer === 3 && getPlayerChoice() === 1) {
            console.log('Winner: Player')
            scorePlayer++;
        } else if (rpsComputer === 1 && getPlayerChoice() === 1 || rpsComputer === 2 && getPlayerChoice() === 2 || rpsComputer === 3 && getPlayerChoice() === 3) {
            console.log('Draw')
            scoreDraw = 6;
        }
    }
    roundWinner()
}
playRound()

// console.log(scoreAI)
// console.log(scorePlayer)

// console.log('AI has won',`${scoreAI}`, 'times' )
// console.log('Player has won',`${scorePlayer}`, 'times' )