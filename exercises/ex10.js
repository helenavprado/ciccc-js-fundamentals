/*
Rewrite the following while loop as a for loop:

let x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

*/

for (let index = 9; index >= 1; index--) {
  console.log(`Hello ${index}`);
  
}