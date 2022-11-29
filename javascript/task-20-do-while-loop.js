/*
Iterate with JavaScript Do...While Loops
The next type of loop you will learn is called a do...while loop. It is called a do...
while loop because it will first do one pass of the code inside the loop no matter what, 
and then continue to run the loop while the specified condition evaluates to true.

Tests
Passed:You should be using a do...while loop for this exercise.
Passed:myArray should equal [10].
Passed:i should equal 11
*/
// Setup
const myArray = [];
let i = 10;

// Only change code below this line

do {
  myArray.push(i);
  i++
} while (i<10);