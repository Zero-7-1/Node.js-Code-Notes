// There is no document or window oject here in NodeJS enviroment but there are 
console.log(global);
console.log(process);


// for importing only commonJS default export  const randomNumber = require('./comjs')
const {randomNumber, celsiusToFahreneit} = require('./comjs')
console.log(`Random Number = ${randomNumber()}`);
console.log(`C to F = ${celsiusToFahreneit(0)}`);

/*
Commonly what is done is HTTP modules, creating server, dealing with requests and
responses and to make that job easier we have frameworks like Express.js. 

*/