let rpsAI = Math.floor(Math.random() * 3) + 1; // AI's choice)
let rpsPlayer = 'Scissors';
    // prompt('Pick one', 'Rock, Paper, Scissors')
    console.log('Player Choice:', `${rpsPlayer}`)

// Step 2 (as per TOP)
function aIChoice() {
    // Math.random() returns a number from 0 (inclusive) up to but not including 1.
    // Multiplying by 3 gives a number from 0 up to but not including 3.
    // Adding 1 shifts that range to 1 up to but not including 11.
    // Math.floor() then rounds down, so you get an integer between 1 and 3.
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

let scoreTrackerAI; // not being used right 604 pm now but will be handy down the line, could also make into a function
                    // Suggestion - could convert to switch/cases to lower down code
                    // Plan is to write it as it is in if else statements, make it work, optimize it later
    if (rpsAI === 1 && playerChoice() === 3) {
        console.log('AI Wins')
    }
    else if (rpsAI === 1 && playerChoice() === 2) {
        console.log('AI Lose')
    }
    else if (rpsAI === 1 && playerChoice() === 1) {
        console.log('Draw')
    }
    else if (rpsAI === 2 && playerChoice() === 1) {
        console.log('AI Wins')
    }
    else if (rpsAI === 2 && playerChoice() === 3) {
        console.log('AI Lose')
    }
    else if (rpsAI === 2 && playerChoice() === 2) {
        console.log('Draw')
    }
    else if (rpsAI === 3 && playerChoice() === 2) {
        console.log('AI Wins')
    }
    else if (rpsAI === 3 && playerChoice() === 1) {
        console.log('AI Loses')
    }
    else if (rpsAI === 3 && playerChoice() === 3) {
        console.log('Draw')
    }

function playerChoice () { // Suggestion - Could add RPS as parameters + Add cases for esc/cancel button
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

let scoreTrackerPlayer = rpsPlayer;
// console.log(scoreTrackerPlayer)




// Let's write logic for this:
// RPS Outcomes:
// Rock beats Scissors && Loses against Paper. (1 beats 3 / 1 loses to 2)
// Paper beats Rock && Loses against Scissors. ( 2 beats 1 / 2 loses to 3)
// Scissors beat Paper && Loses against Rock. ( 3 beats 2 / 3 loses to 1)
// Draw = Rock v Rock = D, Paper vs Paper = D, Scissors vs Scissors = D
// ** In total each choice has three variations W L D**

// console.log(scoreTrackerAI)

// Variable declarations list
    // rpsAI = Runs the logic/algo, logs AI choice
    // aIChoice = Supports and Acts upon rpsAI's logic
    // scoreTrackerAI = Tracks AI's W/L score

    // rpsPlayer = Prompts player for choice
    // playerChoice = Converts String choices into numbers to support below variable.
    // scoreTrackerPlayer = Tracks Players score

    //

// could make it so that if else statements sends in two values one is string and one is number, with number we can proceed further

// Step 4**
//  Step 4: Declare the players score variables
//  Your game will keep track of the players score. You will write variables to keep track of the players score.
//  Create two new variables named humanScore and computerScore in the global scope.
//  Initialize those variables with the value of 0.

// Create the player's function properly first, i.e If a player enters Rock assign it to number integers data type 1, Paper 2 and Scissors 3
// Then pull that number and AIs number into the tracker functions and use for loop to increment the scores

// IMP - Each 1 has 2 oppos - Either beat one || lose to one (In total there are 3 choices here)

// Two players - Can only pick one option at a time R/P/S
// if (rpsAI && rpsPlayer

// Need to keep the track of their wins.. but how.. When AI = Rock and Player = Scissor = AI W = give one point
// Increment score by 1 -> When AI = Paper and Player = Rock = AI = 1 (for AI = 0; AI > Player; AI++

// I think I should be associating the score as paper beats rock.. to be written more




