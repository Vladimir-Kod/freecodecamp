/*
Returning Boolean Values from Functions
You may recall from Comparison with the Equality Operator that all comparison operators 
return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

можно сделать запись короче
*/
function isLess(a, b) {
    // Only change code below this line
    return a < b 
    
    // Only change code above this line
  }
  
  isLess(10, 15);