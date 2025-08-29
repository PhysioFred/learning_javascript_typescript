/*Set is a collection of unique values. 
You can add, delete, and check for values, but duplicates are not allowed.

Map is a collection of key-value pairs. 
Unlike objects, keys can be any type (not just strings).*/

// Set example
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1); // Duplicate, won't be added
console.log(mySet); // Set { 1, 2 }

// Map example
let myMap = new Map();
myMap.set('a', 100);
myMap.set(42, 'answer');
console.log(myMap.get('a')); // 100