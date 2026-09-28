// let scoreDraw;
// let computerScore = 0;
// let playerScore = 0;
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
        console.log(`Player picked: ${player}`);
        console.log(`AI picked: ${computer}`);
        if (computer === 'Rock' && player === 'Paper' || computer === 'Paper' && player === 'Scissors' || computer === 'Scissors' && player === 'Rock') {
            console.log('Round Winner: Player');
        }
        else if (computer === 'Rock' && player === 'Scissors' || computer === 'Paper' && player === 'Rock' || computer === 'Scissors' && player === 'Paper') {
            console.log('Round Winner: AI');
        }
        else if (computer === 'Rock' && player === 'Rock' || computer === 'Paper' && player === 'Paper' || computer === 'Scissors' && player === 'Scissors') {
            console.log('Draw, Nobody won.'); //
        }

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection)

// console.log(`Player Choice: ${playerSelection}`)

// let roundDecision = playRound();
// console.log(roundDecision)

// function playerHelper() { // This function converts the string data type derived from rpsPlayer to a number. It helps decide the winner in roundWinner() // TODO - Could add RPS as parameters + Add cases for esc/cancel button
//     if (playerChoiceStore === 'Rock') {
//         return (1);
//     } else if (playerChoiceStore === 'Paper') {
//         return (2);
//     } else if (playerChoiceStore === 'Scissors') {
//         return (3);
//     }
// }
// playerHelper()
// let helperPStore = playerHelper()

// function computerHelper() {  // This FUNCTION returns AIs choice in numbers.
//     let rpsComputer = Math.floor(Math.random() * 3) + 1;
//         if (rpsComputer === 1) {
//             return 1;
//         } else if (rpsComputer === 2) {
//             return 2;
//         } else if (rpsComputer === 3) {
//             return 3;
//         }
// }
//          computerHelper()
//             let helperCStore = computerHelper(); // This VARIABLE Helps getComputerChoice() output a string.
// console.log(helperCStore)


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

// function playRound (playerChoice, computerChoice) { // basically declaring new variables
//
//     }
// im getting it, basically the above functions 'get' ones are supposed to return values TO the function playRound's
// params playerchoice aand computerchoice and process them as arguments

// functions params (variables) are local to that function however you can pass arguments into those params from global scope

// when you come back, change the return values for 'get' variables and make them return values, and take those returned
// values into  playRounds params and pass them as arguments

// function roundWinner() { // This code decides and shows who wins/loses/draws // 4 = AI won 5 = Player 6 = Draw // TODO - could convert to switch/cases to lower down code. Plan is to write it as it is in if else statements, make it work, optimize it later
//         if (helperCStore === 1 && helperPStore === 3 || helperCStore === 2 && helperPStore === 1 || helperCStore === 3 && helperPStore === 2) {
//             return 'Round Winner: AI';
//         } else if (helperCStore === 1 && playerHelper() === 2 || helperCStore === 2 && playerHelper() === 3 || helperCStore === 3 && helperPStore === 1) {
//             return 'Round Winner: Player';
//         } else if (helperCStore === 1 && helperPStore === 1 || helperCStore === 2 && helperPStore === 2 || helperCStore === 3 && helperPStore === 3) {
//             return 'Draw';
//         }
//     }
// roundWinner()
//    let roundWinnerStore = roundWinner();
//    console.log(roundWinnerStore)