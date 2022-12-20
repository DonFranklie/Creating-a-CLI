var readlineSync = require('readline-sync');
var score = readlineSync.question('What is your Score? ');


if(score >= 70){
  console.log('Grade A');
}
else if(score >= 60){
  console.log('Grade B');
}
else if(score >= 50){
  console.log('Grade C');
}
else if(score >= 40){
  console.log('Grade D');
}
else{
  console.log('Fail');
}

// I stopped at 34:49


