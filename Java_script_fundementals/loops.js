// Loop over a number (using for loop) sequential iteration
for (let i = 0; i < 5; i++) {
    console.log("Number:", i);
}

// Loop over a string (iterate each character) sequential iteration
let str = "hello";
for (let i = 0; i < str.length; i++) {
    console.log("Character:", str[i]);
}

// Loop over an array (using for...of) iterates over iterable objects
let arr = ["apple", "banana", "cherry"];
for (let fruit of arr) {
    console.log("Fruit:", fruit);
}

// Loop over an array (using forEach) executes a provided function once for each array element
arr.forEach(function(fruit) {
    console.log("forEach



/* types of for loops:
1. for loop: sequential iteration
2. for...of loop: iterates over iterable objects (arrays, strings, etc.)
3. for...in loop: iterates over object properties
4. while loop: continues as long as a condition is true
5. do...while loop: executes at least once, then continues while a condition is true
6. forEach method: executes a provided function once for each array element
*/

// Example of a while loop
let count = 0;
while (count < 3) {
    console.log("while loop count:", count);
    count++;
}

// Example of a do...while loop
let num = 0;
do {
    console.log("do...while loop num:", num);
    num++;
} while (num < 3);

// Example of a for...in loop (iterates over object properties)
let person = { name: "Alice", age: 30 };
for (let key in person) {
    console.log("for...in key:", key,