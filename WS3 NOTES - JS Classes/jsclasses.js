// JavaScript Classes Reference ✨

console.log(`test`)

// Use the keyword class to create a class
// Always add constructor() method
// A class IS NOT AN OBJECT; it is a TEMPLATE for objects

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
};

// A class named Person is created
// Person has two initial properties: name and age

// Use the class to create objects

let myPerson1 = new Person("Sarah", "32");
let myPerson2 = new Person("Nick", "33");

// The constructor method is called automatically when a new object is created
// The constructor method is SPECIAL
// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties
// If not defined, JS will add an empty constructor method

// Constructor Syntax: constructor(parameters)

// Class Keywords
// extends - - - Extends a class (inherit)
// static - - - Defines a static method for a class
// super - - - Refers to the parent class
