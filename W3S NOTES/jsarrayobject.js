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

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// fill() ✨
// Fill the elements in an array with a static value

// Parameter - - - Description
// Return Value Type - - - Description
// 🤍🐸 E X A M P L E 🤍🐸 //
// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// filter() ✨
// Creates a new array with every element in an array that pass a test

// find()
// Returns the value of the first element in an array that pass a test

// findIndex()
// Returns the index of the first element in an array that pass a test

// forEach()
// Calls a function for each array element

// from()
// Creates an array from an object

// includes()
// Check if an array contains the specified element

// indexOf()
// Search the array for an element and returns its position

// isArray()
// Checks whether an object is an array

// join()
// Joins all elements of an array into a string

// keys()
// Returns a Array Iteration Object, containing the keys of the original array

// lastIndexOf()
// Search the array for an element, starting at the end, and returns its position

// map()
// Creates a new array with the result of calling a function for each array element

// pop()
// Removes the last element of an array, and returns that element

// push()
// Adds new elements to the end of an array, and returns the new length

// reduce()
// Reduce the values of an array to a single value (going left-to-right)

// reduceRight()
// Reduce the values of an array to a single value (going right-to-left)

// reverse()
// Reverses the order of the elements in an array

// shift()
// Removes the first element of an array, and returns that element

// slice()
// Selects a part of an array, and returns the new array

// some()
// Checks if any of the elements in an array pass a test

// sort()
// Sorts the elements of an array

// splice()
// Adds/Removes elements from an array

// toString()
// Converts an array to a string, and returns the result

// unshift()
// Adds new elements to the beginning of an array, and returns the new length

// valueOf()
// Returns the primitive value of an array

// Array Properties 🌷🌿🌻

// constructor
// Returns the function that created the Array object's prototype

// length
// Sets or returns the number of elements in an array

// prototype
// Allows you to add properties and methods to an Array object