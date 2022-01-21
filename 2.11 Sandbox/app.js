// String Methods & Concatenation

const firstName = "William";
const lastName = "Johnson";
const age = 32;
const str = "Hello there my name is Sarah";

let val;

val = firstName + lastName;
// output => WilliamJohnson

val = firstName + ' ' + lastName;
// output => William Johnson
// Concatenation

// Appending
val = "Brad ";
val += "Traversy";

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
// Hello, my name is William and I am 32

val = 'That\'s awesome, I can\'t wait';
// Escaping

val = firstName.length;
// output => 7

val = firstName.concat(' ', lastName);
// William Johnson
// Concat

val = firstName.toUpperCase();
val = firstName.toLowerCase();
// Change Case

val = firstName[0];
// W
// Taking 0 index (position) and giving us the value

val = firstName.indexOf('l');
// looks for L and gives us the index (position)

val = lastName.indexOf('l');
// looks for L and gives us the last index (position)
// indexOf will give a -1 if the character is not present

val = firstName.charAt('2');

val = firstName.charAt(firstName.length -1);
// will always give you last character

val = firstName.substring(0,4);
// plucking out the characters as a substring from position 0 to 4

val = firstName.slice(0,4);
// same thing as substring result in the case of a string

val = firstName.slice(-3);
// will start from end, take last 3

val = str.split(' ')
// split at the space, creates an array
// (6) ['Hello', 'there', 'my', 'name', 'is', 'Sarah']
// this will come in handy for forms or separating tags

val  = str.replace('Sarah', 'Nancy');
// Hello there my name is Nancy

val = str.includes("Hello");
// boolean
// true

console.log(val);