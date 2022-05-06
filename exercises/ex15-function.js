/*
Define a function called ageCalculator. This function should take 3 parameters:

name – a string representing someone's name
yearOfBirth – a number representing their year of birth
currentYear – a number representing the current year
The ageCalculator function should return a string explaining how old the person is. For example, if we called ageCalculator("John", 1983, 2015);, the return value should be as follows.
"John is 32 years old."
*/

/*
Ways to declare a function

1. NAMED FUNCTION
function nameOfTheFunction(parameters) {
    body
}

2. FUNCTION EXPRESSION (the function namel will be the same as the variable)
const nameOfTheVariable = function() {
    body
}


3. ARROW FUNCTIONS (very similr to function expression, but you switch the word 'function' for =>)
3.1 Arrow function with no arguments 
const nameOfTheVariable = () => { 
    body
}; 

3.2 Arrow functions with a single argument  (no need to put the parameter inside parentheses)
const nameOfTheVariable = parameter => { 
    body
}; 

3.3 Arrow function with two arguments 
const nameOfTheVariable = (firstParam, secondParam) => { 
    body
};

BONUS:
A function body composed of a single-line block does not need curly braces. 
Without the curly braces, whatever that line evaluates will be automatically returned. 
The contents of the block should immediately follow the arrow => and the return keyword can be removed. 
This is referred to as implicit return.

const nameOfTheVariable = parameter => parameter * parameter;

*/ 

function ageCalculator(name, yearOfBirth, currentYear) {
    let yearsOld = currentYear - yearOfBirth;
    console.log(`${name} is ${yearsOld} years old.`);
}

ageCalculator("John", 1983, 2022);