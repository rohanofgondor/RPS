let rpsComputer;
let rpsPlayer =  prompt('What do you pick?') // feels like prompt should be inside but whatever we'll see first 'Rock';
let scoreDraw;
let computerScore = 0;
let playerScore = 0;

// This function displays/logs AIs choice in words (string)
function getComputerChoice() {   // function scope
        rpsComputer = Math.floor(Math.random() * 3) + 1; // AI's choice) // Global Scope
        if (rpsComputer === 1) {
            return 'Rock';
            // return computerChoice = 'Computer Choice: Rock';  playRound Param // return 'Computer Choice: Rock' // console.log('Computer Choice: Rock');
        } else if (rpsComputer === 2) {
            return 'Paper';
            // return computerChoice = 'Computer Choice: Paper'; playRound Param // return 'Computer Choice: Paper' // return console.log('Computer Choice: Paper'); // console.log('Computer Choice: Paper');
        } else if (rpsComputer === 3) {
            return 'Scissors';
            // return computerChoice = 'Computer Choice: Scissors'; // playRound Param // return 'Computer Choice: Scissors' // return console.log('Computer Choice: Scissors'); // console.log('Computer Choice: Scissors');
        }
    }
    getComputerChoice()
        // console.log(getComputerChoice())

// This function converts the string data type derived from rpsPlayer to a number. It helps decide the winner in roundWinner()
function roundHelper() { // function scope - // TODO - Could add RPS as parameters + Add cases for esc/cancel button
    if (rpsPlayer === 'Rock') {
        return (1); // playerChoice = 'Rock';
    } else if (rpsPlayer === 'Paper') {
        return (2);   // playerChoice = 'Paper';
    } else if (rpsPlayer === 'Scissors' || rpsPlayer === 'scissors') {
        return (3);  // playerChoice = 'Scissors';
    }
}
    roundHelper()
    //console.log(roundHelper())

function getPlayerChoice() { // function scope - // TODO - Could add RPS as parameters + Add cases for esc/cancel button
            return rpsPlayer;
    }
    getPlayerChoice()
        // console.log((getPlayerChoice())); // console.log('Player Choice:', `${rpsPlayer}`)

// This code decides and shows who wins/loses/draws // 4 = AI won 5 = Player 6 = Draw//
// TODO - could convert to switch/cases to lower down code. Plan is to write it as it is in if else statements, make it work, optimize it later
function roundWinner() {
        if (rpsComputer === 1 && roundHelper() === 3 || rpsComputer === 2 && roundHelper() === 1 || rpsComputer === 3 && roundHelper() === 2) {
            console.log('Round Winner: AI')
            // return aiScore = scoreAI++;
        } else if (rpsComputer === 1 && roundHelper() === 2 || rpsComputer === 2 && roundHelper() === 3 || rpsComputer === 3 && roundHelper() === 1) {
            console.log('Round Winner: Player')
            // return playerScore = scorePlayer++;
        } else if (rpsComputer === 1 && roundHelper() === 1 || rpsComputer === 2 && roundHelper() === 2 || rpsComputer === 3 && roundHelper() === 3) {
            console.log('Draw')
            scoreDraw = 6;
        }
    }
    roundWinner()

// function testfunction () {
//     if ()
// }


// console.log('AI has won',`${scoreAI}`, 'times' )
// console.log('Player has won',`${scorePlayer}`, 'times' )

// function case 1
// function test (a, b) {
//     return a * b;
// }
// // two variants for printing the returned values from a function below
// // let  testPrint = test (5, 4); // here you are storing the returned values in testPrint
// console.log(test(5,2)); // you wouldn't be storing the return values anywhere just printing
//
// // function case 2
// function multiply (a, b) {
//     return a+b;
// }
//
// let multiplySet = multiply(50,50)
// console.log(multiplySet)

function playRound (playerChoice, computerChoice) { // basically declaring new variables

    }
// im getting it, basically the above functions 'get' ones are supposed to return values TO the function playRound's
// params playerchoice aand computerchoice and process them as arguments

// functions params (variables) are local to that function however you can pass arguments into those params from global scope

// when you come back, change the return values for 'get' variables and make them return values, and take those returned
// values into  playRounds params and pass them as arguments