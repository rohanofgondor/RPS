let rpsAI;
let rpsPlayer =  'Rock'; // Global Scope
    console.log('Player Choice:', `${rpsPlayer}`) // prompt('Pick one', 'Rock, Paper, Scissors') - Turned off temporarily //'Rock'; //

    // Step 2 (as per TOP)
    // This function displays/logs AIs choice
function aIChoice() {   // function scope
    // Math.random() returns a number from 0 (inclusive) up to but not including 1.
    // Multiplying by 3 gives a number from 0 up to but not including 3.
    // Adding 1 shifts that range to 1 up to but not including 11.
    // Math.floor() then rounds down, so you get an integer between 1 and 3.
    rpsAI = Math.floor(Math.random() * 3) + 1; // AI's choice) // Global Scope
    if (rpsAI === 1) {
        return console.log('AI Choice: Rock'); // 1 wins over 3 // 1 loses to 2
    }
    else if (rpsAI === 2) {
        return console.log('AI Choice: Paper'); // 2 wins over 1 // 2 loses to 3
    }
    else if (rpsAI === 3) {
        return console.log('AI Choice: Scissors'); // 3 wins over 2 // loses to 1
    }
}
aIChoice();

let scoreHelperDraw;
let scoreHelperAI;
let scoreHelperPlayer;

// This function decides and shows who wins/loses/draws + 4 = AI won 5 = Player 6 = Draw// not being used right 604 pm now but will be handy down the line, could also make into a function
// // Suggestion - could convert to switch/cases to lower down code
// // Plan is to write it as it is in if else statements, make it work, optimize it later
    if (rpsAI === 1 && playerChoice() === 3) {
          console.log('Winner: AI')
            scoreHelperAI = 4
    } else if (rpsAI === 1 && playerChoice() === 2) {
         console.log('Winner: Player')
            scoreHelperPlayer = 5
    } else if (rpsAI === 1 && playerChoice() === 1) {
         console.log('Draw')
        scoreHelperDraw = 6;
    } else if (rpsAI === 2 && playerChoice() === 1) {
          console.log('Winner: AI')
            scoreHelperAI = 4
    } else if (rpsAI === 2 && playerChoice() === 3) {
         console.log('Winner: Player')
            scoreHelperPlayer = 5
    } else if (rpsAI === 2 && playerChoice() === 2) {
         console.log('Draw')
        scoreHelperDraw = 6;
    } else if (rpsAI === 3 && playerChoice() === 2) {
          console.log('Winner: AI')
            scoreHelper = 4
    } else if (rpsAI === 3 && playerChoice() === 1) {
         console.log('Winner: Player')
            scoreHelperPlayer = 5
    } else if (rpsAI === 3 && playerChoice() === 3) {
         console.log('Draw')
        scoreHelperDraw = 6;
    }
// console.log(scoreHelper)

let aiScore = 0 ;
let playerScore = 0;

if (scoreHelperAI === 4) {
    aiScore++;
}
else if (scoreHelperPlayer === 5) {
    playerScore++;
}

console.log('AI has won',`${aiScore}`, 'times' )
console.log('Player has won',`${playerScore}`, 'times' )


    // This function converts the string data type derived from rpsPlayer to number. It helps the scoreTracker understand the input.
function playerChoice () { // function scope - // Suggestion - Could add RPS as parameters + Add cases for esc/cancel button
    if (rpsPlayer === 'Rock') {
        return (1);
    }
    else if (rpsPlayer === 'Paper') {
        return (2);
    }
    else if (rpsPlayer === 'Scissors' || rpsPlayer === 'scissors') {
        return (3);
    }
}
