//comment

/*
comment on 
more than one line
*/

//object: string, num, key-value pair {key:, value:};
//refernces: variable = variable
//copy objects: variable = object.assign({}, animal);
//copy objects: {...animal}; ... is the spread/rest operator
//copy objects: JSON.parse(JSON.stringify(variable));
//copy objects: Object.assign({}, animal); //shallow copy

//copy objects: Object.create(animal); //creates a new object with the prototype of animal
//copy objects: Object.keys(animal); //returns an array of keys
//copy objects: Object.values(animal); //returns an array of values
//copy objects: Object.entries(animal); //returns an array of key-value pairs
//copy objects: Object.freeze(animal); //makes the object immutable
//copy objects: Object.seal(animal); //prevents adding new properties, but allows


//arrays: [];
//arrays: array = [1, 2, 3];
//arrays: array = Array.of(1, 2, 3); //creates an array with the given elements
//manipulate arrays: array[array.length] = 'object';
//manipulate arrays: array.push('object');
//manipulate arrays: array.pop(); //removes last element
//manipulate arrays: array.shift(); //removes first element
//manipulate arrays: array.unshift('object'); //adds to
//manipulate arrays: array.splice(0, 1); //removes first element
//manipulate arrays: array.slice(0, 1); //returns a new array

//manipulate arrays: array.concat(['object']); //returns a new array
//manipulate arrays: array.map((item) => item + 1); //returns
//manipulate arrays: array.filter((item) => item > 1); //returns a new array
//manipulate arrays: array.reduce((acc, item) => acc + item,


//regular expression/regex

