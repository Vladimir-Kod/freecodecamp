/*
Replace Loops using Recursion
Recursion is the concept that a function can be expressed in terms of itself. 
To help understand this, start by thinking about the following task: multiply 
the first n elements of an array to create the product of those elements. 

sum([1], 0) should equal 0.
Passed:sum([2, 3, 4], 1) should equal 2.
Passed:sum([2, 3, 4, 5], 3) should equal 9.
Passed:Your code should not rely on any kind of loops (for or while or higher order functions such as 
forEach, map, filter, or reduce.).
Passed:You should use recursion to solve this problem.
*/

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
      return 0;
      } else {
        return sum(arr, n-1) + arr[n-1] 
      }
    // Only change code above this line
  }