function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
    // this would give a random number betwen 1 and 100 
}

function celsiusToFahreneit(celcius) {
    return (celcius * 9) / 5 + 32;  // this would convert C to F 
}

// To use these function in other files it needs to be exported 
// module.exports = randomNumber;   only default export for one value 
module.exports = {
    randomNumber,
    celsiusToFahreneit
};


/*
ES6 Imports and Exports expalined in React.js-Code-Notes 
Here we need to add "type" as module to use ES6 modules.
*/