let rpsAI = Math.floor(Math.random() * 3) + 1; // AI's choice
let rpsPlayer = prompt('Pick one', 'Rock, Paper, Scissors')
    console.log('Player =', `${rpsPlayer}`)

let scoreTrackerAI = rpsAI;
    // if (scoreTrackerAI === 1 && scoreTrackerPlayer === 3 ) {
    //  for (scoreTrackerAI === 0;  scoreTrackerAI++
    //      console.log ('
    // }
    // console.log(scoreTrackerAI)

let scoreTrackerPlayer = rpsPlayer;
    // console.log(scoreTrackerPlayer)

// Step 2 (as per TOP)
function aIChoice() {
    // Math.random() returns a number from 0 (inclusive) up to but not including 1.
    // Multiplying by 3 gives a number from 0 up to but not including 3.
    // Adding 1 shifts that range to 1 up to but not including 11.
    // Math.floor() then rounds down, so you get an integer between 1 and 3.
    if (rpsAI === 1) {
        return console.log('Rock'); // 1 wins over 3 // 1 loses to 2
    }
    else if (rpsAI === 2) {
        return console.log('Paper'); // 2 wins over 1 // 2 loses to 3
    }
    else if (rpsAI === 3) {
        return console.log('Scissors'); // 3 wins over 2 // loses to 1
    }
}
aIChoice();

function playerChoice () { // Suggestion - Could add RPS as parameters + Add cases for esc/cancel button
    if (rpsPlayer === 'Rock') {
        return console.log(1);
    }
    else if (rpsPlayer === 'Paper') {
        return console.log(2);
    }
    else if (rpsPlayer === 'Scissors' || rpsPlayer === 'scissors') {
        return console.log(3);
    }
}
playerChoice ()

function aiScore() {
}
aiScore();


// Variable declarations list
    // rpsAI = Runs the logic/algo, logs AI choice
    // aIChoice = Supports and Acts upon rpsAI's logic
    // scoreTrackerAI = Tracks AI's W/L score


    // rpsPlayer = Prompts player for choice
    // playerChoice =
    // scoreTrackerPlayer = Tracks Players score

    //

// could make it so that if else statements sends in two values one is string and one is number, with number we can proceed further


// Step 3 (as per TOP)
// function  getHumanChoice () {
//     return (console.log(rpsPlayer));
// }
// getHumanChoice()

// Step 4
//  Step 4: Declare the players score variables
//  Your game will keep track of the players score. You will write variables to keep track of the players score.
//  Create two new variables named humanScore and computerScore in the global scope.
//  Initialize those variables with the value of 0.

// Let's write logic for this:
// RPS Outcomes:
// Rock beats Scissors && Loses against Paper.
// Paper beats Rock && Loses against Scissors.
// Scissors beat Paper && Loses against Rock
// Draw = Rock v Rock = D, Paper vs Paper = D, Scissors vs Scissors = D


// Create the player's function properly first, i.e If a player enters Rock assign it to number integers data type 1, Paper 2 and Scissors 3
// Then pull that number and AIs number into the tracker functions and use for loop to increment the scores

// IMP - Each 1 has 2 oppos - Either beat one || lose to one (In total there are 3 choices here)

// Two players - Can only pick one option at a time R/P/S
// if (rpsAI && rpsPlayer

// Need to keep the track of their wins.. but how.. When AI = Rock and Player = Scissor = AI W = give one point
// Increment score by 1 -> When AI = Paper and Player = Rock = AI = 1 (for AI = 0; AI > Player; AI++

// I think I should be associating the score as paper beats rock.. to be written more




