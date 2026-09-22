let rpsAI;
let rpsPlayer =  'Rock'; // Global Scope
let scoreDraw;
let scoreAI = 0;
let scorePlayer = 0;
    // Step 2 (as per TOP)
    // This function displays/logs AIs choice
function playRound () {
    function aIChoice() {   // function scope
                            // Math.random() returns a number from 0 (inclusive) up to but not including 1.
                            // Multiplying by 3 gives a number from 0 up to but not including 3.
                            // Adding 1 shifts that range to 1 up to but not including 11.
                            // Math.floor() then rounds down, so you get an integer between 1 and 3.
        rpsAI = Math.floor(Math.random() * 3) + 1; // AI's choice) // Global Scope
        if (rpsAI === 1) {
            return console.log('AI Choice: Rock'); // 1 wins over 3 // 1 loses to 2
        } else if (rpsAI === 2) {
            return console.log('AI Choice: Paper'); // 2 wins over 1 // 2 loses to 3
        } else if (rpsAI === 3) {
            return console.log('AI Choice: Scissors'); // 3 wins over 2 // loses to 1
        }
    }
    aIChoice();

// This function converts the string data type derived from rpsPlayer to a number. It helps decide the winner.
    function playerChoice() { // function scope - // TODO - Could add RPS as parameters + Add cases for esc/cancel button
        if (rpsPlayer === 'Rock') {
            return (1);
        } else if (rpsPlayer === 'Paper') {
            return (2);
        } else if (rpsPlayer === 'Scissors' || rpsPlayer === 'scissors') {
            return (3);
        }
    }
    playerChoice()
    console.log('Player Choice:', `${rpsPlayer}`) // prompt('Pick one', 'Rock, Paper, Scissors') - Turned off temporarily //'Rock'; //
// This code decides and shows who wins/loses/draws // 4 = AI won 5 = Player 6 = Draw//
// TODO - could convert to switch/cases to lower down code. Plan is to write it as it is in if else statements, make it work, optimize it later
    function roundWinner() {
        if (rpsAI === 1 && playerChoice() === 3 || rpsAI === 2 && playerChoice() === 1 || rpsAI === 3 && playerChoice() === 2) {
            console.log('Winner: AI')
            scoreAI++;
        } else if (rpsAI === 1 && playerChoice() === 2 || rpsAI === 2 && playerChoice() === 3 || rpsAI === 3 && playerChoice() === 1) {
            console.log('Winner: Player')
            scorePlayer++;
        } else if (rpsAI === 1 && playerChoice() === 1 || rpsAI === 2 && playerChoice() === 2 || rpsAI === 3 && playerChoice() === 3) {
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