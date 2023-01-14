//How to convert array of strings to uppercase

let currencies = ['dollar', 'ruble', 'pound', 'euro'];

function toUpper(anArray){
  let toUppercase = anArray.map(element=>element.toUpperCase());

  console.log(toUppercase);
}

toUpper(currencies);

