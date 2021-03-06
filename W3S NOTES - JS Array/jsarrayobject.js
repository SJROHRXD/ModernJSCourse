// JavaScript Array Reference β¨

// Array Object π·πΏπ»

// The Array object is used to store multiple values in a single variable.
// Array indexes are zero-based: The first element in the array is 0, the second is 1, and so on.

var fruits = ["apples", "bananas", "oranges"];

// "apples" are position zero, "bananas" are position one, "oranges" are position two

// JavaScript Array Methods π·πΏπ»

// concat() β¨
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

// π€πΈ E X A M P L E π€πΈ //

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

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// copyWithin() β¨
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

// π€πΈ E X A M P L E π€πΈ //

var shoes = ["boots", "flats", "heels", "sandals"];
shoes.copyWithin(2, 0);
console.log(shoes);
// will copy the first two array elements to the last two array elements
// 2 is the target; the target is array position 2, where we will insert our copy
// 0 is the start; where we begin our copy
// but why does it know to copy two array elements???

// output
// (4)Β ['boots', 'flats', 'boots', 'flats']
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

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// entries() β¨
// Returns a key/value pair Array Iteration Object

// Returns an Array Iterator Object with key/value pairs
// Does not change the original array

// Parameter - - - Description
// None!

// Return Value Type - - - Description
// An iterable - - - An array with key/value pairs

// π€πΈ E X A M P L E π€πΈ //

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

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// every() β¨
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

// π€πΈ E X A M P L E π€πΈ //

let ages = [70, 71, 72, 73, 74];

let result = ages.every(isOver69)

function isOver69(age) {
    return age > 69;
};

console.log(result);
// omfg I did it, remember to define a variable to console log β‘

// output
// true

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// fill() β¨
// Fill the elements in an array with a static value

// Fills specified elements in an array with a value
// Overwrites the original array

// Parameter - - - Description
// value - - - Required; the value to fill in
// start - - - Optional; the start index (position); Default is 0
// end - - - Optional; the stop index (position); Default is array length

// Return Value Type - - - Description
// An array - - - The filled array

// π€πΈ E X A M P L E π€πΈ //

var originalA = ["painting", "singing", "baking", "dancing", "coding"];

console.log(originalA);

originalA.fill("Sneezing");

console.log(originalA);

// output 1
// (5)Β ['painting', 'singing', 'baking', 'dancing', 'coding']
// output 2
// (5)Β ['Sneezing', 'Sneezing', 'Sneezing', 'Sneezing', 'Sneezing']

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// filter() β¨
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

// π€πΈ E X A M P L E π€πΈ //

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

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// find() β¨
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

// π€πΈ E X A M P L E π€πΈ //

const numbers = [2, 4, 6, 8, 11];
const result3 = numbers.find(checkEven);

function checkEven(number) {
    return number % 2 == 0;
};

console.log(`π»πΏπ· The first even number is ${result3}! π»πΏπ·`);
// had to make this more interesting

// output
// π»πΏπ· The first even number is 2! π»πΏπ·

// Again!
const nummies = [3, 5, 20, 22];
const result4 = nummies.find(checkEvener);

function checkEvener(nummy) {
    return nummy % 2 == 0;
};

console.log(`π»πΏπ· The first even number is ${result4}! π»πΏπ·`);

// output
// π»πΏπ· The first even number is 20! π»πΏπ·
// wait so how do I do an odd number without an if/else
// nvm that's for when I'm not tired

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// findIndex() β¨
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

// π€πΈ E X A M P L E π€πΈ //

const digits = [1, 2, 3, 4, 5];
const result5 = digits.findIndex(checkOver3);

function checkOver3(dig) {
    return dig > 3;
};

console.log(`π· The first "digit" greater than 3 is in this position of the array: ${result5}! π·`);
// well that was lengthy

// output
// π· The first "digit" greater than 3 is in this position of the array: 3! π·

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// forEach() β¨
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

// π€πΈ E X A M P L E π€πΈ //

let boopNs = [1, 2, 3, 4, 5];

boopNs.forEach(ellie => console.log(`For each: ${ellie}! β‘`));

// output
// individually:
    // For each: 1! β‘
    // For each: 2! β‘
    // For each: 3! β‘
    // For each: 4! β‘
    // For each: 5! β‘

// I know I can do way more with forEach, but this is good for now!

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// from() β¨
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

// π€πΈ E X A M P L E π€πΈ //

let gingerBoom = "ABCDEFG";
const gingArr = Array.from(gingerBoom);

console.log(`The array: ${gingArr}`)

// output
// The array: A,B,C,D,E,F,G

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// includes() β¨
// Check if an array contains the specified element

// Returns true if an array contains a specified value
// Returns false if the value is not found
// The method is case sensitive

// Parameter - - - Description
// element - - - Required; the value to search for
// start - - - Optional; start position; Default is 0

// Return Value Type - - - Description
// A boolean - - - true if the value is found; otherwise false

// π€πΈ E X A M P L E π€πΈ //

const kidsNames = ["Sophia", "Charlotte", "Henry", "William"];
let resultKNs = kidsNames.includes("Charlotte");

console.log(`Say "true" if the result contains the name "Charlotte"... \n...${resultKNs}!`);

// ouput
// Say "true" if the result contains the name "Charlotte"... 
// ...true!

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// indexOf() β¨
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

// π€πΈ E X A M P L E π€πΈ //

const flowers = ["Dahlia", "Peony", "Cosmo", "Aster"];
let resultFlowz = flowers.indexOf("Peony");

console.log(`The index position of Peony in the πΌ flowers πΌ array is: ${resultFlowz}`);

// ouput
// The index position of Peony in the πΌ flowers πΌ array is: 1

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// isArray() β¨
// Checks whether an object is an array

// Returns true if an object is an array, otherwise false

// Array.isArray() is a static property of the JavaScript Array object
// You can only use it as Array.isArray()
// Using x.isArray(), where x is an array, will return UNDEFINED

// Parameter - - - Description
// obj - - - Required; an object (or any data type) to be tested

// Return Value Type - - - Description
// A boolean - - - true if object is an array, otherwise false

// π€πΈ E X A M P L E π€πΈ //

const nebulae = ["Cat's Eye", "Medusa", "Lemon Slice", "Soap Bubble"];
let resultNebbies = Array.isArray(nebulae);

console.log(`Is β¨ nebulae β¨ an array? \n...${resultNebbies}`);

// output
// Is β¨ nebulae β¨ an array? 
// ...true

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// join() β¨
// Joins all elements of an array into a string

// Returns an array as a string
// Does not change the original array
// Any separator can be specified, the default is a comma

// Parameter - - - Description
// separator - - - Optional; the separator to be used; default is a comma

// Return Value Type - - - Description
// A string - - - The array values, separated by the specified separator

// π€πΈ E X A M P L E π€πΈ //

const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Indigo"];
let colorsText = colors.join();

document.getElementById("joinmethod").innerHTML = colorsText;

// output
// Red,Orange,Yellow,Green,Blue,Violet,Indigo

// Again! With a separator specified:

const colors2 = ["Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Indigo"];
let colorsText2 = colors2.join(` π€ and then π€ `);

document.getElementById("joinmethod2").innerHTML = colorsText2;

// output
// Red π€ and then π€ Orange π€ and then π€ Yellow π€ and then π€ Green π€ and then π€ Blue π€ and then π€ Violet π€ and then π€ Indigo

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// keys() β¨
// Returns an Array Iteration Object, containing the keys of the original array

// Returns an Array Iterator object with the keys of an array
// Does not change the original array

// Parameter - - - Description
// NONE!

// Return Value Type - - - Description
// An array - - - An array Iterator object containing the keys of an array

// π€πΈ E X A M P L E π€πΈ //

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

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// lastIndexOf() β¨
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

// π€πΈ E X A M P L E π€πΈ //

const bread = ["Sourdough", "Rye", "Brioche", "Pumpernickel"];
let indexB = bread.lastIndexOf("Rye");

console.log(`The last index position of Rye is... \n...${indexB}`);

// output
// The last index position of Rye is... 
// ...1

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// map() β¨
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

// π€πΈ E X A M P L E π€πΈ //

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

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// pop() β¨
// Removes the last element of an array, and returns that element

// Removes the last element of an array
// Changes the original array
// Returns the removed element

// Parameter - - - Description
// NONE!

// Return Value Type - - - Description
// A variable - - - The removed item; A string, a number, an array, or any type allowed in an array

// π€πΈ E X A M P L E π€πΈ //

const demonNames = ["Satan", "Lucifer", "The Devil"];
// had to honor 666 lol

let removedD = demonNames.pop();

console.log(`The removed name is: ${removedD} πΏ`);

// output
// The removed name is: The Devil πΏ

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// push() β¨
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

// π€πΈ E X A M P L E π€πΈ //

const amphibians = ["Frogs", "Toads", "Salamanders"];

let newPhibs = amphibians.push("Newts");

console.log(newPhibs);
// returns the length

// output
// 4

console.log(amphibians);
// returns arrayed w/ the pushed item

// output
// (4)Β ['Frogs', 'Toads', 'Salamanders', 'Newts']

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// reduce() β¨
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

// π€πΈ E X A M P L E π€πΈ //

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
// (5)Β [1.3, 2.5, 3.7, 4.8, 5]

// output pt 2
// 18
// 1.3 rounds to 1, 2.5 rounds to 3, 3.7 rounds to 4, 4.8 rounds to 5, 5.0 rounds to 5
// 5 + 5 + 4 + 3 + 1 = 18 yep

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// reduceRight() β¨
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

// π€πΈ E X A M P L E π€πΈ //

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
// (3)Β [25, 50, 200]
// output bumbRes
// 125

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// reverse() β¨
// Reverses the order of the elements in an array

// Reverses the order of the elements in an array
// Overwrites the original array

// Parameter - - - Description
// None listed!

// Return Value Type - - - Description
// The array after it has been reversed

// π€πΈ E X A M P L E π€πΈ //

const pasta = ["Manicotti", "Cannelloni", "Cavatelli", "Ravioli"];

console.log(`Mmm pasta: ${pasta}`);

let revPasta = pasta.reverse();

console.log(revPasta);

// output
// Mmm pasta: Manicotti,Cannelloni,Cavatelli,Ravioli

// output after reverse
// (4) ['Ravioli', 'Cavatelli', 'Cannelloni', 'Manicotti']
    // 0: "Ravioli"
    // 1: "Cavatelli"
    // 2: "Cannelloni"
    // 3: "Manicotti"
    // length: 4

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// shift() β¨
// Removes the first element of an array, and returns that element

// Removes the first item of an array
// Changes the original array
// Returns the shifted element

// Parameter - - - Description
// None!

// Return Value Type - - - Description
// A variable - - - The removed item; a string, a number, an array, or any type allowed in an array

// π€πΈ E X A M P L E π€πΈ //

const nailShapes = ["Coffin", "Oval", "Square", "Ballerina"];

console.log(`Array of nail shapes: ${nailShapes}`);

let shiftyNails = nailShapes.shift();

console.log(`Shifted item: ${shiftyNails}`);

console.log(`Array of nail shapes after shift: ${nailShapes}`);

// output console.log 1
// Array of nail shapes: Coffin,Oval,Square,Ballerina

// output console.log 2
// Shifted item: Coffin

// output console.log 3
// Array of nail shapes after shift: Oval,Square,Ballerina

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// slice() β¨
// Selects a part of an array, and returns the new array

// Returns selected elements in an array as a new array
// Selects from a given start, up to a given end
// Does not change the original array

// Parameter - - - Description
// start - - - Optional; start position, negative numbers select from the end of the array; Default is 0
// end - - - Optional; end position, negative numbers select from the end of the array; Default is 0

// Return Value Type - - - Description
// A new array containing the selected elements

// π€πΈ E X A M P L E π€πΈ //

const aunts = ["Aunt Alice", "Aunt Connie", "Great Aunt Frances"];

let slicedAunts = aunts.slice(0, 1);

console.log(slicedAunts);

// output
// ['Aunt Alice']

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// some() β¨
// Checks if any of the elements in an array pass a test

// Checks if any array elements pass a test (provided as a function)
// Exectutes the function once for each array element
// If the function returns true, some() returns true and stops
// If the function returns false, some() returns false and stops
// Does not execute the function for empty array elements
// Does not change the original array

// Parameter - - - Description
// function - - - Required; a function to run for each array element
// this - - - Optional; Default UNDEFINED

// Function Parameters - - - Description
// value - - - Required; the value of the current element
// index - - - Optional, the index of the current element
// arr - - - Optional, the array the current element belongs to

// Return Value Type - - - Description
// A boolean - - - true if any of the array elements pass the test, otherwise false

// π€πΈ E X A M P L E π€πΈ //

const cucUmbers = [6, 12, 18, 24, 26];

let cucUmResult = cucUmbers.some(checkSix);

function checkSix(six) {
    return six % 6 == 0;
};

console.log(cucUmResult);

// output
// true
// awesome. some are divisble by 6 so it passes!

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// sort() β¨
// Sorts the elements of an array

// Sorts the elements of an array
// Overwrites the original array
// Sorts the elements as strings in alphabetical and ascending order

// Provide a compare function to assist with sorting numbers like 25, 100

// Parameter - - - Description
// compareFunction - - - Optional; a function that defines a sort order
// This function should return a negative, zero, or positive value, depending on the arguments
// function(a, b) { return a-b }
// When sort() compares two values, it sends the values to the compare function
// then sorts the values according to the returned (negative, zero, positive) value

// this is a bit tricky
// want to try more complex sort() functions later

// Return Value Type - - - Description
// The array with the items sorted

// π€πΈ E X A M P L E π€πΈ //

const greens = ["Kale", "Arugula", "Bok Choy", "Spinach", "Cabbage"];

console.log(greens);

let sortedGreens = greens.sort();

console.log(sortedGreens);

// output
// (5)Β ['Kale', 'Arugula', 'Bok Choy', 'Spinach', 'Cabbage']

// output 2
// (5)Β ['Arugula', 'Bok Choy', 'Cabbage', 'Kale', 'Spinach']

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// splice() β¨
// Adds/Removes elements from an array

// Adds or Removes array elements
// Overwrites the original array

// Parameter - - - Description
// index - - - Required; the position to add/remove items; negative value defines the position from the end of array
// howmany - - - Optional; the number of items to be removed
// item1, ..., itemX - - - Optional; the new elements to be added

// Return Value Type - - - Description
// An array containing the removed items (if any)

// π€πΈ E X A M P L E π€πΈ //

const body = ["head", "shoulders", "knees", "toes"];

console.log(body);

let spliceBody = body.splice(1, 1);
// at position 1, remove 1 item

console.log(spliceBody);

// output
// (4)Β ['head', 'shoulders', 'knees', 'toes']
// ['shoulders']

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// toString() β¨
// Converts an array to a string, and returns the result

// Returns a string with array values separated by commas
// Does not change the original array

// This method is often used internally by JavaScript when an object needs to be displayed as text, etc

// Parameter - - - Description
// None!

// Return Value Type - - - Description
// A string - - - The array values separated by commas

// π€πΈ E X A M P L E π€πΈ //

const bodyParts = ["eyes", "ears", "mouth", "nose"];

console.log(bodyParts);

let stringBParts = bodyParts.toString();

console.log(stringBParts);

// output
// (4)Β ['eyes', 'ears', 'mouth', 'nose']
    // 0: "eyes"
    // 1: "ears"
    // 2: "mouth"
    // 3: "nose"
    // length: 4

// output 2
// eyes,ears,mouth,nose

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// unshift() β¨
// Adds new elements to the beginning of an array, and returns the new length

// Adds new elements to the beginning of an array
// Overwrites the original array

// Parameter - - - Description
// item1 - - - the item(s) to be added to the array
// item2 - - - minimum one item is required
// ...
// itemX

// Return Value Type - - - Description
// A number - - - the new length of the array

// π€πΈ E X A M P L E π€πΈ //

const bobsChars = ["Linda", "Tina", "Gene", "Louise"];

console.log(bobsChars);

let addBob = bobsChars.unshift("Bob");

console.log(`The new array: ${bobsChars}\nThe new array length: ${addBob}`);

// output
// (4)Β ['Linda', 'Tina', 'Gene', 'Louise']
// The new array: Bob,Linda,Tina,Gene,Louise
// The new array length: 5

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// valueOf() β¨
// Returns the primitive value of an array

// Returns the array itself
// Does not change the original array

// Parameter - - - Description
// None!

// Return Value Type - - - Description
// An array - - - The valueOf() method returns itself!

// π€πΈ E X A M P L E π€πΈ //

// so wait, why do I want this

const lastArrayBitch = ["bitch this is the last array", "fuck yeah"];

let lastABVal = lastArrayBitch.valueOf();

console.log(lastABVal);

// output
// (2)Β ['bitch this is the last array', 'fuck yeah']
    // 0: "bitch this is the last array"
    // 1: "fuck yeah"
    // length: 2

// π€πΈπ€πΈπ€πΈπ€πΈπ€πΈπ€πΈ //

// Array Properties π·πΏπ»

// constructor π§π§π­
// Returns the function that created the Array object's prototype

// The constructor property returns the function that created the Array prototype
// For JavaScript arrays the constructor property returns:

// function Array() { [native code] }

// length π§π§π­
// Sets or returns the number of elements in an array

// The length property sets or returns the number of elements in an array

const iLied = ["That was not the last array.", "God dammit."];

let lengthLie = iLied.length;

console.log(lengthLie);

// output
// 2
// yup

// prototype π§π§π­
// Allows you to add properties and methods to an Array object

// Add new properties and methods to arrays
// Prototype is a property available with all JavaScript objects

// Only change the prototype of your own objects β 

// Can be used to change to uppercase, lowercase, with functions;
// And add new properties of your own to objects:
// I have an object that has the properties: Name, Age, Location
// I can use prototype to add the property: Gender

function Person(nameofperson, ageofperson, cityofperson) {
    this.Name = nameofperson;
    this.Age = ageofperson;
    this.Location = cityofperson;
};

let Sarah = new Person("Sarah", "32", "Redmond");
let Nick = new Person("Nick", "33", "Redmond");

Person.prototype.Gender = "Gender will go here?";

console.log(Person);

// Person(nameofperson, ageofperson, cityofperson) {
    // this.Name = nameofperson;
    // this.Age = ageofperson;
    // this.Location = cityofperson;

console.log(Sarah);

// PersonΒ {Name: 'Sarah', Age: '32', Location: 'Redmond'}

console.log(Sarah.Gender);

// Gender will go here?

// Well, I'll figure out where it's storing that and why it's not in the Object eventually lol