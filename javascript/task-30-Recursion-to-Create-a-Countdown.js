// Use Recursion to Create a Countdown

// We have defined a function called countdown with one parameter (n). The function 
// should use recursion to return an array containing the integers n through 1 based 
// on the n parameter. If the function is called with a number less than 1, the function 
// should return an empty array. For example, calling this function with n = 5 should 
// return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself 
// and must not use loops of any kind.

// Tests
// Waiting:countdown(-1) should return an empty array.
// Waiting:countdown(10) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Waiting:countdown(5) should return [5, 4, 3, 2, 1]
// Waiting:Your code should not rely on any kind of loops (for, while or higher order 
// functions such as forEach, map, filter, and reduce).
// Waiting:You should use recursion to solve this problem.
// Waiting:Global variables should not be used to cache the array.

// Only change code below this line
function countdown(n) {
    if (n<1){
      return []
    } 
    else {
      let countArray = countdown(n-1);
      countArray.unshift(n);
      return countArray;
    }
}
// Only change code above this line