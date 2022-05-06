/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

let stringLaugh = " ";
let solution;
const laugh = numberOfLaugh => {
    for (let x = numberOfLaugh; x >= 1; x--) {
        stringLaugh += "ha";
    }
    return stringLaugh + "!"; 
}

function emotions(emotion) {
    return console.log(emotion, laugh(48));
}

emotions("happy");