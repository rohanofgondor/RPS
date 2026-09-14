function getComputerChoice () {
    let rps2 = Math.floor(Math.random() * 3) + 1;
    if (rps2 === 1) {
        console.log ('Rock');
            }
        else if (rps2 === 2) {
            console.log ('Paper');
        }
        else if (rps2 === 3) {
            console.log('Scissors');
        }
}
getComputerChoice();

// create a snippet library in your obsidian library for codes, like this could be labelled for "to get RANDOM output
// from set of choies from computer"

// Logic
// First step
// Create a function called getComputerChoice and inside of it,
// Randomly returns Rock Paper Scissor
// TOP gave hint to say Math.random() method so computer can randomly pick and register one

// Hurdle 1
    // I should give it choices to pick randomly from - rock paper scissor
    // I could use OR || LO (logical operator) to pick from Rock || Paper || Scissor
    // Potential solution - For starter just write, the logic in above sentence.
    // Potential solution - **I could assign the 3 multiple choice strings to numbers 1 2 3 = rock
    // paper scissors respectively
    // then use math.floor and limit the inclusive/exclusive outcomes to integers ranging from
    // 0 to 4 (0 i think will be included and 4 will be excluded and floor() also floors the
    // decimals to integers .4 or .5 to 4 5

// later on add this to obsidian i guess
// always read documentation of functions and shit on w3school or other platforms aint mentioning mds
// cuz they buggin

// re read type coerciasn
