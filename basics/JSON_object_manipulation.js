const agent = {
    id: "jane123",
    name: "Jane",
    status: "unavailable",
};


//Classic for in loop
//Modern object.entries() for loop or forEach
//object keys() / object.values()
console.log("Classic for in loop")

for (const key in agent) {
    console.log(`${key}: ${agent[key]}`);
}

console.log("Modern Object.entries() for of loop")

for (const [key, value] of Object.entries(agent)) {
    console.log(`${key}: ${value}`);
}

console.log("Modern Object.entries() for Each loop with Arrow Function operator")
Object.entries(agent).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


console.log("Modern Object.keys() with Arrow Function")
Object.keys(agent).forEach(key => {
    console.log(`${key}: ${agent[key]}`);
});

