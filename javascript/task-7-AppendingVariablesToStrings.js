/*
Appending Variables to Strings
Just as we can build a string over multiple lines out of string literals, 
we can also append variables to a string using the plus equals (+=) operator.

Example:

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
ourStr would have the value freeCodeCamp is awesome!.
*/

// Change code below this line
const someAdjective = "interesting";
let myStr = "Learning to code is ";
myStr += someAdjective;