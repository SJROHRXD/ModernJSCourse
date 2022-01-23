// Arrays and Array Methods

const numbers = [40,42,41,44,43,45,47,46];
const numbers2 = new Array(22,33,44,55,66);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get Length of Array
val = numbers.length;

// Check if Array
val = Array.isArray(numbers);

// Get Single Value from Element in Array
val = numbers[3];
val = numbers[0];

// Insert into Array
numbers[2] = 100;

// find index of value
val = numbers.indexOf(36);

// Mutate Array
// add on to end
numbers.push(250);

// add on to front
numbers.unshift(120);

// take off from end
numbers.pop();

// take off from front
numbers.shift();

// splice values
numbers.splice(1,1);

// reverse
numbers.reverse();

// concatenate
val = numbers.concat(numbers2);

// sort
val = fruit.sort();
val = numbers.sort();

// use compare function to assist sort
val = numbers.sort(function(x, y){
    return x - y;
});

// reverse sort
val = numbers.sort(function(x, y){
    return y - x;
});

// find
function under50(num) {
    return num < 50;
};

val = numbers.find(under50);

// Output 🤍🌷🌼
console.log(numbers);
console.log(val);