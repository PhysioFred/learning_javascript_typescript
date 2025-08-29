// 1. Function Declaration vs Arrow Function (shorthand)
function greetLong(name) {
    return "Hello, " + name;
}
const greetShort = name => "Hello, " + name;
console.log(greetLong("Alice")); // "Hello, Alice"
console.log(greetShort("Alice")); // "Hello, Alice"

// 2. Function Expression vs Arrow Function
const sayGoodbyeLong = function(name) {
    return "Goodbye, " + name;
};
const sayGoodbyeShort = name => "Goodbye, " + name;
console.log(sayGoodbyeLong("Bob")); // "Goodbye, Bob"
console.log(sayGoodbyeShort("Bob")); // "Goodbye, Bob"

// 3. Multi-parameter Function Expression vs Arrow Function
const addLong = function(a, b) {
    return a + b;
};
const addShort = (a, b) => a + b;
console.log(addLong(2, 3)); // 5
console.log(addShort(2, 3)); // 5

// 4. Anonymous Function (callback) vs Arrow Function (callback)
setTimeout(function() {
    console.log("Long: This runs after 1 second");
}, 1000);

setTimeout(() => {
    console.log("Short: This runs after 1 second");
}, 1000);

// 5. Constructor Function (no arrow shorthand for constructors)
function Person(name) {
    this.name = name;
}
const person1 = new Person("Charlie");
console.log(person1.name); // "Charlie"

// 6. Method (inside object) vs Arrow Function (not recommended for methods)
const calculatorLong = {
    multiply: function(x, y) {
        return x * y;
    }
};
const calculatorShort = {
    multiply: (x, y) => x * y // works, but not recommended for object methods
};
console.log(calculatorLong.multiply(4, 7)); // 28
console.log(calculatorShort.multiply(4, 7)); // 28

// 7. Arrow function as a callback (short form)
["apple", "banana", "cherry"].forEach(function(fruit) {
    console.log("Long callback:", fruit);
});
["apple", "banana", "cherry"].forEach(fruit => console.log("Short callback:", fruit));

// 8. Arrow function returning an object (wrap object in parentheses)
const makePersonLong = function(name, age) {
    return { name, age };
};
const makePersonShort = (name, age) => ({ name, age });
console.log(makePersonLong("Bob", 25)); // { name: "Bob", age: 25 }
console.log(makePersonShort("Bob", 25)); // { name: "Bob", age:


//The ... syntax is called the rest parameter in JavaScript. 
//It allows a function to accept any number of arguments as an array.
//Use cases for rest parameters include:
//When you want your function to handle a variable number of arguments.
//The number of arguments is unknown or flexible.
//You want to process all arguments together (e.g., sum, filter, map).

function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10 25 }

const name = "Alice";
const age = 30;

// Template literal with interpolation
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Hello, my name is Alice and I am 30 years old.

// Multi-line template literal
const multiLine = `This is line one.
This is line two.