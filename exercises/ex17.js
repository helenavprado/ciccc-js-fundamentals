/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

let stringLaugh = " ";
let solution;
const laugh = numberOfLaugh => {
    for (let x = numberOfLaugh; x >= 1; x--) {
        stringLaugh += "ha";
    }
    return stringLaugh + "!"; 
}

console.log(laugh(3));