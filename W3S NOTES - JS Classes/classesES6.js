// https://www.youtube.com/watch?v=T-HGdc8L-7w

// JS Literal Object

var bubble = {
    x: 200,
    y: 300,
};

// Functional Programming vs OOP

// write code where we create objects and issue commands on them
// both functional and oop can provide reusable, modular code

// Encapsulation
// encapsulate everything it is to be a certain thing inside of an object lol
// encapsulate data and functionality into an object

// Class
// blueprint
// template
// cookie cutter
// object may be referred to as an instance

class Bubble {
    constructor(x, y) {
        this.x = x; // I do declare
        this.y = y;
    }
}

// new is a keyword that means to create an object
// special kind of function to construct an object
// declare Constructor, function definition inside the class

// this. is the bane of my existence


function setUp() {
createCanvas(600, 400); // idk his whole thing
let bubble = new Bubble(100, 300);
print(bubble.x, bubble.y);
};

// I could declare x and y directly in class but whatever

class Bubbler {
    constructor(x, y) {
        this.x = 100;
        this.y = 300;
    };
    move() {
        this.x = this.x + random(-5, 5); // I believe he did something with random also
        this.y = this.y + random(-5, 5);
    };
    show () {
        // etc etc etc
    };
}