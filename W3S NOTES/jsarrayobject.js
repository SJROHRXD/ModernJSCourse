// JavaScript Array Reference ✨

// Array Object 🌷🌿🌻

// The Array object is used to store multiple values in a single variable.
// Array indexes are zero-based: The first element in the array is 0, the second is 1, and so on.

var fruits = ["apples", "bananas", "oranges"];

// "apples" are position zero, "bananas" are position one, "oranges" are position two

// JavaScript Array Methods 🌷🌿🌻

// concat() ✨
// Joins two or more arrays, and returns a copy of the joined arrays

// Concatonates (joins) two or more arrays
// Returns a new array, containing the joined arrays
// Does not change the existing arrays

// Parameter - - - Description
// array2 - - - Required
// array3 - - - The arrays to be joined
// ...
// arrayX

// Return Value Type - - - Description
// An array - - - The joined arrays

// 🤍🐸 E X A M P L E 🤍🐸 //

var vegies = ["carrots", "zucchini", "tomatoes"];
const foods = fruits.concat(vegies);
console.log(foods);

// output
// Array(6)
    // 0: "apples"
    // 1: "bananas"
    // 2: "oranges"
    // 3: "carrots"
    // 4: "zucchini"
    // 5: "tomatoes"
    // length: 6

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// copyWithin() ✨
// Copies array elements within the array, to and from specified positions

// Copies array elements to another position in the array
// Overwrites the existing values
// Does not add items to the array

// Parameter - - - Description
// target - - - Required; the index (position) to copy the elements to
// start - - - Optional; the start index (position); default is 0
// end - - - Optional; the end index (position); default is the array length

// Return Value Type - - - Description
// An array - - - The changed array

// 🤍🐸 E X A M P L E 🤍🐸 //

var shoes = ["boots", "flats", "heels", "sandals"];
shoes.copyWithin(2, 0);
console.log(shoes);
// will copy the first two array elements to the last two array elements
// 2 is the target; the target is array position 2, where we will insert our copy
// 0 is the start; where we begin our copy
// but why does it know to copy two array elements???

// output
// (4) ['boots', 'flats', 'boots', 'flats']
    // 0: "boots"
    // 1: "flats"
    // 2: "boots"
    // 3: "flats"
    // length: 4

var shoesAgain = ["boots", "flats", "heels", "sandals", "mules"];
shoesAgain.copyWithin(2, 0, 1);
console.log(shoesAgain);
// copied position zero to position two
// specifying 1 as the end of the index position copied only boots and stopped at boots
// interdasting

// output
// (5) ['boots', 'flats', 'boots', 'sandals', 'mules']
    // 0: "boots"
    // 1: "flats"
    // 2: "boots"
    // 3: "sandals"
    // 4: "mules"
    // length: 5

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// entries() ✨
// Returns a key/value pair Array Iteration Object

// Returns an Array Iterator Object with key/value pairs
// Does not change the original array

// Parameter - - - Description
// None!

// Return Value Type - - - Description
// An iterable - - - An array with key/value pairs

// 🤍🐸 E X A M P L E 🤍🐸 //

const birthstones = [
    "Garnet", 
    "Amethyst", 
    "Aquamarine", 
    "Diamond", 
    "Emerald", 
    "Pearl", 
    "Ruby", 
    "Peridot", 
    "Sapphire", 
    "Opal", 
    "Citrine", 
    "Topaz"
];
const b = birthstones.entries();
for (let x of b) {
    document.getElementById("entriesmethod").innerHTML += x + "<br>";
}

// output in html doc
// Demo entries() method:
    // 0,Garnet
    // 1,Amethyst
    // 2,Aquamarine
    // 3,Diamond
    // 4,Emerald
    // 5,Pearl
    // 6,Ruby
    // 7,Peridot
    // 8,Sapphire
    // 9,Opal
    // 10,Citrine
    // 11,Topaz

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// every() ✨
// Checks if every element in an array pass a test

// Executes a function for each array element
// Returns true if the function returns true for all elements
// Returns false if the function returns false for one element
// Does not execute the function for empty elements
// Does not change the original array

// Parameter - - - Description
// function() - - - Required; a function to be run for each element in the array
// currentValue - - - Required; the value of the current element
// index - - - Optional; the index of the current element
// arr - - - Optional; the array of the current element
// thisValue - - - Optional; a value passed to the function as its *this* value; Default is UNDEFINED

// Return Value Type - - - Description
// A boolean - - - true if all elements pass the test, otherwise false

// 🤍🐸 E X A M P L E 🤍🐸 //

let ages = [70, 71, 72, 73, 74];

let result = ages.every(isOver69)

function isOver69(age) {
    return age > 69;
};

console.log(result);
// omfg I did it, remember to define a variable to console log ⚡

// output
// true

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// fill() ✨
// Fill the elements in an array with a static value

// Fills specified elements in an array with a value
// Overwrites the original array

// Parameter - - - Description
// value - - - Required; the value to fill in
// start - - - Optional; the start index (position); Default is 0
// end - - - Optional; the stop index (position); Default is array length

// Return Value Type - - - Description
// An array - - - The filled array

// 🤍🐸 E X A M P L E 🤍🐸 //

var originalA = ["painting", "singing", "baking", "dancing", "coding"];

console.log(originalA);

originalA.fill("Sneezing");

console.log(originalA);

// output 1
// (5) ['painting', 'singing', 'baking', 'dancing', 'coding']
// output 2
// (5) ['Sneezing', 'Sneezing', 'Sneezing', 'Sneezing', 'Sneezing']

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// filter() ✨
// Creates a new array with every element in an array that pass a test

// Creates a new array filled with elements that pass a test provided by a function
// Does not execute function for empty elements
// Does not change the original array

// Parameter - - - Description
// function() - - - Required; a function to run for each array element
// currentValue - - - Required; the value of the current element
// index - - - Optional; the index of the current element
// arr - - - Optional; the array of the current element
// thisValue - - - Optional; a value passed to the function as its *this* value; Default is UNDEFINED

// Return Value Type - - - Description
// An array - - - containing the elements that pass the test; if no elements pass test an empty array will be returned

// 🤍🐸 E X A M P L E 🤍🐸 //

let ages2 = [1, 2, 3, 69, 99];

let result2 = ages2.filter(isAdult)

// currentValue is the value of the elements in the ages2 array
// isAdult is the required function
// age is the thisValue
// I think lol

function isAdult(age) {
    return age >= 18;
};

console.log(result2);

// output
// (2) [69, 99]
    // 0: 69
    // 1: 99
    // length: 2

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// find() ✨
// Returns the value of the first element in an array that pass a test

// Returns the value of the first element that passes a test
// Executes a function for each array element
// Returns UNDEFINED if no elements are found
// Does not execute the function for empty elements
// Does not change the original array

// Parameter - - - Description
// function() - - - Required; a function to run for each array element
// currentValue - - - Required; the value of the current element
// index - - - Optional; the index of the current element
// arr - - - Optional; the array of the current element
// thisValue - - - Optional, a value passed to the function as its *this* value; Default UNDEFINED

// Return Value Type - - - Description
// A Value - - - the value of the first element that passes the test; otherwise returns UNDEFINED

// 🤍🐸 E X A M P L E 🤍🐸 //

const numbers = [2, 4, 6, 8, 11];
const result3 = numbers.find(checkEven);

function checkEven(number) {
    return number % 2 == 0;
};

console.log(`🌻🌿🌷 The first even number is ${result3}! 🌻🌿🌷`);
// had to make this more interesting

// output
// 🌻🌿🌷 The first even number is 2! 🌻🌿🌷

// Again!
const nummies = [3, 5, 20, 22];
const result4 = nummies.find(checkEvener);

function checkEvener(nummy) {
    return nummy % 2 == 0;
};

console.log(`🌻🌿🌷 The first even number is ${result4}! 🌻🌿🌷`);

// output
// 🌻🌿🌷 The first even number is 20! 🌻🌿🌷
// wait so how do I do an odd number without an if/else
// nvm that's for when I'm not tired

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// findIndex() ✨
// Returns the index of the first element in an array that pass a test

// Executes a function for each array element
// Returns the index (position) of the first element that passes a test
// Returns -1 if no match is found
// Does not execute the function for empty array elements
// Does not change the original array

// Parameter - - - Description
// function() - - - Required; a function to run for each array element
// currentValue - - - Required; the value of the current element
// index - - - Optional; the index of the current element
// arr - - - Optional; the array of the current element
// thisValue - - - Optional, a value passed to the function as its *this* value; Default UNDEFINED

// Return Value Type - - - Description
// A number - - - the index of the first element that passes the test; otherwise returns -1

// 🤍🐸 E X A M P L E 🤍🐸 //

const digits = [1, 2, 3, 4, 5];
const result5 = digits.findIndex(checkOver3);

function checkOver3(dig) {
    return dig > 3;
};

console.log(`🌷 The first "digit" greater than 3 is in this position of the array: ${result5}! 🌷`);
// well that was lengthy

// output
// 🌷 The first "digit" greater than 3 is in this position of the array: 3! 🌷

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// forEach() ✨
// Calls a function for each array element

// Calls a function for each element in an array
// Not executed for empty elements

// Parameter - - - Description
// function() - - - Required; a function to run for each array element
// currentValue - - - Required; the value of the current element
// index - - - Optional; the index of the current element
// arr - - - Optional; the array of the current element
// thisValue - - - Optional; a value passed to the function as its *this* value; Default UNDEFINED

// Return Value Type - - - Description
// UNDEFINED?

// 🤍🐸 E X A M P L E 🤍🐸 //

let boopNs = [1, 2, 3, 4, 5];

boopNs.forEach(ellie => console.log(`For each: ${ellie}! ⚡`));

// output
// individually:
    // For each: 1! ⚡
    // For each: 2! ⚡
    // For each: 3! ⚡
    // For each: 4! ⚡
    // For each: 5! ⚡

// I know I can do way more with forEach, but this is good for now!

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// from() ✨
// Creates an array from an object

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// includes() ✨
// Check if an array contains the specified element

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// indexOf() ✨
// Search the array for an element and returns its position

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// isArray() ✨
// Checks whether an object is an array

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// join() ✨
// Joins all elements of an array into a string

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// keys() ✨
// Returns a Array Iteration Object, containing the keys of the original array

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// lastIndexOf() ✨
// Search the array for an element, starting at the end, and returns its position

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// map() ✨
// Creates a new array with the result of calling a function for each array element

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// pop() ✨
// Removes the last element of an array, and returns that element

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// push() ✨
// Adds new elements to the end of an array, and returns the new length

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// reduce() ✨
// Reduce the values of an array to a single value (going left-to-right)

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// reduceRight() ✨
// Reduce the values of an array to a single value (going right-to-left)

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// reverse() ✨
// Reverses the order of the elements in an array

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// shift() ✨
// Removes the first element of an array, and returns that element

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// slice() ✨
// Selects a part of an array, and returns the new array

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// some() ✨
// Checks if any of the elements in an array pass a test

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// sort() ✨
// Sorts the elements of an array

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// splice() ✨
// Adds/Removes elements from an array

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// toString() ✨
// Converts an array to a string, and returns the result

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// unshift() ✨
// Adds new elements to the beginning of an array, and returns the new length

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// valueOf() ✨
// Returns the primitive value of an array

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// Array Properties 🌷🌿🌻

// constructor
// Returns the function that created the Array object's prototype

// length
// Sets or returns the number of elements in an array

// prototype
// Allows you to add properties and methods to an Array object