let scoreDraw;
let computerScore = 0;
let playerScore = 0;


function roundCHelper() {  // This FUNCTION returns AIs choice in numbers.
    let rpsComputer = Math.floor(Math.random() * 3) + 1;
        if (rpsComputer === 1) {
            return 1;
        } else if (rpsComputer === 2) {
            return 2;
        } else if (rpsComputer === 3) {
            return 3;
        }
}
         roundCHelper()
            let helperCStore = roundCHelper(); // This VARIABLE Helps getComputerChoice() output a string.
            // console.log(helperCStore)

function getComputerChoice() {   // This function displays/logs AIs choice in words (string)
        if (helperCStore === 1) {
            return 'Rock';
        } else if (helperCStore === 2) {
            return 'Paper';
        } else if (helperCStore === 3) {
            return 'Scissors';
        }
    }
         getComputerChoice()
            // console.log(getComputerChoice())
            console.log(`AI Choice: ${getComputerChoice()}`)

function getPlayerChoice(rpsPlayer) {  // TODO - Could add RPS as parameters + Add cases for esc/cancel button
    rpsPlayer = 'Rock'
        return rpsPlayer;
}
         let playerChoiceStore = getPlayerChoice();
            console.log(`Player Choice: ${playerChoiceStore}`)
            // getPlayerChoice()


function roundPHelper() { // This function converts the string data type derived from rpsPlayer to a number. It helps decide the winner in roundWinner() // TODO - Could add RPS as parameters + Add cases for esc/cancel button
        if (playerChoiceStore === 'Rock') {
            return (1);
        } else if (playerChoiceStore === 'Paper') {
            return (2);
        } else if (playerChoiceStore === 'Scissors') {
            return (3);
        }
}
         roundPHelper()
            let helperPStore = roundPHelper()

function roundWinner() { // This code decides and shows who wins/loses/draws // 4 = AI won 5 = Player 6 = Draw // TODO - could convert to switch/cases to lower down code. Plan is to write it as it is in if else statements, make it work, optimize it later
        if (helperCStore === 1 && helperPStore === 3 || helperCStore === 2 && helperPStore === 1 || helperCStore === 3 && helperPStore === 2) {
            return 'Round Winner: AI';
        } else if (helperCStore === 1 && roundPHelper() === 2 || helperCStore === 2 && roundPHelper() === 3 || helperCStore === 3 && helperPStore === 1) {
            return 'Round Winner: Player';
        } else if (helperCStore === 1 && helperPStore === 1 || helperCStore === 2 && helperPStore === 2 || helperCStore === 3 && helperPStore === 3) {
            return 'Draw';
        }
    }
         roundWinner()
            let roundWinnerStore = roundWinner();
            console.log(roundWinnerStore)

function playRound (playerChoice, computerChoice) {

}






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