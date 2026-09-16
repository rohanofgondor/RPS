// Step 2 (according to TOP)
function getComputerChoice () {
    let rps = Math.floor(Math.random() * 3) + 1;
    // Math.random() returns a number from 0 (inclusive) up to but not including 1.
    // Multiplying by 3 gives a number from 0 up to but not including 3.
    // Adding 1 shifts that range to 1 up to but not including 11.
    // Math.floor() then rounds down, so you get an integer between 1 and 3.
    if (rps === 1) {
        console.log ('Rock');
            }
        else if (rps === 2) {
            console.log ('Paper');
        }
        else if (rps === 3) {
            console.log('Scissors');
        }
}
getComputerChoice();
// Step 3 (according to TOP)
function  getHumanChoice () {
    let userChoice = prompt('Pick one', 'Rock, Paper, Scissors')
    return (console.log(userChoice));
}
getHumanChoice()