// SECTION 2.9
// Type Conversion

// Number to String 🌻🌻🌻

let val; // init but not really needed cuz wanted to show all the things
val = 5;

console.log(val);
console.log(typeof val);
console.log(val.length);
// length only works on strings, gives number of characters in string

// output of val is "5"
// output of typeof val is "number"
// val.length is "undefined"

val2 = String(5);

console.log(val2);
console.log(typeof val2);
console.log(val2.length);

// output
// 5, string, 1

val3 = String(4+4);

console.log(val3);
console.log(typeof val3);
console.log(val3.length);

// output
// 8, string, 1

// Boolean to String 🌻🌻🌻

val4 = String(true);

console.log(val4);
console.log(typeof val4);
console.log(val4.length);

// output
// true, string, 4

// Date to String 🌻🌻🌻

val5 = String(new Date());

console.log(val5);
console.log(typeof val5);
console.log(val5.length);

// output
// Fri Jan 07 2022 15:54:25 GMT-0800 (Pacific Standard Time), string, 57

// Array to String 🌻🌻🌻

val6 = String([1,2,3,4]);

console.log(val6);
console.log(typeof val6);
console.log(val6.length);

// output
// 1,2,3,4
// string
// 7

// toString Method 🌻🌻🌻

val7 = (5).toString();
val8 = (true).toString();

console.log(val7);
console.log(val8);
console.log(typeof val7);
console.log(typeof val8);
console.log(val7.length);
console.log(val8.length);

// 5, true, string, string, 1, 4

// String to Number 🌷🌷🌷

val9 = '5';

console.log(val9);
console.log(typeof val9);
    // console.log(val9.toFixed());
// had to comment this out cuz it broke my other console.logs

// 5, string, "val9.toFixed is not a function" error

val10 = Number('5');

console.log("Correctly wrapped String to Number")
console.log(val10);
console.log(typeof val10);
console.log(val10.toFixed());

// Null?

val11 = Number(null);
console.log(val11);
// output is "0"

    // val = Number("hello");
    // will gives us NAN, not a number response

// Parse Int Method  🌷🌷🌷

val12 = parseInt("100");
console.log(val12);
// 100

// Parse Float Method  🌷🌷🌷

// FOR DECIMALS
val13 = parseFloat("100.69");
console.log(val13);
// 100.69

// TYPE COERSION ⚡⚡⚡

const value1 = String(5); // note
const value2 = 6;
const sum = Number(value1 + value2);

console.log(sum);
// output 56 lololol