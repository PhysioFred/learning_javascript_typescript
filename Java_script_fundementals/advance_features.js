//synchronous (linear) vs asynchronous
// asynchronous good to use "over the wire" 
// (internet) or "over the air" (radio waves) data transfer or loading from disk
/*A promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
When you use an async method like axios.get(...), 
it returns a promise. You can use .then() to run code when the operation succeeds, and .catch() for errors.
For example, using the axios library to make an HTTP GET request:
*/
const axios = require('axios');
axios.get("https://httpbin.org/get")
    .then(function(response) {
        // Runs when the request is successful
        console.log(response.data);
    })
    .catch(function(error) {
        // Runs if there is an error
        console.error(error);
    });

//object oriented programming (OOP) vs functional programming (FP)
//relationship between origial object and other object is called "inheritance"
// javascript uses prototypal inheritance 
// protoypal inheritance is more flexible than class-based inheritance
//example
//ChocolateCake inherits from Cake
//Cake inherits from Object
//The chain: ChocolateCake.__proto__ → Cake.__proto__ → Object.prototype

//Syntactic sugar is a feature in programming that offers a simpler, more readable, or more intuitive way to express something 
// that could already be done with a more complex, underlying syntax
// OOP examples:
// Normal (pre-ES6) prototypal inheritance
function Cake() {}
Cake.prototype.bake = function(temp, minutes) {
    // Bake a cake at a particular temperature
    // for a number of minutes
    console.log(`Baking at ${temp}° for ${minutes} minutes.`);
};

const myCake = new Cake();
myCake.bake(350, 30);

// Syntactic sugar (ES6 class syntax)
class CakeSugar {
    bake(temp, minutes) {
        // Bake a cake at a particular temperature
        // for a number of minutes
        console.log(`Baking at ${temp}° for ${minutes} minutes.`);
    }
}

const myCakeSugar = new CakeSugar();
myCakeSugar.bake(350, 30);

//jargon: Strong vs. Loosely typed languages
//Strongly typed languages enforce strict type rules, while loosely typed languages are more flexible with types
//JavaScript is a loosely typed language, meaning you don't have to declare variable types explicitly
//typscript is a strongly typed superset of javascript
//supersets add features to a language without removing existing features
//Example of strong typing in TypeScript
//let num: number = 42; // This variable can only hold numbers
//num = "Hello"; // Error: Type 'string' is not assignable to type 'number' 
//Example of loose typing in JavaScript
let variable = 42; // variable can hold any type
variable = "Hello"; // No error, variable now holds a string

