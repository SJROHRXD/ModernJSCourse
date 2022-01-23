// Object Literals

const person = {
    firstName: "Steve",
    lastName: "Smith",
    age: 32,
    email: "steve@gmail.com",
    hobbies: ["music", "sports", "eating"],
    address: {
        city: "Seattle",
        state: "Washington",
    },
    getBirthYear: function() {
        return 2022 - this.age; // this
    },
};

let val;

val = person;

// get specific value
val = person.firstName;
val = person["firstName"];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();


// Output 🌼🤍🌿
console.log(val);

const people = [
    {name: "Sarah", age: 32},
    {name: "Mike", age: 23},
    {name: "Nancy", age: 50},
];

for(let i = 0; i < people.length, i++) {
    console.log(people[i].name);
    console.log(people[i].age);
};