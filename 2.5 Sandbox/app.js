// alert('Hello World!');

// LOG TO CONSOLE

/*
    MULTILINE
*/

console.log("Hello World");
console.log(123);

var greeting = "Hello";
console.log(greeting);

console.log([1,2,3,4]);

console.log({a:1, b:2});

console.table({a:1, b:2});

console.error("This is an error.");

// console.clear();

console.warn("This is a warning.");

console.time("Hello");
console.log("Hello World?");
console.log("Hello World?");
console.log("Hello World?");
console.log("Hello World?");
console.log("Hello World?");
console.timeEnd("Hello");
// time from beg to end / time to timeEnd

// var, let, const
    // var name = "Sarah Rohr";
    // console.log(name);

    // name = "Sarah Jeanne Rohr";
    // console.log(name);

// init var
    // var greeting;
// setting var to undefined
    // console.log(greeting);
    // greeting = "Hello? Sir?";
    // console.log(greeting);
// init when you have a conditional
// greeting equals this, if else greeting equals this

    // var name1 = "Name One";
// var name1 will throw error
// use $name for a jquery object
// _name not suggested, use for private vars

    // var firstName = "Sarah";
    // var lastName = "Rohr";
    // var middle_name = "Jeanne";
    // var MiddleName = "Jeanne";
// last one is pascal case, meh
// pascal case for object oriented programming, classes and stuff

// let
let name;
name = "Sarah Rohr";
console.log(name);
name = "Sarah Jeanne Rohr";
console.log(name);

// const
const name = "Sarah Rohr";
console.log(name);
// can't reassign
// have to assign a value

const person = {
    name: "Sarah",
    age: 33,
    location: "Redmond",
};

console.log(person);

person.name = "Sarah Jeanne Rohr";
console.log(person);
// we can change name, not "name" itself

const numbers = [1,2,3];
numbers.push(4);
// this is okay with const

console.log(numbers);

// use const unless you need to initialize
// use const unless you need value will change