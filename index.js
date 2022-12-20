var readlineSync = require('readline-sync');

function add(parameter1, parameter2) {
  console.log("First param", parameter1, "Second param", parameter2);
  var sum = parameter1 + parameter2;

  return sum;
}

var result = add(6, 7);
console.log("The result is: " + result);

function add(parameter1, parameter2) {
  console.log("First param", parameter1, "Second param", parameter2);
  var firstResult = parameter1 * parameter2;
  var sum = parameter1 + parameter2;
  var finalResult = sum + firstResult;
  return finalResult;
}





// I stopped at 34: 49


