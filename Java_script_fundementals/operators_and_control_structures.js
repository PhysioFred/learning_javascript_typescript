// Logical Operators in JavaScript

// AND operator (Technical name: Logical AND)
// Symbol: &&
let andResult = true && false; // false

// OR operator (Technical name: Logical OR)
// Symbol: ||
let orResult = true || false; // true

// NOT operator (Technical name: Logical NOT)
// Symbol: !
let notResult = !true; // false

// Nullish Coalescing operator (Technical name: Nullish Coalescing)
// Symbol: ??
let nullishResult = null ?? 'default'; // 'default'

// Optional Chaining operator (Technical name: Optional Chaining)
// Symbol: ?.
let obj = {};
let optionalChainingResult = obj?.property; // undefined

//condition ? expressionIfTrue : expressionIfFalse
animal === 'cat'
    ? console.log('You will be a cat herder.')
    : console.log('You will be a dog catcher.');
//If animal is 'cat', it runs the first expression.
//Otherwise, it runs the second expression.

// ...existing code...

// Example of a simple else if statement
let number = 10;

if (number > 10) {
    console.log("Number is greater than 10");
} else if (number === 10) {
    console.log("Number is exactly 10");
} else {
    console.log("Number is less than 10");
}

//

//Condition/conditional expression: the expression that is evaluated (e.g., number > 10)
//statement block/Block/Body/Action block: the code that runs if the condition is true (e.g., console.log(...))

// ...existing code...

// Example of a switch conditional block
let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("You selected apple.");
        break;
    case "banana":
        console.log("You selected banana.");
        break;
    case "orange":
        console.log("You selected orange.");
        break;
    default:
        console.log("Unknown fruit.");
}

//use switch statement and case blocks WITH break statements to prevent fall-through

// ...existing code...

// Common examples of control structures and logical operators:

// 1. Ternary operator (terse if one-liner)
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote?", canVote);

// 2. Truthy and falsy check
let value = "";
if (value) {
    console.log("Value is truthy");
} else {
    console.log("Value is falsy");
}

/*
Common falsy values:

false
0
"" (empty string)
null
undefined
NaN
Everything else is truthy
*/

//.editor mode 
//console.log("Hello, World!");

