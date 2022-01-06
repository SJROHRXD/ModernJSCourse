// Data Types
// PRIMATIVE 🌷🌷🌷

// Strings 🌿
const name = "Sarah Rohr";
console.log(typeof name);
// will display "string" in console log

// Numbers 🌿
const age = 32;
console.log(typeof age);
// will display "number"

// Boolean 🌿
const hasKids = true;
console.log(typeof hasKids);
// will display "true"

// Null 🌿
// kind of a bug
// null rep'd as NULL pointer; but will display as object
// it's a primative type not an object
const car = null;
console.log(typeof car);
// will display "object"

// Undefined 🌿
let test;
console.log(typeof test);
// will display "undefined"

// Symbol
const sym = Symbol();
console.log(typeof sym);
// will display "symbol"

// REFERENCE 🌷🌷🌷
// will all return as objects

// Array 🌿
const hobbies = ["movies", "music"];
console.log(typeof hobbies);
// returns "object"

// Object Literal 🌿
const address = {
    city: "Seattle",
    state: "Washington",
};
console.log(typeof address);
// returns "object"

// Date 🌿
const today = new Date();
console.log(today);
// returns "Thu Jan 06 2022 12:53:24 GMT-0800 (Pacific Standard Time)"
console.log(typeof today);
// returns "object"