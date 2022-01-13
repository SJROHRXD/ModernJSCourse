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

// Returns an array from any object with a length property
// Returns an array from any iterable object
// Array.from() is a static property of the JavaScript Array object
// Using x.from(), where x is an array, will return UNDEFINED

// Parameter - - - Description
// object - - - Required; the object to convert to an array
// mapFunction - - - Optional; a map function to call on each item
// thisValue - - - Optional; a value to use as *this* for the mapFunction

// Return Value Type - - - Description
// An array - - - The values from the iterable object

// 🤍🐸 E X A M P L E 🤍🐸 //

let gingerBoom = "ABCDEFG";
const gingArr = Array.from(gingerBoom);

console.log(`The array: ${gingArr}`)

// output
// The array: A,B,C,D,E,F,G

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// includes() ✨
// Check if an array contains the specified element

// Returns true if an array contains a specified value
// Returns false if the value is not found
// The method is case sensitive

// Parameter - - - Description
// element - - - Required; the value to search for
// start - - - Optional; start position; Default is 0

// Return Value Type - - - Description
// A boolean - - - true if the value is found; otherwise false

// 🤍🐸 E X A M P L E 🤍🐸 //

const kidsNames = ["Sophia", "Charlotte", "Henry", "William"];
let resultKNs = kidsNames.includes("Charlotte");

console.log(`Say "true" if the result contains the name "Charlotte"... \n...${resultKNs}!`);

// ouput
// Say "true" if the result contains the name "Charlotte"... 
// ...true!

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// indexOf() ✨
// Search the array for an element and returns its position

// Returns the first index (position) of a specified value
// Returns -1 if the value is not found
// Starts at specified index and searches from left to right
// By default, search starts at first element and ends at last
// Negative start values count from the last element, but still searches from right to left

// Parameter - - - Description
// item - - - Required; the value to search for
// start - - - Optional; where to start the search; default value is 0; negative values start search from end of array

// Return Value Type - - - Description
// A number - - - The index (position) of the first item found; -1 if item not found

// 🤍🐸 E X A M P L E 🤍🐸 //

const flowers = ["Dahlia", "Peony", "Cosmo", "Aster"];
let resultFlowz = flowers.indexOf("Peony");

console.log(`The index position of Peony in the 🌼 flowers 🌼 array is: ${resultFlowz}`);

// ouput
// The index position of Peony in the 🌼 flowers 🌼 array is: 1

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// isArray() ✨
// Checks whether an object is an array

// Returns true if an object is an array, otherwise false

// Array.isArray() is a static property of the JavaScript Array object
// You can only use it as Array.isArray()
// Using x.isArray(), where x is an array, will return UNDEFINED

// Parameter - - - Description
// obj - - - Required; an object (or any data type) to be tested

// Return Value Type - - - Description
// A boolean - - - true if object is an array, otherwise false

// 🤍🐸 E X A M P L E 🤍🐸 //

const nebulae = ["Cat's Eye", "Medusa", "Lemon Slice", "Soap Bubble"];
let resultNebbies = Array.isArray(nebulae);

console.log(`Is ✨ nebulae ✨ an array? \n...${resultNebbies}`);

// output
// Is ✨ nebulae ✨ an array? 
// ...true

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// join() ✨
// Joins all elements of an array into a string

// Returns an array as a string
// Does not change the original array
// Any separator can be specified, the default is a comma

// Parameter - - - Description
// separator - - - Optional; the separator to be used; default is a comma

// Return Value Type - - - Description
// A string - - - The array values, separated by the specified separator

// 🤍🐸 E X A M P L E 🤍🐸 //

const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Indigo"];
let colorsText = colors.join();

document.getElementById("joinmethod").innerHTML = colorsText;

// output
// Red,Orange,Yellow,Green,Blue,Violet,Indigo

// Again! With a separator specified:

const colors2 = ["Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Indigo"];
let colorsText2 = colors2.join(` 🤍 and then 🤍 `);

document.getElementById("joinmethod2").innerHTML = colorsText2;

// output
// Red 🤍 and then 🤍 Orange 🤍 and then 🤍 Yellow 🤍 and then 🤍 Green 🤍 and then 🤍 Blue 🤍 and then 🤍 Violet 🤍 and then 🤍 Indigo

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// keys() ✨
// Returns an Array Iteration Object, containing the keys of the original array

// Returns an Array Iterator object with the keys of an array
// Does not change the original array

// Parameter - - - Description
// NONE!

// Return Value Type - - - Description
// An array - - - An array Iterator object containing the keys of an array

// 🤍🐸 E X A M P L E 🤍🐸 //

const navyRanks = ["Seaman Recruit", "Seaman Apprentice", "Seaman"];
const keysNR = navyRanks.keys();

let resultsNR = "";
for (let x of keysNR) {
    resultsNR += x + ` `;
};
// there is a better way to do this and console.log but my brain hurts
// how can I add a line break to console.log???

console.log(resultsNR);

// output
// 0 1 2 

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// lastIndexOf() ✨
// Search the array for an element, starting at the end, and returns its position

// Returns the last index (position) of a specified value
// Returns -1 if the value is not found
// Starts at specified index and searches from right to left
// By default, the search starts at the last element and ends at the first
// Negative start values count from the last element, but still search right to left

// Parameter - - - Description
// item - - - Required; the value to search for
// start - - - Optional; where to start the search, default is the last element (array.length-1)

// Return Value Type - - - Description
// A number - - - The position of the specified item, -1 if the item is not found

// 🤍🐸 E X A M P L E 🤍🐸 //

const bread = ["Sourdough", "Rye", "Brioche", "Pumpernickel"];
let indexB = bread.lastIndexOf("Rye");

console.log(`The last index position of Rye is... \n...${indexB}`);

// output
// The last index position of Rye is... 
// ...1

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// map() ✨
// Creates a new array with the result of calling a function for each array element

// Creates a new array from calling a function for every array element
// Calls a function once for each element in the array
// Does not execute the function for empty elements
// Does not change the original array

// Parameter - - - Description
// function() - - - Required; a function to be run for each array element
// currentValue - - - Required; the value of the current element
// index - - - Optional; the index of the current element
// arr - - - Optional; the array of the current element
// thisValue - - - Optional; default value is UNDEFINED; a value passed to the function to be used as its *this* value

// Return Value Type - - - Description
// An array - - - The results of a function for each array element

// 🤍🐸 E X A M P L E 🤍🐸 //

const numbiez = [1, 2, 3, 4, 5];
const newNumbiez = numbiez.map(times3);

function times3(num) {
    return num * 3;
};

console.log(newNumbiez);

// output
// (5) [3, 6, 9, 12, 15]
    // 0: 3
    // 1: 6
    // 2: 9
    // 3: 12
    // 4: 15
    // length: 5

// Again, with an Object

const myKids = [
    {firstname: "Sophia", middlename: "Gabrielle"},
    {firstname: "Charlotte", middlename: "Danger-Marie"},
    {firstname: "Henry", middlename: "Thomas"},
    {firstname: "Pepper", middlename: "Arlene"},
];

let mykidResults = myKids.map(namesTogether);

function namesTogether(name) {
    return [name.firstname,name.middlename].join(" ");
};

console.log(mykidResults);

// output
// (4) ['Sophia Gabrielle', 'Charlotte Danger-Marie', 'Henry Thomas', 'Pepper Arlene']
    // 0: "Sophia Gabrielle"
    // 1: "Charlotte Danger-Marie"
    // 2: "Henry Thomas"
    // 3: "Pepper Arlene"
    // length: 4

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// pop() ✨
// Removes the last element of an array, and returns that element

// Removes the last element of an array
// Changes the original array
// Returns the removed element

// Parameter - - - Description
// NONE!

// Return Value Type - - - Description
// A variable - - - The removed item; A string, a number, an array, or any type allowed in an array

// 🤍🐸 E X A M P L E 🤍🐸 //

const demonNames = ["Satan", "Lucifer", "The Devil"];
// had to honor 666 lol

let removedD = demonNames.pop();

console.log(`The removed name is: ${removedD} 👿`);

// output
// The removed name is: The Devil 👿

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// push() ✨
// Adds new elements to the end of an array, and returns the new length

// Adds new items to the end of an array
// Changes the length of the array
// Returns the new length

// Parameter - - - Description
// item1 - - - The item/s to add to the array
// item2 - - - Minimum one item is required
// ...
// itemX

// Return Value Type - - - Description
// A number - - - The new length of the array

// 🤍🐸 E X A M P L E 🤍🐸 //

const amphibians = ["Frogs", "Toads", "Salamanders"];

let newPhibs = amphibians.push("Newts");

console.log(newPhibs);
// returns the length

// output
// 4

console.log(amphibians);
// returns arrayed w/ the pushed item

// output
// (4) ['Frogs', 'Toads', 'Salamanders', 'Newts']

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// reduce() ✨
// Reduce the values of an array to a single value (going left-to-right)

// Executes a reducer function for the array element
// Returns a single value - the function's accumulated result
// Does not execute the function for empty array elements
// Does not change the original array

// Parameter - - - Description
// function() - - - Required; a function to be run for each element in the array
// initialValue - - - Optional; a value to be passed to the function as the initial value

// Parameter - - - Description (REDUCER)
// total - - - Required; the initialValue, or previously returned value of the function
// currentValue - - - Required; the value of the current element
// currentIndex - - - Optional; the index of the current element
// arr - - - Optional; the array the current element belongs to

// Return Value Type - - - Description
// The accumulated result from the last call of the callback function

// 🤍🐸 E X A M P L E 🤍🐸 //

const chumbers = [1.3, 2.5, 3.7, 4.8, 5.0];
let chumbRes = chumbers.reduce(myFun, 0);

function myFun(total, num) {
    return total + Math.round(num);
};

console.log(chumbers);
// display the array
console.log(chumbRes);
// Compute the sum of the rounded numbers in an array

// output
// (5) [1.3, 2.5, 3.7, 4.8, 5]

// output pt 2
// 18
// 1.3 rounds to 1, 2.5 rounds to 3, 3.7 rounds to 4, 4.8 rounds to 5, 5.0 rounds to 5
// 5 + 5 + 4 + 3 + 1 = 18 yep

// 🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸🤍🐸 //

// reduceRight() ✨
// Reduce the values of an array to a single value (going right-to-left)

// Esecutes a reducer function for each array element
// Works right to left
// Returns a single value - the function's accumulated result
// Does not execute the function for empty elements

// Parameter - - - Description
// function() - - - Required; a function to be run for each element in the array
// initialValue - - - Optional; a value to be passed to the function as the initial value

// Parameter - - - Description (REDUCER)
// total - - - Required; the initialValue, or previously returned value of the function
// currentValue - - - Required; the value of the current element
// currentIndex - - - Optional; the index of the current element
// arr - - - Optional; the array the current element belongs to

// Return Value Type - - - Description
// The accumulated result from the last call of the callback function

// 🤍🐸 E X A M P L E 🤍🐸 //

const humbers = [1.3, 2.5, 3.7, 4.8, 5.0];
let humbRes = humbers.reduce(myHun, 0);

function myHun(total, num) {
    return total + Math.round(num);
};

console.log(humbers);
console.log(humbRes);

// output
// 18 (same result, just checking!)

// Again, subtracting the numbers in the array, starting from the end

const bumbers = [25, 50, 200];
let bumbRes = bumbers.reduceRight(myBun);

function myBun(total, num) {
    return total-num;
};

console.log(bumbers);
console.log(bumbRes);

// output bumbers
// (3) [25, 50, 200]
// output bumbRes
// 125

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