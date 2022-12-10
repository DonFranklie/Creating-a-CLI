var readlineSync = require('readline-sync');
// Input
var userAge = readlineSync.question("How old are you?");

console.log("You are "+ userAge +" Years old.");
// Processing
if (userAge == 25){
  // Output
  console.log("You are eligible for the Prize");
}else{
  // Output
  console.log("You are not eligible");
}

// I stopped at 34:49


